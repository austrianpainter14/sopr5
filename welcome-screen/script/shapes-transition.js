window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.name-container');
  if (!container) return;

  const h1 = container.querySelector('h1');
  const shapes = container.querySelector('.shapes');
  if (!h1 || !shapes) return;

  function revealShapes() {
    const wrappers = shapes.querySelectorAll('.shape-wrapper');
    wrappers.forEach((w, i) => w.style.setProperty('--i', i));
    shapes.classList.add('show');
  }

  h1.addEventListener('animationend', (e) => {
    if (e.animationName.includes('typing')) {
      setTimeout(revealShapes, 80); // small delay after typing
    }
  });

  // fallback in case animationend doesn't fire
  const cs = getComputedStyle(h1);
  const duration = parseFloat(cs.animationDuration) * 1000 || 2000;
  const delay = parseFloat(cs.animationDelay) * 1000 || 2000;
  setTimeout(revealShapes, duration + delay + 100);
});
