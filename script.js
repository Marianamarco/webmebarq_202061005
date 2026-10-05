function scrollTeam(dir){
  const el = document.getElementById('teamSlider');
  const card = el.querySelector('.team-card');
  const step = card.getBoundingClientRect().width + 16; /* card width + gap */
  el.scrollBy({ left: dir * step, behavior: 'smooth' });
}

function scrollProjects(dir){
  const el = document.getElementById('projectsSlider');
  const card = el.querySelector('.flip-card');
  const step = card.getBoundingClientRect().width + 22; /* card width + gap */
  el.scrollBy({ left: dir * step, behavior: 'smooth' });
}

/* ---------- Mobile menu ---------- */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

function closeMenu(){
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

function openMenu(){
  navLinks.classList.add('open');
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  /* close the menu after tapping a link, and on resize back to desktop */
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) closeMenu();
  });
}
