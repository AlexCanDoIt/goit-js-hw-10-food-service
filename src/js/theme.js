const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const themeSwitchRef = document.querySelector('#theme-switch-toggle');

if (localStorage.getItem('theme') === Theme.DARK) {
  themeSwitchRef.checked = true;
  bodyRef.classList.add(Theme.DARK);
} else {
  themeSwitchRef.checked = false;
  bodyRef.classList.add(Theme.LIGHT);
}

themeSwitchRef.addEventListener('change', changeTheme);

function changeTheme() {
  if (themeSwitchRef.checked) {
    localStorage.setItem('theme', Theme.DARK);
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
  }
}
