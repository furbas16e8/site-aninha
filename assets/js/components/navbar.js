/**
 * Navbar Component - Lógica do Menu de Navegação
 */

const header = document.querySelector('.header');
const menuToggle = document.querySelector('.header__menu-toggle');

/**
 * Adiciona sombra ao header no scroll
 */
function handleScroll() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

/**
 * Inicializa os event listeners
 */
function initNavbar() {
  if (!header) return;

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Menu mobile toggle (pode ser expandido depois)
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      // Implementar drawer mobile se necessário
      console.log('Menu toggle clicked');
    });
  }
}

export { initNavbar };
