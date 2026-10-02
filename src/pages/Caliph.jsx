/* A single caliph's page. Shell only for now; stories to come. */
import { CaliphNav, Footer } from '../components/chrome.jsx';
import { caliphs } from '../data/caliphs.js';

function slugFromPath() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  const i = parts.indexOf('caliphs');
  return i >= 0 ? parts[i + 1] : null;
}

export function CaliphPage() {
  const slug = typeof window !== 'undefined' ? slugFromPath() : null;
  const caliph = caliphs.find((c) => c.slug === slug) || caliphs[0];
  return (
    <>
      <CaliphNav />
      <main className="caliph-page">
        <div className="wrap caliph-head">
          <p className="kicker">The Four Caliphs</p>
          <h1 className="caliph-title">{caliph.title}</h1>
          <p className="caliph-sub">
            {caliph.honorific} &middot; {caliph.years}
          </p>
        </div>
        <div className="wrap">
          <p className="caliph-soon">Stories from his life are being prepared.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
