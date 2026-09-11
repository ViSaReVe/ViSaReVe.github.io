(() => {
  const legacySections = { experience: 'experience', skills: 'technical-skills', publications: 'publications', education: 'education' };
  const followLegacySection = () => {
    const target = legacySections[window.location.hash.slice(1)];
    const about = document.body.dataset.aboutUrl;
    if (target && about) window.location.replace(about + '#' + target);
  };
  followLegacySection();
  window.addEventListener('hashchange', followLegacySection);
  const button = document.querySelector('.motion-toggle');
  const banner = document.querySelector('.signal-banner');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (button && banner) {
    button.hidden = false;
    let paused = reduceMotion.matches;
    const render = () => {
      button.hidden = reduceMotion.matches;
      banner.classList.toggle('is-paused', paused);
      button.setAttribute('aria-pressed', String(paused));
      button.setAttribute('aria-label', (paused ? 'Play' : 'Pause') + ' banner animation');
      button.querySelector('.motion-label').textContent = paused ? 'Play motion' : 'Pause motion';
      button.querySelector('.motion-icon').textContent = paused ? '▷' : 'Ⅱ';
    };
    button.addEventListener('click', () => { paused = !paused; render(); });
    reduceMotion.addEventListener('change', () => { paused = reduceMotion.matches; render(); });
    render();
  }
  document.querySelectorAll('.prose table').forEach(table => {
    const wrap = document.createElement('div');
    wrap.className = 'table-scroll';
    wrap.tabIndex = 0;
    wrap.setAttribute('role', 'region');
    wrap.setAttribute('aria-label', 'Scrollable data table');
    table.parentNode.insertBefore(wrap, table);
    wrap.appendChild(table);
  });
})();
