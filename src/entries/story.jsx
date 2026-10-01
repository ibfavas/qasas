/* Single story page: one URL, content switches by the prophet chosen.
   /stories/?p=adam  or  /stories/?p=yusuf  (hash #adam also works) */
import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';
import { ChapterPage } from '../pages/Chapter.jsx';
import { StoryNav, Footer, Headpiece, RuleStar } from '../components/chrome.jsx';
import { useSiteEffects } from '../hooks/effects.js';
import { chapters, chapterOrder } from '../data/chapters.js';

function slugFromUrl() {
  try {
    const q = new URLSearchParams(window.location.search).get('p');
    if (q && chapters[q]) return q;
  } catch {
    /* URLSearchParams unavailable — fall through to hash */
  }
  const h = window.location.hash.replace(/^#\/?/, '');
  if (h && chapters[h]) return h;
  return null;
}

function StoryIndex() {
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
          Stories of Guidance
        </h1>
        <RuleStar />
        <ul className="story-index-list reveal" data-delay="2">
          {chapterOrder.map((slug) => (
            <li key={slug}>
              <a href={'?p=' + slug}>
                <span className="pn-label">{chapters[slug].hero.plaque}</span>
                <span className="pn-title">{chapters[slug].hero.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}

function StoryApp() {
  const slug = slugFromUrl();
  const chapter = slug ? chapters[slug] : null;
  useEffect(() => {
    document.title = chapter ? chapter.hero.title + ' \u00b7 Qasas ul-Huda' : 'Stories of Guidance \u00b7 Qasas ul-Huda';
    if (chapter) window.scrollTo(0, 0);
  }, [slug, chapter]);
  if (!chapter) return <StoryIndex />;
  return <ChapterPage key={slug} chapter={chapter} />;
}

createRoot(document.getElementById('root')).render(<StoryApp />);
