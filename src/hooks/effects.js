/* Port of assets/js/main.js: calm interactivity for the manuscript site.
   Runs once per page mount; cleans up on unmount. */
import { useEffect } from 'react';

export function useSiteEffects() {
  useEffect(() => {
    document.documentElement.classList.add('js');

    const reduceMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* Soft page fade-in on load */
    const markLoaded = () => document.body.classList.add('loaded');
    let loadTimer = null;
    if (document.readyState === 'complete') {
      markLoaded();
    } else {
      window.addEventListener('load', markLoaded);
      loadTimer = setTimeout(markLoaded, 1200); // fallback if load is delayed
    }

    /* bfcache: a page restored from history keeps its frozen DOM, including
       the fade-out class added on link click. Strip it, or back-navigation
       restores a fully blank (opacity 0) page. */
    const onPageShow = (e) => {
      if (e.persisted) {
        document.body.classList.remove('leaving');
        markLoaded();
      }
    };
    window.addEventListener('pageshow', onPageShow);

    /* Fade-out on internal navigation */
    const onClick = (e) => {
      const a = e.target.closest ? e.target.closest('a[href]') : null;
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#') return;
      if (a.target === '_blank' || a.hasAttribute('download')) return;
      let url;
      try {
        url = new URL(href, window.location.href);
      } catch (err) {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (reduceMotion) return;
      e.preventDefault();
      document.body.classList.add('leaving');
      setTimeout(() => {
        window.location.href = url.href;
      }, 260);
    };
    document.addEventListener('click', onClick);

    /* Gold reading-progress bar (story pages only) */
    const progressFill = document.getElementById('progressFill');
    let onScroll = null;
    let onResize = null;
    if (progressFill) {
      let ticking = false;
      const updateProgress = () => {
        ticking = false;
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const p = max > 0 ? window.pageYOffset / max : 0;
        progressFill.style.width = (Math.min(1, Math.max(0, p)) * 100).toFixed(2) + '%';
      };
      onScroll = () => {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(updateProgress);
        }
      };
      onResize = updateProgress;
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onResize);
      updateProgress();
    }

    /* Calm scroll reveals with stagger */
    const revealEls = document.querySelectorAll('.reveal');
    let io = null;
    if ('IntersectionObserver' in window && revealEls.length && !reduceMotion) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
      );
      revealEls.forEach((el) => io.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add('visible'));
    }

    /* Scene rail scroll-spy + click-to-scroll */
    const scenes = Array.prototype.slice.call(document.querySelectorAll('.scene[id]'));
    const railLinks = Array.prototype.slice.call(
      document.querySelectorAll('.scene-rail a[data-scene], .chip-rail a[data-scene]')
    );
    let spy = null;
    const railHandlers = [];
    const setActive = (id) => {
      railLinks.forEach((l) => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + id);
      });
    };
    if (scenes.length && railLinks.length) {
      if ('IntersectionObserver' in window && !reduceMotion) {
        spy = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) setActive(entry.target.id);
            });
          },
          { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
        );
        scenes.forEach((s) => spy.observe(s));
      }
      railLinks.forEach((l) => {
        const handler = (e) => {
          const target = document.querySelector(l.getAttribute('href'));
          if (!target) return;
          e.preventDefault();
          setActive(target.id);
          target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
          if (history.replaceState) history.replaceState(null, '', l.getAttribute('href'));
        };
        railHandlers.push([l, handler]);
        l.addEventListener('click', handler);
      });
    }

    /* Homepage: soften timeline hint after first rail scroll */
    const rail = document.querySelector('.timeline-rail');
    const hint = document.querySelector('.timeline-hint');
    let onRailScroll = null;
    if (rail && hint) {
      onRailScroll = () => {
        hint.style.opacity = '0.35';
      };
      rail.addEventListener('scroll', onRailScroll, { once: true, passive: true });
    }

    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('load', markLoaded);
      window.removeEventListener('pageshow', onPageShow);
      if (loadTimer) clearTimeout(loadTimer);
      if (progressFill) {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onResize);
      }
      if (io) io.disconnect();
      if (spy) spy.disconnect();
      railHandlers.forEach(([l, handler]) => l.removeEventListener('click', handler));
      if (rail && onRailScroll) rail.removeEventListener('scroll', onRailScroll);
    };
  }, []);
}
