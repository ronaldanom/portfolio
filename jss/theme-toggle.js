
// theme-toggle.js

const themes = ['jekyll-theme-slate', 'jekyll-theme-dark', 'jekyll-theme-tactile', 'jekyll-theme-midnight'];

function changeTheme() {
  let currentThemeIndex = localStorage.getItem("currentThemeIndex");
  if (currentThemeIndex === null) {
    currentThemeIndex = 0; // Iniciar desde el primer tema
  } else {
    currentThemeIndex = parseInt(currentThemeIndex);
  }

  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  let newTheme = themes[currentThemeIndex];
  localStorage.setItem("currentThemeIndex", currentThemeIndex);

  document.body.classList.remove(...themes);
  document.body.classList.add(newTheme);
}

// Al cargar la página, establecer el tema previamente seleccionado
window.onload = function() {
  let currentThemeIndex = localStorage.getItem("currentThemeIndex");
  if (currentThemeIndex === null) {
    currentThemeIndex = 0;
  } else {
    currentThemeIndex = parseInt(currentThemeIndex);
  }

  document.body.classList.add(themes[currentThemeIndex]);
};
