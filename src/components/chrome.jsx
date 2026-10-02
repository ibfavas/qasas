/* Shared chrome: navs, footer, manuscript ornaments. */
import { useState } from 'react';

function NavToggle({ open, onToggle }) {
  return (
    <button
      className={'nav-toggle' + (open ? ' open' : '')}
      aria-expanded={open}
      aria-label={open ? 'Close menu' : 'Open menu'}
      onClick={onToggle}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  );
}

export function HomeNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <nav className="nav nav-pill nav-home-overlay" aria-label="Main navigation">
      <div className="nav-pill-inner">
        <a className="brand brand-pill" href="index.html" aria-label="Qasas ul-Huda home">
          <img src="assets/brand/logo.png" alt="" width="30" height="30" />
        </a>
        <NavToggle open={open} onToggle={() => setOpen(!open)} />
        <ul className={'nav-links nav-links-pill' + (open ? ' open' : '')}>
          <li><a href="index.html" onClick={close}>Home</a></li>
          <li><a href="asma-ul-husna/" onClick={close}>Asma ul Husna</a></li>
          <li><a href="#timeline" onClick={close}>Stories of Prophets</a></li>
          <li><a href="#foundations" onClick={close}>Foundations</a></li>
          <li><a href="#caliphs" onClick={close}>The Four Caliphs</a></li>
          <li><a href="#resources" onClick={close}>Sources</a></li>
          <li><a href="#about" onClick={close}>About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export function StoryNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <nav className="nav nav-pill" aria-label="Main navigation">
      <div className="nav-pill-inner">
        <a className="brand brand-pill" href="../index.html" aria-label="Qasas ul-Huda home">
          <img src="../assets/brand/logo.png" alt="" width="30" height="30" />
        </a>
        <NavToggle open={open} onToggle={() => setOpen(!open)} />
        <ul className={'nav-links nav-links-pill' + (open ? ' open' : '')}>
          <li><a href="../asma-ul-husna/" onClick={close}>Asma ul Husna</a></li>
          <li><a href="../index.html#timeline" onClick={close}>Stories of Prophets</a></li>
          <li><a href="../index.html#foundations" onClick={close}>Foundations</a></li>
          <li><a href="../index.html#caliphs" onClick={close}>The Four Caliphs</a></li>
          <li><a href="../index.html#resources" onClick={close}>Sources</a></li>
          <li><a href="../index.html#about" onClick={close}>About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="fbrand">Qasas ul-Huda</div>
      <p>Stories of Guidance</p>
      <p>Translations: Saheeh International via quran.com · Arabic: Uthmani script</p>
      <p>A free educational project, not for sale, not for profit.</p>
    </footer>
  );
}

export function Headpiece() {
  return (
    <div className="headpiece reveal" aria-hidden="true">
      <svg viewBox="0 0 200 24" fill="none">
        <line x1="6" y1="12.5" x2="76" y2="11.7" />
        <rect className="dia" x="86" y="8" width="7" height="7" transform="rotate(45 89.5 11.5)" />
        <rect className="dia-fill" x="96" y="6.5" width="9" height="9" transform="rotate(45 100.5 11)" />
        <rect className="dia" x="109" y="8" width="7" height="7" transform="rotate(45 112.5 11.5)" />
        <line x1="124" y1="11.5" x2="194" y2="12.5" />
        <circle cx="82" cy="12" r="1.4" /><circle cx="118" cy="12" r="1.4" />
      </svg>
    </div>
  );
}

export function RuleStar() {
  return (
    <div className="rule-star reveal" data-delay="2" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ color: 'var(--gold-deep)' }}>
        <rect x="8" y="8" width="16" height="16" />
        <rect x="8" y="8" width="16" height="16" transform="rotate(45 16 16)" />
      </svg>
    </div>
  );
}

export function SceneDivider() {
  return (
    <div className="scene-divider" aria-hidden="true">
      <svg viewBox="0 0 240 20" fill="none">
        <line x1="4" y1="10.6" x2="100" y2="9.6" />
        <circle cx="107" cy="10" r="1.5" />
        <rect className="dia" x="114" y="6" width="8" height="8" transform="rotate(45 118 10)" />
        <circle cx="133" cy="10" r="1.5" />
        <line x1="140" y1="10.4" x2="236" y2="9.4" />
      </svg>
    </div>
  );
}

export function ColophonRule() {
  return (
    <div className="colo-rule" aria-hidden="true">
      <svg viewBox="0 0 120 16" fill="none">
        <line x1="4" y1="8.4" x2="50" y2="7.6" />
        <rect className="dia" x="56" y="4" width="8" height="8" transform="rotate(45 60 8)" />
        <line x1="70" y1="7.8" x2="116" y2="8.4" />
      </svg>
    </div>
  );
}
