const PAGES = ['inicio', 'servicios', 'gift-cards', 'reservas', 'contacto'];

function nav(id) {
  PAGES.forEach(p => {
    document.getElementById('page-' + p)?.classList.remove('active');
    const el = document.getElementById('nl-' + p);
    if (el) el.classList.remove('active');
  });
  const pg = document.getElementById('page-' + id);
  if (pg) pg.classList.add('active');
  const nl = document.getElementById('nl-' + id);
  if (nl) nl.classList.add('active');
  document.getElementById('sharedFt') && pg.after(document.getElementById('sharedFt'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  initAnims();
}

window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 30);
});

function openMob() { document.getElementById('mobNav').classList.add('open'); }
function closeMob() { document.getElementById('mobNav').classList.remove('open'); }

/* HERO SLIDESHOW */
(function () {
  const slides = document.querySelectorAll('.hero-slide');
  const dotsEl = document.getElementById('heroDots');
  let current = 0, timer;

  slides.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'hero-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => { goTo(i); resetTimer(); });
    dotsEl.appendChild(d);
  });

  function goTo(idx) {
    slides[current].classList.remove('active');
    dotsEl.children[current].classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsEl.children[current].classList.add('active');
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 3000);
  }

  resetTimer();
})();

function nlSubmit(e) { e.preventDefault(); document.getElementById('nl-ok').style.display = 'block'; e.target.reset(); }

function bkSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById('bk-ok');
  msg.style.display = 'block';
  e.target.reset();
  setTimeout(() => msg.style.display = 'none', 6000);
}

function openGift(name, price, custom) {
  document.getElementById('gTitle').textContent = name + (price ? ' · ' + price : '');
  document.getElementById('gAmountFg').style.display = custom ? 'block' : 'none';
  document.getElementById('gModal').classList.add('open');
}
function closeGift() { document.getElementById('gModal').classList.remove('open'); }
function processGift() { alert('Redirigiendo al pago seguro (Mercado Pago)...'); closeGift(); }
document.getElementById('gModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeGift(); });

function initAnims() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.anim-el').forEach(el => obs.observe(el));
}

nav('inicio');

/* TICKER — auto-scroll + touch drag */
(function () {
  const inner = document.querySelector('.ticker-inner');
  let pos = 0;
  let rafId;
  let isDragging = false;
  let startX = 0;
  let startPos = 0;
  const speed = 0.5; // px per frame — aumentá para más velocidad

  // Get the width of half the content (since it's duplicated)
  function getHalfWidth() {
    return inner.scrollWidth / 2;
  }

  function autoScroll() {
    if (!isDragging) {
      pos -= speed;
      if (Math.abs(pos) >= getHalfWidth()) pos = 0;
      inner.style.transform = `translateX(${pos}px)`;
    }
    rafId = requestAnimationFrame(autoScroll);
  }

  // Touch events
  inner.addEventListener('touchstart', e => {
    isDragging = true;
    startX = e.touches[0].clientX;
    startPos = pos;
  }, { passive: true });

  inner.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startX;
    pos = startPos + dx;
    // wrap around
    const half = getHalfWidth();
    if (pos > 0) pos -= half;
    if (pos < -half) pos += half;
    inner.style.transform = `translateX(${pos}px)`;
  }, { passive: true });

  inner.addEventListener('touchend', () => {
    isDragging = false;
  });

  autoScroll();
})();
