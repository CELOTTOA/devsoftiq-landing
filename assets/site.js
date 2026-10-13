(() => {
  'use strict';
  const themeButton = document.querySelector('.theme-toggle');
  const root = document.documentElement;
  root.classList.add('js');
  const updateThemeButton = () => {
    const dark = root.dataset.theme !== 'light';
    document.querySelector('meta[name="theme-color"]').content = dark ? '#0a0b10' : '#f5f6fa';
    themeButton.textContent = dark ? 'Tema chiaro' : 'Tema scuro';
    themeButton.setAttribute('aria-label', dark ? 'Attiva il tema chiaro' : 'Attiva il tema scuro');
  };
  updateThemeButton();
  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('devsoftiq-theme', root.dataset.theme); } catch {}
    updateThemeButton();
  });
  document.querySelector('[data-reset-preference]')?.addEventListener('click', () => {
    try { localStorage.removeItem('devsoftiq-theme'); } catch {}
    root.dataset.theme = 'dark';
    updateThemeButton();
    document.querySelector('.preference-status').textContent = 'Preferenza rimossa. Il sito usa il tema scuro iniziale.';
  });

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!reduce.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('ready');
      observer.observe(el);
    });
  }

  const families = [...document.querySelectorAll('.family')];
  const filters = [...document.querySelectorAll('.sector-button')];
  const result = document.querySelector('.catalog-result');
  const filterBy = sector => {
    families.forEach(family => { family.hidden = sector !== 'all' && family.dataset.sector !== sector; });
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.sector === sector)));
    const count = families.filter(family => !family.hidden).reduce((total, family) => total + family.querySelectorAll('.shell').length, 0);
    result.textContent = count + (count === 1 ? ' prodotto' : ' prodotti');
    // Reappear immediately when switching sectors rather than waiting for an old observer.
    families.filter(family => !family.hidden).forEach(family => family.querySelectorAll('.reveal').forEach(el => el.classList.add('in')));
  };
  filters.forEach(button => button.addEventListener('click', () => {
    filterBy(button.dataset.sector);
    // Keep the selected toolbar in view when a long catalogue collapses.
    document.querySelector('.catalog-tools').scrollIntoView({ block: 'start', behavior: reduce.matches ? 'instant' : 'smooth' });
  }));

  const revealTarget = hash => {
    let id;
    try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    if (!target) return;
    const family = target.closest('.family');
    if (family?.hidden) filterBy('all');
    target.classList.add('in');
    family?.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  };
  document.querySelectorAll('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', () => revealTarget(anchor.hash)));
  window.addEventListener('hashchange', () => revealTarget(location.hash));
  revealTarget(location.hash);

  const burger = document.querySelector('.burger');
  const menu = document.getElementById('menu');
  const closeButton = document.querySelector('.menu-close');
  const background = [...document.body.children].filter(el => el !== menu && !['SCRIPT', 'STYLE'].includes(el.tagName));
  let previousFocus;
  const setMenu = open => {
    if (open) previousFocus = document.activeElement;
    menu.hidden = !open;
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
    background.forEach(el => { el.inert = open; });
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) closeButton.focus();
    else previousFocus?.focus({ preventScroll: true });
  };
  burger.addEventListener('click', () => setMenu(menu.hidden));
  closeButton.addEventListener('click', () => setMenu(false));
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (menu.hidden) return;
    if (event.key === 'Escape') { event.preventDefault(); setMenu(false); }
    if (event.key === 'Tab') {
      const focusables = [...menu.querySelectorAll('button,a')];
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  window.matchMedia('(min-width: 768px)').addEventListener('change', event => {
    if (event.matches && !menu.hidden) setMenu(false);
  });
})();
