/* Homepage v4: original illuminated cover. All artwork generated for Qasas ul-Huda. */
import { HomeNav, Footer, ColophonRule } from '../components/chrome.jsx';
import { prophets } from '../data/prophets.js';
import { foundations, foundationOrder } from '../data/foundations.js';
import { caliphs } from '../data/caliphs.js';
import { useSiteEffects } from '../hooks/effects.js';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];

function ProphetItem({ p }) {
  const medallion = (
    <span
      className="medallion"
      dangerouslySetInnerHTML={{
        __html: '<svg viewBox="0 0 48 48"' + p.svgAttrs + ' aria-hidden="true">' + p.svgInner + '</svg>',
      }}
    />
  );
  const inner = (
    <>
      {medallion}
      <span className="pnum">{p.pnum}</span>
      <span className="pname" dangerouslySetInnerHTML={{ __html: p.pname }} />
      {p.soon && <span className="soon-tag">Soon</span>}
    </>
  );
  return p.tag === 'a' ? (
    <a className="prophet" role="listitem" href={p.href} aria-label={p.aria}>
      {inner}
    </a>
  ) : (
    <span className="prophet soon" role="listitem">
      {inner}
    </span>
  );
}

const PILLARS = [
  {
    icon: 'assets/home/icon-scroll.png',
    title: 'Authentic Narrations',
    text: 'Carefully researched stories drawn from classical sources, presented with reverence and clarity.',
  },
  {
    icon: 'assets/home/icon-star.png',
    title: 'Interactive Timeline',
    text: 'Explore the chronological journey through historical periods and pivotal moments.',
  },
  {
    icon: 'assets/home/icon-lantern.png',
    title: 'Scholarly Insights',
    text: 'Lessons and reflections from each story, drawn only from the verses and authentic narrations.',
  },
];

const ERAS = [
  { numeral: 'I', name: 'Creation' },
  { numeral: 'II', name: 'Call' },
  { numeral: 'III', name: 'Migration' },
  { numeral: 'IV', name: 'Revelation' },
  { numeral: 'V', name: 'Trial' },
  { numeral: 'VI', name: 'Triumph' },
  { numeral: 'VII', name: 'Legacy' },
];

/* 12:101: copied verbatim from verses.json, the same strings the Yusuf chapter renders. */
const CALLOUT = {
  ar: 'رَبِّ قَدْ ءَاتَيْتَنِى مِنَ ٱلْمُلْكِ وَعَلَّمْتَنِى مِن تَأْوِيلِ ٱلْأَحَادِيثِ ۚ فَاطِرَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ أَنتَ وَلِىِّۦ فِى ٱلدُّنْيَا وَٱلْـَٔاخِرَةِ ۖ تَوَفَّنِى مُسْلِمًا وَأَلْحِقْنِى بِٱلصَّـٰلِحِينَ',
  en: 'My Lord, You have given me [something] of sovereignty and taught me of the interpretation of dreams. Creator of the heavens and earth, You are my protector in this world and the Hereafter. Cause me to die a Muslim and join me with the righteous."',
  cite: 'Surah Yusuf · 12:101',
};

export function HomePage() {
  useSiteEffects();
  return (
    <>
      <HomeNav />

      <header className="hero-night">
        <div className="hero-night-bg" aria-hidden="true">
          <img src="assets/home/hero-night-dunes.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="wrap hero-night-inner">
          <img
            className="hero-emblem reveal"
            src="assets/brand/logo.png"
            alt=""
            width="116"
            height="116"
          />
          <p className="hero-night-kicker reveal" data-delay="1">
            A free illuminated manuscript
          </p>
          <h1 className="hero-title reveal" data-delay="1">
            Qasas ul-Huda
          </h1>
          <p className="hero-night-sub reveal" data-delay="2">
            Stories of Guidance
          </p>
          <p className="hero-night-lede reveal" data-delay="3">
            Twenty-five lives, one thread of guidance, told from the verses themselves, with nothing added and
            nothing hidden.
          </p>
          <div className="hero-night-ctas reveal" data-delay="4">
            <a className="btn" href="stories/?p=adam">
              Begin with Adam
            </a>
            <a className="btn btn-ghost" href="#timeline">
              Explore the timeline
            </a>
          </div>
        </div>
        <span className="hero-night-scroll" aria-hidden="true">
          <i></i>
        </span>
      </header>

      <div className="wrap">
        <div className="flourish flourish-home reveal" aria-hidden="true">
          <img src="assets/home/flourish-divider.png" alt="" loading="lazy" />
        </div>
      </div>

      <main>
        <section className="section verse-callout-sec" aria-label="From the Quran">
          <div className="wrap">
            <figure className="verse-callout reveal">
              <img className="vc-emblem" src="assets/brand/logo.png" alt="" width="54" height="54" />
              <blockquote>
                <p className="vc-ar" dir="rtl" lang="ar">
                  {CALLOUT.ar}
                </p>
                <p className="vc-en">{CALLOUT.en}</p>
              </blockquote>
              <figcaption>{CALLOUT.cite}</figcaption>
            </figure>
          </div>
        </section>

        <section className="section pillars" aria-label="What Qasas ul-Huda offers">
          <div className="wrap">
            <div className="pillar-grid">
              {PILLARS.map((p, i) => (
                <div className="pillar-card reveal" data-delay={i + 1} key={p.title}>
                  <img className="pillar-icon" src={p.icon} alt="" loading="lazy" />
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section timeline" id="timeline">
          <div className="wrap">
            <p className="kicker reveal">The Timeline</p>
            <h2 className="section-title reveal" data-delay="1">
              The prophets in order
            </h2>
            <p className="lede reveal" data-delay="2">
              Twenty-five messengers, from the first to the last. Chapters open as they are written: Adam, Idris,
              Nuh, Hud, Salih and Yusuf are ready to read.
            </p>
            <div className="timeline-rail reveal" data-delay="2" role="list" aria-label="Prophets in chronological order">
              {prophets.map((p, i) => (
                <ProphetItem p={p} key={i} />
              ))}
            </div>
            <p className="timeline-hint">Scroll sideways to travel through all twenty-five</p>
          </div>
        </section>

        <section className="section" id="foundations">
          <div className="wrap">
            <p className="kicker reveal">Foundations</p>
            <h2 className="section-title reveal" data-delay="1">
              Beyond the stories
            </h2>
            <p className="lede reveal" data-delay="2">
              Short articles on the essentials every story stands on, each one verified from the Quran and authentic
              hadith before it is set down.
            </p>
            <div className="foundation-rows reveal" data-delay="3">
              {foundationOrder.map((slug, i) => (
                <a className="foundation-row" href={'foundations/?p=' + slug} key={slug}>
                  <span className="fr-numeral" aria-hidden="true">{ROMAN[i]}</span>
                  <span className="fr-title">{foundations[slug].hero.title}</span>
                  <span className="fr-arrow" aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="caliphs">
          <div className="wrap">
            <p className="kicker reveal">The Rightly Guided</p>
            <h2 className="section-title reveal" data-delay="1">
              The Four Caliphs
            </h2>
            <p className="lede reveal" data-delay="2">
              Short stories from the lives of the four rightly guided caliphs, each one verified before it is set
              down.
            </p>
            <div className="caliph-rows reveal" data-delay="3">
              {caliphs.map((c) => (
                <a className="caliph-row" href={'caliphs/' + c.slug + '/'} key={c.slug}>
                  <span className="cr-medal" aria-hidden="true">{c.numeral}</span>
                  <span className="cr-text">
                    <span className="cr-name">{c.name} (RA)</span>
                    <span className="cr-sub">{c.honorific} &middot; {c.years}</span>
                  </span>
                  <span className="cr-arrow" aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section eras" aria-label="The journey of the prophets">
          <div className="wrap">
            <p className="kicker reveal">The Journey</p>
            <h2 className="section-title reveal" data-delay="1">
              Seven ages, one story
            </h2>
            <div className="era-journey reveal" data-delay="2">
              {ERAS.map((e) => (
                <div className="era-station" key={e.name}>
                  <span className="era-dot" aria-hidden="true">
                    {e.numeral}
                  </span>
                  <span className="era-name">{e.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap">
            <p className="kicker reveal">About</p>
            <h2 className="section-title reveal" data-delay="1">
              Why Qasas ul-Huda exists
            </h2>
            <div className="narrative">
              <p className="reveal dropcap" data-delay="2">
                The Quran calls the stories of the messengers a reminder and a lesson for people of understanding.
                Qasas ul-Huda is an attempt to gather those stories in one place, told plainly, anchored in the verses
                themselves, and designed with the reverence they deserve.
              </p>
              <p className="reveal" data-delay="3">
                Every chapter shows its sources: the Arabic text of each verse, the Saheeh International translation,
                and the exact surah and verse number: no invented dialogue, no embellished details.
              </p>
              <p className="reveal" data-delay="3">
                Qasas ul-Huda is a free educational project. It carries no ads and sells nothing; knowledge of the prophets
                should reach everyone.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="resources">
          <div className="wrap">
            <p className="kicker reveal">Resources</p>
            <h2 className="section-title reveal" data-delay="1">
              Where every word comes from
            </h2>
            <p className="lede reveal" data-delay="2">
              Qasas ul-Huda adds nothing of its own to the sources. Read them yourself: every verse and hadith on this site
              links back to where it was verified.
            </p>
            <div className="resource-grid">
              <a
                className="resource-card reveal"
                data-delay="1"
                href="https://quran.com"
                target="_blank"
                rel="noopener"
              >
                <h3>Quran.com</h3>
                <p>
                  Arabic in Uthmani script, with the Saheeh International translation. The first and final authority
                  for every chapter.
                </p>
                <span className="read-link">Visit quran.com</span>
              </a>
              <a
                className="resource-card reveal"
                data-delay="2"
                href="https://sunnah.com"
                target="_blank"
                rel="noopener"
              >
                <h3>Sunnah.com</h3>
                <p>The hadith collections, checked one narration at a time. Only authentic narrations are ever quoted.</p>
                <span className="read-link">Visit sunnah.com</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="colophon" aria-label="Colophon">
          <div className="colophon reveal">
            <p className="kicker">Colophon</p>
            <p>
              Qasas ul-Huda is set by hand in Cormorant Garamond and EB Garamond, with Amiri for the Arabic of the Quran.
              Every verse was copied from the mushaf and checked word for word; every hadith was verified on
              Sunnah.com, and each one links back to its source.
            </p>
            <p>
              This site is free, and it will stay free. There are no advertisements, no trackers, no accounts, and
              nothing for sale: the stories of the prophets belong to everyone.
            </p>
            <ColophonRule />
            <p>Set down in 2026. If a verse or a citation is ever wrong here, it will be corrected.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
