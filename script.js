// PORTO.OS — minimal interactions
(function () {
  'use strict';

  // ---- sliding nav: aparece quando hero sai do viewport ----
  const nav = document.querySelector('.nav');
  const hero = document.querySelector('.hero');
  if (nav && hero && 'IntersectionObserver' in window) {
    const navIO = new IntersectionObserver(([entry]) => {
      nav.classList.toggle('nav--visible', !entry.isIntersecting);
    }, { threshold: 0, rootMargin: '-72px 0px 0px 0px' });
    navIO.observe(hero);
  }

  // ---- live clock in top status bar ----
  const clockEl = document.getElementById('clock');
  function tick() {
    if (!clockEl) return;
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    clockEl.textContent = `${hh}:${mm}:${ss}`;
  }
  tick();
  setInterval(tick, 1000);

  // ---- subtle reveal on scroll ----
  const targets = document.querySelectorAll('.card, .metric, .manifesto__list li, .stack__col');
  if ('IntersectionObserver' in window) {
    targets.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      el.style.transition = 'opacity .4s ease, transform .4s ease';
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(el => io.observe(el));
  }
})();
