// Header scroll state
const header = document.querySelector('.site-header');
const onScroll = () => {
  if (!header) return;
  if (window.scrollY > 10) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('load', onScroll);

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const menu = document.getElementById('menu');
if (navToggle && menu) {
  navToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('show');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// Gallery lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const href = item.getAttribute('href');
    if (!href || !lightbox || !lightboxImg) return;
    lightboxImg.src = href;
    lightbox.classList.add('show');
  });
});
const closeLightbox = () => lightbox && lightbox.classList.remove('show');
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}
if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

// Filters
const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
const items = Array.from(document.querySelectorAll('.gallery-item'));
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter || 'all';
    items.forEach(it => {
      const cat = it.dataset.cat || 'all';
      const show = filter === 'all' || filter === cat;
      it.style.display = show ? '' : 'none';
    });
  });
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => io.observe(el));
} else {
  reveals.forEach(el => el.classList.add('show'));
}

// Booking form (front-end only)
const form = document.getElementById('booking-form');
const msg = document.getElementById('formMessage');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;
    setTimeout(() => {
      if (msg) msg.textContent = 'Thanks! Your inquiry has been recorded (demo). I\'ll DM you.';
      if (submitBtn) submitBtn.disabled = false;
      form.reset();
    }, 800);
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());


