/* Chapter page: the locked Adam template, driven by chapter data. */
import { StoryNav, Footer, Headpiece, RuleStar } from '../components/chrome.jsx';
import { Scenes, NoteCard, Lessons, Quiz, IllustrationNote, html } from '../components/manuscript.jsx';
import { useSiteEffects } from '../hooks/effects.js';

function Hero({ hero }) {
  return (
    <header className="story-hero">
      <Headpiece />
      <p className="reveal">
        <span className="chapter-plaque">{hero.plaque}</span>
      </p>
      <h1 className="antique-gold reveal" data-delay="1">
        {hero.title}
      </h1>
      <p className="hero-sub reveal" data-delay="2">
        {hero.sub}
      </p>
      <RuleStar />
      {hero.img ? (
        <figure className="story-figure reveal" data-delay="2">
          <img src={hero.img} alt={hero.imgAlt} fetchPriority="high" />
          <figcaption dangerouslySetInnerHTML={html(hero.caption)} />
          <IllustrationNote />
        </figure>
      ) : null}
    </header>
  );
}

function PrevNext({ items }) {
  return (
    <nav className="prev-next" aria-label="More chapters">
      {items.map((pn, i) => (
        <a className="pn-card" href={pn.href} key={i}>
          {pn.arrow === 'back' && (
            <span className="pn-arrow" aria-hidden="true">
              ←
            </span>
          )}
          <span>
            <span className="pn-label">{pn.label}</span>
            <span className="pn-title">{pn.title}</span>
          </span>
          {pn.arrow === 'next' && (
            <span className="pn-arrow" aria-hidden="true">
              →
            </span>
          )}
        </a>
      ))}
    </nav>
  );
}

export function ChapterPage({ chapter }) {
  useSiteEffects();
  return (
    <>
      <div className="progress" aria-hidden="true">
        <span id="progressFill"></span>
      </div>
      <StoryNav />
      <main>
        <Hero hero={chapter.hero} />
        <div className="story-layout">
          <aside className="scene-rail" aria-label="Story scenes">
            <p className="rail-title">Scenes</p>
            <ol>
              {chapter.scenes.map((s, i) => (
                <li key={s.id}>
                  <a href={'#' + s.id} data-scene={i + 1}>
                    <span className="dot" aria-hidden="true"></span>
                    <span className="lbl">{chapter.railLabels[i]}</span>
                  </a>
                </li>
              ))}
            </ol>
          </aside>
          <div className="story-body">
            <nav className="chip-rail" aria-label="Story scenes">
              {chapter.scenes.map((s, i) => (
                <a href={'#' + s.id} data-scene={i + 1} key={s.id}>
                  {chapter.railLabels[i]}
                </a>
              ))}
            </nav>
            <Scenes scenes={chapter.scenes} />
            <NoteCard noteHtml={chapter.note} />
            <Lessons lessons={chapter.lessons} />
            <Quiz questions={chapter.quiz} />
          </div>
        </div>
        <PrevNext items={chapter.prevNext} />
      </main>
      <Footer />
    </>
  );
}
