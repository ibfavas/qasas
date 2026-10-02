/* Manuscript components: the storybook building blocks. */
import { useState, Fragment } from 'react';
import { SceneDivider } from './chrome.jsx';

export const html = (s) => ({ __html: s });

export function Verse({ v }) {
  return (
    <div className="verse reveal">
      <p className="verse-marker"><span className="ref-chip">{v.ref}</span></p>
      <p className="arabic" lang="ar" dir="rtl" dangerouslySetInnerHTML={html(v.arabic)} />
      <p className="translation" dangerouslySetInnerHTML={html(v.translation)} />
      <p className="citation" dangerouslySetInnerHTML={html(v.citation)} />
    </div>
  );
}

export function Hadith({ h }) {
  return (
    <div className="hadith reveal">
      <p className="h-label"><span>Hadith</span></p>
      <p className="h-text" dangerouslySetInnerHTML={html(h.text)} />
      <p className="h-narrator" dangerouslySetInnerHTML={html(h.narrator)} />
      <p className="h-cite">
        <a href={h.href} target="_blank" rel="noopener" dangerouslySetInnerHTML={html(h.label)} />
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
    case 'vignette':
      return <Vignette v={b} />;
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
  const answered = Object.keys(picks).length;
  const correct = questions.filter((q, i) => picks[i] === q.answer).length;
  const done = answered === questions.length;

  return (
    <section className="quiz reveal" aria-label="Quiz">
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
