document.addEventListener('DOMContentLoaded', () => {
  const themeButton = document.querySelector('.theme');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
  }

  themeButton.addEventListener('click', () => {
    console.log(themeButton)
    body.classList.toggle('light-theme');
    const isLightTheme = body.classList.contains('light-theme');
    localStorage.setItem('theme', isLightTheme ? 'light-theme' : '');
  });
});
