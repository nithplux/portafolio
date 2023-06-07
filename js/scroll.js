
//FUNCION SCROLL
// Obtener el contenedor y la posición de activación de la animación
const container = document.querySelector('.container');
const scrollThreshold = 0.5; // Porcentaje de la pantalla para activar la animación

// Variables para controlar el estado del scroll
let isContainerVisible = true;
let windowHeight = window.innerHeight;

// Función para activar la animación
function activateAnimation() {
  const scrollPosition = window.scrollY;
  const scrollThresholdPixels = windowHeight * scrollThreshold;

  if (scrollPosition > scrollThresholdPixels) {
    if (isContainerVisible) {
      container.classList.add('animate');
      isContainerVisible = false;
    }
  } else {
    if (!isContainerVisible) {
      container.classList.remove('animate');
      isContainerVisible = true;
    }
  }
}

// Listener del evento scroll
window.addEventListener('scroll', activateAnimation);
window.addEventListener('resize', () => {
  windowHeight = window.innerHeight;
});
