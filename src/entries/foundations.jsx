/* Single foundations page: one URL, content switches by the guide chosen.
   /foundations/?p=iman  or  /foundations/?p=pillars  or  /foundations/?p=quran
   (hash #iman also works) */
import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';
import { FoundationsPage } from '../pages/Foundations.jsx';
import { StoryNav, Footer, Headpiece, RuleStar } from '../components/chrome.jsx';
import { useSiteEffects } from '../hooks/effects.js';
import { foundations, foundationOrder } from '../data/foundations.js';

function slugFromUrl() {
  try {
    const q = new URLSearchParams(window.location.search).get('p');
    if (q && foundations[q] && !foundations[q].soon) return q;
  } catch {
    /* URLSearchParams unavailable — fall through to hash */
  }
  const hsh = window.location.hash.replace(/^#\/?/, '');
  if (hsh && foundations[hsh] && !foundations[hsh].soon) return hsh;
  return null;
}

function FoundationsIndex() {
  useSiteEffects();
  return (
    <>
      <StoryNav />
      <main className="story-index">
        <Headpiece />
        <p className="reveal">
          <span className="chapter-plaque">Qasas ul-Huda</span>
        </p>
        <h1 className="antique-gold reveal" data-delay="1">
          Foundations
        </h1>
        <RuleStar />
        <ul className="story-index-list reveal" data-delay="2">
          {foundationOrder.map((slug) => (
            <li key={slug}>
              {foundations[slug].soon ? (
                <span className="soon-guide">
                  <span className="pn-label">Guide · being written</span>
                  <span className="pn-title">{foundations[slug].hero.title}</span>
                </span>
              ) : (
                <a href={'?p=' + slug}>
                  <span className="pn-label">{foundations[slug].hero.plaque}</span>
                  <span className="pn-title">{foundations[slug].hero.title}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}

function FoundationsApp() {
  const slug = slugFromUrl();
  const guide = slug ? foundations[slug] : null;
  useEffect(() => {
    document.title = guide ? guide.hero.title + ' \u00b7 Qasas ul-Huda' : 'Foundations \u00b7 Qasas ul-Huda';
    if (guide) window.scrollTo(0, 0);
  }, [slug, guide]);
  if (!guide) return <FoundationsIndex />;
  return <FoundationsPage key={slug} guide={guide} />;
}

createRoot(document.getElementById('root')).render(<FoundationsApp />);
