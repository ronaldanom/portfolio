// Definir los temas disponibles
const themes = ['jekyll-theme-slate', 'jekyll-theme-dark', 'jekyll-theme-tactile', 'jekyll-theme-midnight'];

// Función para cambiar entre los temas
function changeTheme() {
  // Obtener el índice del tema actual del localStorage
  let currentThemeIndex = localStorage.getItem("currentThemeIndex");

  // Si no hay un tema guardado, iniciar con el primer tema
  if (currentThemeIndex === null) {
    currentThemeIndex = 0; // Comienza con el primer tema
  } else {
    currentThemeIndex = parseInt(currentThemeIndex); // Convertir a número
  }

  // Incrementar el índice para cambiar al siguiente tema
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;

  // Establecer el tema seleccionado en localStorage
  localStorage.setItem("currentThemeIndex", currentThemeIndex);

  // Remover todas las clases de los temas anteriores
  document.body.classList.remove(...themes);

  // Agregar el nuevo tema al body
  document.body.classList.add(themes[currentThemeIndex]);
}

// Al cargar la página, aplicar el tema guardado en localStorage
window.onload = function() {
  let currentThemeIndex = localStorage.getItem("currentThemeIndex");

  // Si no hay un tema guardado, iniciar con el primer tema
  if (currentThemeIndex === null) {
    currentThemeIndex = 0;
  } else {
    currentThemeIndex = parseInt(currentThemeIndex); // Convertir a número
  }

  // Agregar el tema guardado al body
  document.body.classList.add(themes[currentThemeIndex]);
};
