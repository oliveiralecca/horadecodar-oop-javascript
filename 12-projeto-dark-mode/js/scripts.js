const changeThemeButton = document.querySelector('#change-theme');

function toggleTheme() {
  document.body.classList.toggle('dark');
}

function loadTheme() {
  const dark = localStorage.getItem('theme');

  if (dark) {
    toggleTheme();
  }
}

loadTheme();

changeThemeButton.addEventListener('change', () => {
  toggleTheme();

  localStorage.removeItem('theme');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  }
})
