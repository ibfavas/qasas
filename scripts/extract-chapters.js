/* One-off extractor: stories/*.html -> src/data/*.js (structured chapter data).
   Run: node scripts/extract-chapters.js. Content is copied verbatim. */
const fs = require('fs');
const path = require('path');

function grab(re, s, group = 1) {
  const m = s.match(re);
  return m ? m[group].trim() : '';
}

function parseVerse(block) {
  return {
    t: 'verse',
    ref: grab(/<span class="ref-chip">([\s\S]*?)<\/span>/, block),
    arabic: grab(/<p class="arabic"[^>]*>([\s\S]*?)<\/p>/, block),
    translation: grab(/<p class="translation">([\s\S]*?)<\/p>/, block),
    citation: grab(/<p class="citation">([\s\S]*?)<\/p>/, block),
  };
}

function parseHadith(block) {
  return {
    t: 'hadith',
    text: grab(/<p class="h-text">([\s\S]*?)<\/p>/, block),
    narrator: grab(/<p class="h-narrator">([\s\S]*?)<\/p>/, block),
    href: grab(/<p class="h-cite"><a href="([^"]+)"/, block),
    label: grab(/<p class="h-cite"><a[^>]*>([\s\S]*?)<\/a>/, block),
  };
}

function parseVignette(block) {
  return {
    t: 'vignette',
    img: grab(/<img src="([^"]+)" alt=/, block),
    alt: grab(/<img src="[^"]+" alt="([^"]*)"/, block),
    caption: grab(/<div class="cap-card" hidden>([\s\S]*?)<\/div>/, block),
  };
}

function parseBlocks(inner) {
  const blocks = [];
  // Split on top-level block openers, keeping order.
  const re = /(<p class="scene-kicker">[\s\S]*?<\/p>|<h2>[\s\S]*?<\/h2>|<p(?: class="(?:dropcap)?")?>[\s\S]*?<\/p>|<div class="verse reveal">[\s\S]*?<\/div>|<div class="hadith reveal">[\s\S]*?<\/div>|<figure class="vignette reveal">[\s\S]*?<\/figure>)/g;
  let m;
  while ((m = re.exec(inner))) {
    const b = m[1];
    if (b.startsWith('<div class="verse')) blocks.push(parseVerse(b));
    else if (b.startsWith('<div class="hadith')) blocks.push(parseHadith(b));
    else if (b.startsWith('<figure')) blocks.push(parseVignette(b));
    else if (b.startsWith('<h2>')) blocks.push({ t: 'h2', html: grab(/<h2>([\s\S]*?)<\/h2>/, b) });
    else if (b.includes('scene-kicker')) blocks.push({ t: 'kicker', html: grab(/<p class="scene-kicker">([\s\S]*?)<\/p>/, b) });
    else {
      const cls = b.match(/<p class="([^"]*)">/);
      blocks.push({ t: 'p', cls: cls ? cls[1] : '', html: grab(/<p(?: class="[^"]*")?>([\s\S]*?)<\/p>/, b) });
    }
  }
  return blocks;
}

function parseQuiz(s) {
  const quizHtml = grab(/<section class="quiz reveal"[\s\S]*?<ol class="quiz-list">([\s\S]*?)<\/ol>/, s);
  const questions = [];
  const re = /<li class="quiz-q" data-answer="(\d)">([\s\S]*?)<\/li>/g;
  let m;
  while ((m = re.exec(quizHtml))) {
    const body = m[2];
    const q = grab(/<p class="qq">([\s\S]*?)<\/p>/, body).replace(/<span class="qnum">[\s\S]*?<\/span>/, '').trim();
    const options = [];
    const ore = /<button type="button" class="opt" data-i="\d">([\s\S]*?)<\/button>/g;
    let om;
    while ((om = ore.exec(body))) options.push(om[1].trim());
    questions.push({
      q,
      options,
      answer: parseInt(m[1], 10),
      ref: grab(/<p class="qref" hidden>([\s\S]*?)<\/p>/, body),
    });
  }
  return questions;
}

function parseChapter(file) {
  const s = fs.readFileSync(file, 'utf8');
  const heroHtml = grab(/(<header class="story-hero">[\s\S]*?<\/header>)/, s);
  const hero = {
    plaque: grab(/<span class="chapter-plaque">([\s\S]*?)<\/span>/, heroHtml),
    title: grab(/<h1 class="antique-gold reveal"[^>]*>([\s\S]*?)<\/h1>/, heroHtml),
    sub: grab(/<p class="hero-sub reveal"[^>]*>([\s\S]*?)<\/p>/, heroHtml),
    img: grab(/<figure class="story-figure[^>]*>[\s\S]*?<img src="([^"]+)"/, heroHtml),
    imgAlt: grab(/<figure class="story-figure[^>]*>[\s\S]*?<img src="[^"]+" alt="([^"]*)"/, heroHtml),
    caption: grab(/<figcaption>([\s\S]*?)<\/figcaption>/, heroHtml),
  };

  // Rail labels in order.
  const railLabels = [];
  const rre = /<span class="lbl">([\s\S]*?)<\/span>/g;
  let rm;
  while ((rm = rre.exec(s))) railLabels.push(rm[1].trim());

  // Scenes.
  const scenes = [];
  const sre = /<section class="scene reveal" id="(scene-\d+)" aria-label="([^"]+)">([\s\S]*?)<\/section>/g;
  let sm;
  while ((sm = sre.exec(s))) {
    const title = grab(/<h2>([\s\S]*?)<\/h2>/, sm[3]);
    scenes.push({ id: sm[1], ariaLabel: sm[2], title, blocks: parseBlocks(sm[3]) });
  }

  const note = grab(/(<section class="note-card reveal"[\s\S]*?<\/section>)/, s)
    .replace(/^<section[^>]*>/, '').replace(/<\/section>$/, '');
  const lessonsHtml = grab(/<section class="lessons reveal"[\s\S]*?<ul>([\s\S]*?)<\/ul>/, s);
  const lessons = [];
  const lre = /<li>([\s\S]*?)<\/li>/g;
  let lm;
  while ((lm = lre.exec(lessonsHtml))) lessons.push(lm[1].trim());

  const prevNext = [];
  const pre = /<nav class="prev-next"[\s\S]*?<\/nav>/g.exec(s);
  if (pre) {
    const pnre = /<a class="pn-card" href="([^"]+)">([\s\S]*?)<\/a>/g;
    let pm;
    while ((pm = pnre.exec(pre[0]))) {
      prevNext.push({
        href: pm[1],
        label: grab(/<span class="pn-label">([\s\S]*?)<\/span>/, pm[2]),
        title: grab(/<span class="pn-title">([\s\S]*?)<\/span>/, pm[2]),
        arrow: pm[2].includes('&larr;') ? 'back' : 'next',
      });
    }
  }

  return { hero, railLabels, scenes, note, lessons, quiz: parseQuiz(s), prevNext };
}

function emit(name, data) {
  const out = `/* ${name} chapter data — extracted verbatim from stories/${name}.html. Do not hand-edit; re-run scripts/extract-chapters.js. */\nexport const chapter = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', `${name}.js`), out);
  console.log(`wrote src/data/${name}.js — ${data.scenes.length} scenes, ${data.quiz.length} quiz Qs`);
}

fs.mkdirSync(path.join(__dirname, '..', 'src', 'data'), { recursive: true });
emit('adam', parseChapter(path.join(__dirname, '..', 'stories', 'adam.html')));
emit('yusuf', parseChapter(path.join(__dirname, '..', 'stories', 'yusuf.html')));
