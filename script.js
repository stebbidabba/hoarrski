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

// i18n
const translations = {
  en: {
    nav: { about: 'About', portfolio: 'Portfolio', booking: 'Booking', faq: 'FAQ', location: 'Location' },
    cta: { book: 'Book now', view: 'View work' },
    about: {
      title: 'About Hoarrski',
      tagline: '-BLACKWORK-DOTWORK-',
      quote: 'Find me at @bleksmidjantattoo',
      dm: 'Dm for booking and inquires',
      p1: 'Hoarrski is a blackwork and dotwork tattoo artist based in Reykjavík. The focus is on striking contrast, clean execution, and thoughtful placement that moves with the body. Every piece is designed to heal beautifully and feel timeless years down the line.',
      p2: 'Whether you have a refined idea or just a mood and a reference, I translate concepts into bold, readable designs. For bookings and inquiries, send a DM to @bleksmidjantattoo or use the booking form.',
      instagram: 'Instagram',
      bookingLink: 'Booking form'
    },
    chips: { blackwork: 'Blackwork', dotwork: 'Dotwork', flash: 'Custom flash', linework: 'Linework', readable: 'Bold & readable' },
    portfolio: { title: 'Portfolio' },
    filters: { all: 'All', blackwork: 'Blackwork', dotwork: 'Dotwork' },
    gallery: { blackwork1: 'Blackwork', dotwork1: 'Dotwork', blackwork2: 'Blackwork', dotwork2: 'Dotwork', blackwork3: 'Blackwork', dotwork3: 'Dotwork' },
    booking: {
      title: 'Booking', name: 'Name', namePh: 'Your name', email: 'Email', emailPh: 'you@example.com', instagram: 'Instagram', instagramPh: '@username', idea: 'Idea', ideaPh: 'Describe your idea', placement: 'Placement', placementPh: 'Arm, leg, etc.', size: 'Approx. size', sizePh: 'e.g., 10 cm', refs: 'Reference link (optional)', refsPh: 'https://...', submit: 'Send inquiry'
    },
    faq: { title: 'FAQ', q1: 'How do I book?', a1: 'Use the form above or DM @bleksmidjantattoo.', q2: 'What styles do you do?', a2: 'Primarily blackwork and dotwork.', q3: 'Do you take walk-ins?', a3: 'Occasionally. DM for availability.' },
    location: { title: 'Location', address: 'Address: Kringlan 7, 103 Reykjavík' },
    values: { title: 'Þjónusta, gildi og ferlið' },
    process: { step1_title: 'Skref 1 — Samráð', step1_desc: 'Við ræðum hugmynd, stærð og staðsetningu.', step2_title: 'Skref 2 — Hönnun', step2_desc: 'Sjónræn útfærsla og aðlögun að líkamsformi.', step3_title: 'Skref 3 — Tattú', step3_desc: 'Vinna á stúdíói með hreinlæti og fagmennsku.' },
    footer: { rights: 'Hoarrski Tattoo. All rights reserved.' }
  },
  is: {
    nav: { about: 'Um mig', portfolio: 'Verk', booking: 'Bókanir', faq: 'Algengar spurningar', location: 'Staðsetning' },
    cta: { book: 'Bóka tíma', view: 'Skoða verk' },
    about: {
      title: 'Um Hoarrska',
      tagline: '-BLACKWORK-DOTWORK-',
      quote: 'Finndu mig á @bleksmidjantattoo',
      dm: 'DM fyrir bókanir og fyrirspurnir',
      p1: 'Hoarrski er húðflúrari í svartvinnu og punktaverki með aðsetur í Reykjavík. Áhersla á sterkan kontrast, nákvæma framkvæmd og hugsandi staðsetningu sem hreyfist með líkamanum.',
      p2: 'Hvort sem þú ert með skýra hugmynd eða bara stemningu og viðmiðun, þá þýði ég hugmyndir í djörf, læsileg verk. Fyrir bókanir og fyrirspurnir, sendu DM á @bleksmidjantattoo eða notaðu eyðublaðið.',
      instagram: 'Instagram',
      bookingLink: 'Bókunareyðublað'
    },
    chips: { blackwork: 'Svartvinna', dotwork: 'Punktaverk', flash: 'Sérsniðin flash', linework: 'Línuvinna', readable: 'Djörf & læsileg' },
    portfolio: { title: 'Verk' },
    filters: { all: 'Allt', blackwork: 'Svartvinna', dotwork: 'Punktaverk' },
    gallery: { blackwork1: 'Svartvinna', dotwork1: 'Punktaverk', blackwork2: 'Svartvinna', dotwork2: 'Punktaverk', blackwork3: 'Svartvinna', dotwork3: 'Punktaverk' },
    booking: {
      title: 'Bókanir', name: 'Nafn', namePh: 'Þitt nafn', email: 'Netfang', emailPh: 'thu@example.com', instagram: 'Instagram', instagramPh: '@notandi', idea: 'Hugmynd', ideaPh: 'Lýstu hugmyndinni', placement: 'Staðsetning', placementPh: 'Handleggur, fótleggur o.s.frv.', size: 'U.þ.b. stærð', sizePh: 't.d. 10 cm', refs: 'Viðmiðunartengill (valkvætt)', refsPh: 'https://...', submit: 'Senda fyrirspurn'
    },
    faq: {
      title: 'Algengar spurningar',
      q1: 'Hvernig bóka ég?', a1: 'Notaðu formið hér að ofan eða sendu DM á @bleksmidjantattoo.',
      q2: 'Hvaða stíla vinnur þú?', a2: 'Aðallega svartvinnu og punktaverk.',
      q3: 'Tekur þú við walk-in?', a3: 'Stundum. Sendu DM fyrir lausa tíma.'
    },
    location: { title: 'Staðsetning', address: 'Heimilisfang: Kringlan 7, 103 Reykjavík' },
    values: { title: 'Þjónusta, gildi og ferlið' },
    process: { step1_title: 'Skref 1 — Samráð', step1_desc: 'Við ræðum hugmynd, stærð og staðsetningu.', step2_title: 'Skref 2 — Hönnun', step2_desc: 'Sjónræn útfærsla og aðlögun að líkamsformi.', step3_title: 'Skref 3 — Tattú', step3_desc: 'Vinna á stúdíói með hreinlæti og fagmennsku.' },
    footer: { rights: 'Hoarrski Tattoo. Öll réttindi áskilin.' }
  }
};

let currentLang = 'en';
function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    const value = key.split('.').reduce((acc, k) => (acc ? acc[k] : undefined), dict);
    if (value) {
      if (attr) {
        el.setAttribute(attr, value);
      } else {
        el.innerHTML = value;
      }
    }
  });
  // Update menu active state for buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    currentLang = lang || 'en';
    applyTranslations(currentLang);
    try { localStorage.setItem('lang', currentLang); } catch {}
  });
});

try {
  const saved = localStorage.getItem('lang');
  if (saved && saved in translations) currentLang = saved;
} catch {}
applyTranslations(currentLang);

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


