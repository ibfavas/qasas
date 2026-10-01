/* Foundations guide page — mirrors the locked chapter template, driven by
   guide data: hero, intro, numbered sections (verse/hadith blocks), sources
   note, and prev/next between guides. */
import { StoryNav, Footer, Headpiece, RuleStar } from '../components/chrome.jsx';
import { Scenes, NoteCard, IllustrationNote, html } from '../components/manuscript.jsx';
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
    <nav className="prev-next" aria-label="More guides">
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

export function FoundationsPage({ guide }) {
  useSiteEffects();
  return (
    <>
      <div className="progress" aria-hidden="true">
        <span id="progressFill"></span>
      </div>
      <StoryNav />
      <main>
        <Hero hero={guide.hero} />
        <div className="story-layout">
          <aside className="scene-rail" aria-label="Guide sections">
            <p className="rail-title">Sections</p>
            <ol>
              {guide.sections.map((s, i) => (
                <li key={s.id}>
                  <a href={'#' + s.id} data-scene={i + 1}>
                    <span className="dot" aria-hidden="true"></span>
                    <span className="lbl">{guide.railLabels[i]}</span>
                  </a>
                </li>
              ))}
            </ol>
          </aside>
          <div className="story-body">
            <nav className="chip-rail" aria-label="Guide sections">
              {guide.sections.map((s, i) => (
                <a href={'#' + s.id} data-scene={i + 1} key={s.id}>
                  {guide.railLabels[i]}
                </a>
              ))}
            </nav>
            <section className="scene reveal" aria-label="Introduction">
              <p className="dropcap" dangerouslySetInnerHTML={html(guide.introHtml)} />
            </section>
            <Scenes scenes={guide.sections} />
            <NoteCard noteHtml={guide.note} />
          </div>
        </div>
        <PrevNext items={guide.prevNext} />
      </main>
      <Footer />
    </>
  );
}
