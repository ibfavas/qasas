/* QASAS — calm scroll reveals, sticky nav helpers. Phase 1. */
(function () {
  'use strict';

  // Reveal-on-scroll: slow, calm, no bounce.
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // Verse panels: gentle emphasis when scrolled into view.
  var verses = document.querySelectorAll('.verse');
  if ('IntersectionObserver' in window && verses.length) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          vio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    verses.forEach(function (v) { vio.observe(v); });
  }

  // Keep the active timeline hint subtle: hide after first scroll of the rail.
  var rail = document.querySelector('.timeline-rail');
  var hint = document.querySelector('.timeline-hint');
  if (rail && hint) {
    rail.addEventListener('scroll', function () {
      hint.style.opacity = '0.35';
    }, { once: true, passive: true });
  }
})();
