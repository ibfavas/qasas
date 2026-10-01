/* QASAS Phase 2: calm interactivity for storybook chapters.
   Vanilla JS. Everything stays gentle; all motion disabled under
   prefers-reduced-motion. */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- (g) soft page fade-in on load, fade-out on internal nav ---------- */
  function markLoaded() {
    document.body.classList.add('loaded');
  }
  if (document.readyState === 'complete') {
    markLoaded();
  } else {
    window.addEventListener('load', markLoaded);
    // Fallback in case load is delayed by fonts/images.
    setTimeout(markLoaded, 1200);
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) === '#') return;          // in-page anchors
    if (a.target === '_blank' || a.hasAttribute('download')) return;
    var url;
    try { url = new URL(href, window.location.href); }
    catch (err) { return; }
    if (url.origin !== window.location.origin) return;    // external links
    if (reduceMotion) return;                             // navigate instantly
    e.preventDefault();
    document.body.classList.add('leaving');
    setTimeout(function () { window.location.href = url.href; }, 260);
  });

  /* ---------- (a) gold reading-progress bar (story pages only) ---------- */
  var progressFill = document.getElementById('progressFill');
  if (progressFill) {
    var ticking = false;
    function updateProgress() {
      ticking = false;
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      var p = max > 0 ? (window.pageYOffset / max) : 0;
      progressFill.style.width = (Math.min(1, Math.max(0, p)) * 100).toFixed(2) + '%';
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(updateProgress); }
    }, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();
  }

  /* ---------- (c) calm scroll reveals with stagger ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- (b) scene rail scroll-spy + click-to-scroll ---------- */
  var scenes = Array.prototype.slice.call(document.querySelectorAll('.scene[id]'));
  var railLinks = Array.prototype.slice.call(
    document.querySelectorAll('.scene-rail a[data-scene], .chip-rail a[data-scene]'));
  if (scenes.length && railLinks.length) {
    function setActive(id) {
      railLinks.forEach(function (l) {
        l.classList.toggle('active', l.getAttribute('href') === '#' + id);
      });
    }
    if ('IntersectionObserver' in window && !reduceMotion) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      }, { rootMargin: '-30% 0px -55% 0px', threshold: 0 });
      scenes.forEach(function (s) { spy.observe(s); });
    }
    railLinks.forEach(function (l) {
      l.addEventListener('click', function (e) {
        var target = document.querySelector(l.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        setActive(target.id);
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        if (history.replaceState) history.replaceState(null, '', l.getAttribute('href'));
      });
    });
  }

  /* ---------- (d) illustration caption toggles (button, keyboard accessible) ---------- */
  document.querySelectorAll('.cap-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.parentElement.querySelector('.cap-card');
      if (!card) return;
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      card.hidden = open;
    });
  });

  /* ---------- (f) story quiz with instant feedback ---------- */
  document.querySelectorAll('.quiz').forEach(function (quiz) {
    var questions = Array.prototype.slice.call(quiz.querySelectorAll('.quiz-q'));
    var scoreEl = quiz.querySelector('.quiz-score');
    var answered = 0, correct = 0;

    questions.forEach(function (q) {
      var answer = parseInt(q.getAttribute('data-answer'), 10);
      var fb = q.querySelector('.qfb');
      var refEl = q.querySelector('.qref');
      var ref = refEl ? refEl.textContent : '';
      var opts = Array.prototype.slice.call(q.querySelectorAll('.opt'));

      opts.forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (btn.disabled) return;
          var picked = parseInt(btn.getAttribute('data-i'), 10);
          var ok = picked === answer;
          opts.forEach(function (o) {
            o.disabled = true;
            if (parseInt(o.getAttribute('data-i'), 10) === answer) o.classList.add('correct');
          });
          if (!ok) btn.classList.add('wrong');
          answered += 1;
          if (ok) correct += 1;
          fb.innerHTML = ok
            ? '<strong class="correct">Correct.</strong> As the verse says: ' + ref + '.'
            : '<strong class="wrong">Not quite.</strong> The verse says otherwise, see ' + ref + ' above.';
          fb.hidden = false;
          if (answered === questions.length && scoreEl) {
            scoreEl.textContent = 'You answered ' + correct + ' of ' + questions.length +
              ' correctly. ' + (correct === questions.length
                ? 'MashaAllah \u2014 the verses are with you.'
                : 'Read the scenes once more and try again.');
            scoreEl.hidden = false;
          }
        });
      });
    });
  });

  /* ---------- homepage: soften timeline hint after first rail scroll ---------- */
  var rail = document.querySelector('.timeline-rail');
  var hint = document.querySelector('.timeline-hint');
  if (rail && hint) {
    rail.addEventListener('scroll', function () {
      hint.style.opacity = '0.35';
    }, { once: true, passive: true });
  }
})();
