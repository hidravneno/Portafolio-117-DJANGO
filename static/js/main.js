document.addEventListener("DOMContentLoaded", () => {
  const observeVisibility = (selector, className) => {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle(className, entry.isIntersecting);
      });
    });
    elements.forEach(el => observer.observe(el));
  };

  // Observadores para secciones
  observeVisibility("#sobre-mi", "visible");
  observeVisibility(".experiencia", "visible");
  observeVisibility(".proyecto", "visible");
  observeVisibility("footer", "visible");

  // Efecto parallax
  const proyectosSection = document.querySelector(".proyectos-recientes");
  document.addEventListener("scroll", () => {
    proyectosSection.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
  });

  // Animación de escritura
  const app = document.getElementById('typewriter');
  const typewriter = new Typewriter(app, { loop: true, delay: 65 });
  typewriter
    .pauseFor(2500)
    .typeString('Full Stack Software Developer.')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Technology enthusiast.')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Creator of digital solutions.')
    .pauseFor(2000)
    .deleteAll()
    .start();

  // Cambiar estilo de la barra de navegación al hacer scroll
  document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
