document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const hamburgerButton = document.querySelector('.hamburger');
  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    header.classList.toggle('is-opened', isMenuOpen);
    document.body.classList.toggle('no-scroll', isMenuOpen);
    document.body.style.setProperty('--scrollbar-width', `${window.innerWidth - document.documentElement.clientWidth}px`);
  };

  hamburgerButton.addEventListener('click', toggleMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isMenuOpen) {
      toggleMenu();
    }
  });

  window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const scrollBottom = header.offsetHeight;

    if (scrollTop === 0) {
      header.style.cssText = '--opacity: 0';
    } else if (scrollTop >= scrollBottom) {
      header.style.cssText = '--opacity: 1';
    } else {
      let opacity = (scrollTop / scrollBottom).toFixed(2);
      header.style.cssText = `--opacity: ${opacity}`;
    }
  });
});
