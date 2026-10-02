/* Asma ul Husna: the 99 beautiful names of Allah, in the illuminated grid layout. */
import { StoryNav, Footer } from '../components/chrome.jsx';
import { asmaNames } from '../data/asma-ul-husna.js';

export function AsmaPage() {
  return (
    <>
      <StoryNav />
      <main className="asma">
        <div className="wrap asma-head">
          <p className="kicker">The Beautiful Names</p>
          <h1 className="asma-title">Asma ul Husna</h1>
          <p className="asma-verse">
            &ldquo;And to Allah belong the best names, so invoke Him by them.&rdquo;
            <span className="asma-ref">Quran 7:180</span>
          </p>
        </div>
        <div className="wrap">
          <div className="asma-grid">
            {asmaNames.map((name) => (
              <article className="asma-card" key={name.n}>
                <span className="asma-num">{name.n}</span>
                <div className="asma-ar" lang="ar">{name.ar}</div>
                <div className="asma-tr">{name.tr}</div>
                <div className="asma-en">{name.en}</div>
              </article>
            ))}
          </div>
          <p className="asma-note">
            The names above follow the well-known enumeration narrated in Jami&lsquo; at-Tirmidhi 3507.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
