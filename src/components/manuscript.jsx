/* Manuscript components: the storybook building blocks. */
import { useState, useRef, useEffect, Fragment } from 'react';
import { SceneDivider } from './chrome.jsx';
import { LineageTree } from './lineage.jsx';

export const html = (s) => ({ __html: s });

/* Scroll-reveal tracked in React state, so a later re-render (for example
   opening a collapsible panel or answering a quiz question) never wipes the
   `visible` class the way an imperative classList.add would. */
function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}

function Chevron() {
  return (
    <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Verse({ v }) {
  const [open, setOpen] = useState(false);
  const [ref, shown] = useReveal();
  return (
    <div ref={ref} className={`verse reveal${shown ? ' visible' : ''}${open ? ' is-open' : ''}`}>
      <button type="button" className="panel-toggle" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span className="ref-chip">{v.ref}</span>
        <span className="toggle-word">{open ? 'Hide' : 'Show'}</span>
        <Chevron />
      </button>
      <div className="panel-body">
        <div className="panel-inner">
          <p className="arabic" lang="ar" dir="rtl" dangerouslySetInnerHTML={html(v.arabic)} />
          <p className="translation" dangerouslySetInnerHTML={html(v.translation)} />
          <p className="citation" dangerouslySetInnerHTML={html(v.citation)} />
        </div>
      </div>
    </div>
  );
}

export function Hadith({ h }) {
  const [open, setOpen] = useState(false);
  const [ref, shown] = useReveal();
  return (
    <div ref={ref} className={`hadith reveal${shown ? ' visible' : ''}${open ? ' is-open' : ''}`}>
      <button type="button" className="panel-toggle" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span className="h-chip">Hadith</span>
        <span className="toggle-cite" dangerouslySetInnerHTML={html(h.label)} />
        <span className="toggle-word">{open ? 'Hide' : 'Show'}</span>
        <Chevron />
      </button>
      <div className="panel-body">
        <div className="panel-inner">
          <p className="h-text" dangerouslySetInnerHTML={html(h.text)} />
          <p className="h-narrator" dangerouslySetInnerHTML={html(h.narrator)} />
          <p className="h-cite">
            <a href={h.href} target="_blank" rel="noopener" dangerouslySetInnerHTML={html(h.label)} />
          </p>
        </div>
      </div>
    </div>
  );
}

export function Tafsir({ t }) {
  return (
    <div className="tafsir reveal">
      <p className="t-label"><span>From the Tafsir</span></p>
      <p className="t-text" dangerouslySetInnerHTML={html(t.text)} />
      <p className="t-cite">
        <a href={t.href} target="_blank" rel="noopener" dangerouslySetInnerHTML={html(t.label)} />
      </p>
    </div>
  );
}

export function Vignette({ v }) {
  return (
    <figure className="vignette reveal">
      <img src={v.img} alt={v.alt} loading="lazy" />
      <figcaption className="vignette-cap" dangerouslySetInnerHTML={html(v.caption)} />
      <IllustrationNote />
    </figure>
  );
}

/* Honest framing under every symbolic illustration. */
export function IllustrationNote() {
  return <p className="illustration-note">Fictional illustration · An imagined scene, not the actual event.</p>;
}

function Block({ b }) {
  switch (b.t) {
    case 'kicker':
      return <p className="scene-kicker">{b.html}</p>;
    case 'h2':
      return <h2>{b.html}</h2>;
    case 'p':
      return <p className={b.cls || undefined} dangerouslySetInnerHTML={html(b.html)} />;
    case 'verse':
      return <Verse v={b} />;
    case 'hadith':
      return <Hadith h={b} />;
    case 'tafsir':
      return <Tafsir t={b} />;
    case 'vignette':
      return <Vignette v={b} />;
    case 'lineage':
      return <LineageTree />;
    default:
      return null;
  }
}

export function Scene({ scene }) {
  return (
    <section className="scene reveal" id={scene.id} aria-label={scene.ariaLabel}>
      {scene.blocks.map((b, i) => (
        <Block key={i} b={b} />
      ))}
    </section>
  );
}

export function Scenes({ scenes }) {
  return (
    <>
      {scenes.map((s, i) => (
        <Fragment key={s.id}>
          {i > 0 && <SceneDivider />}
          <Scene scene={s} />
        </Fragment>
      ))}
    </>
  );
}

export function NoteCard({ noteHtml }) {
  return (
    <section className="note-card reveal" aria-label="A note on sources" dangerouslySetInnerHTML={html(noteHtml)} />
  );
}

export function Lessons({ lessons }) {
  return (
    <section className="lessons reveal" aria-label="Lessons">
      <h2>Lessons</h2>
      <ul>
        {lessons.map((l, i) => (
          <li key={i} dangerouslySetInnerHTML={html(l)} />
        ))}
      </ul>
    </section>
  );
}

export function Quiz({ questions }) {
  const [picks, setPicks] = useState({});
  const [ref, shown] = useReveal();
  const answered = Object.keys(picks).length;
  const correct = questions.filter((q, i) => picks[i] === q.answer).length;
  const done = answered === questions.length;

  return (
    <section ref={ref} className={`quiz reveal${shown ? ' visible' : ''}`} aria-label="Quiz">
      <h2>Check what you remember</h2>
      <p className="quiz-sub">Three questions, answered straight from the verses above.</p>
      <ol className="quiz-list">
        {questions.map((q, qi) => {
          const picked = picks[qi];
          const qdone = picked !== undefined;
          return (
            <li className="quiz-q" data-answer={q.answer} key={qi}>
              <p className="qq">
                <span className="qnum">{qi + 1}.</span>{' '}
                <span dangerouslySetInnerHTML={html(q.q)} />
              </p>
              <div className="opts" role="group" aria-label={'Question ' + (qi + 1)}>
                {q.options.map((opt, oi) => {
                  const cls =
                    'opt' +
                    (qdone && oi === q.answer ? ' correct' : '') +
                    (qdone && oi === picked && picked !== q.answer ? ' wrong' : '');
                  return (
                    <button
                      key={oi}
                      type="button"
                      className={cls}
                      data-i={oi}
                      disabled={qdone}
                      onClick={() => setPicks((p) => ({ ...p, [qi]: oi }))}
                      dangerouslySetInnerHTML={html(opt)}
                    />
                  );
                })}
              </div>
              <p className="qfb" hidden={!qdone}>
                {qdone &&
                  (picked === q.answer ? (
                    <>
                      <strong className="correct">Correct.</strong> As the verse says: {q.ref}.
                    </>
                  ) : (
                    <>
                      <strong className="wrong">Not quite.</strong> The verse says otherwise, see {q.ref} above.
                    </>
                  ))}
              </p>
              <p className="qref" hidden>
                {q.ref}
              </p>
            </li>
          );
        })}
      </ol>
      <p className="quiz-score" id="quizScore" hidden={!done}>
        {done && (
          <>
            You answered {correct} of {questions.length} correctly.{' '}
            {correct === questions.length
              ? 'MashaAllah, the verses are with you.'
              : 'Read the scenes once more and try again.'}
          </>
        )}
      </p>
    </section>
  );
}
