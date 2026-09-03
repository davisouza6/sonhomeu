// Menu hamburguer (mobile)
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navOverlay = document.getElementById('navOverlay');

  if (!menuToggle || !navMenu || !navOverlay) return;

  function toggleMenu() {
    const isOpen = navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active', isOpen);
    menuToggle.classList.toggle('active', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  }

  function closeMenu() {
    if (navMenu.classList.contains('active')) toggleMenu();
  }

  menuToggle.addEventListener('click', toggleMenu);
  navOverlay.addEventListener('click', closeMenu);

  // Fecha o menu ao clicar em qualquer link dele
  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Fecha com a tecla Esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
});
