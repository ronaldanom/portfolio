// theme-toggle.js

// Lista de los temas disponibles
const themes = ['jekyll-theme-slate', 'jekyll-theme-dark', 'jekyll-theme-tactile', 'jekyll-theme-midnight'];

// Función para cambiar entre los temas
function changeTheme() {
  // Obtener el índice del tema actual almacenado en localStorage
  let currentThemeIndex = localStorage.getItem("currentThemeIndex");
  
  // Si no hay índice guardado, inicializarlo en 0 (primer tema)
  if (currentThemeIndex === null) {
    currentThemeIndex = 0;
  } else {
    currentThemeIndex = parseInt(currentThemeIndex); // Convertir a número
  }

  // Incrementar el índice y asegurarse de que no se salga del rango
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;

  // Obtener el nuevo tema basado en el índice
  let newTheme = themes[currentThemeIndex];

  // Guardar el índice del nuevo tema en localStorage
  localStorage.setItem("currentThemeIndex", currentThemeIndex);

  // Remover las clases de los temas anteriores
  document.body.classList.remove(...themes);

  // Agregar la clase del nuevo tema
  document.body.classList.add(newTheme);
}

// Al cargar la página, establecer el tema previamente seleccionado
window.onload = function() {
  // Obtener el índice del tema guardado
  let currentThemeIndex = localStorage.getItem("currentThemeIndex");

  // Si no hay un índice guardado, iniciar con el primer tema
  if (currentThemeIndex === null) {
    currentThemeIndex = 0;
  } else {
    currentThemeIndex = parseInt(currentThemeIndex);
  }

  // Agregar la clase correspondiente al tema
  document.body.classList.add(themes[currentThemeIndex]);
};
