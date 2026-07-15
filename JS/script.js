 // Hamburger menu
  const ham = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      ham.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // Accordion
  document.getElementById('accordion').addEventListener('click', e => {
    const header = e.target.closest('.acc-header');
    if (!header) return;
    const item = header.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.acc-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });

  // FAQ
  document.getElementById('faq').addEventListener('click', e => {
    const btn = e.target.closest('.faq-q');
    if (!btn) return;
    const item = btn.parentElement;
    item.classList.toggle('open');
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));