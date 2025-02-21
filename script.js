// Validación del formulario de contacto
document.querySelector("form").addEventListener("submit", function(event) {
    let name = document.querySelector("input[name='name']").value;
    let email = document.querySelector("input[name='email']").value;
    let message = document.querySelector("textarea[name='message']").value;
  
    // Validación simple: asegurarse de que los campos no estén vacíos
    if (name === "" || email === "" || message === "") {
      alert("Por favor, complete todos los campos.");
      event.preventDefault();  // Previene el envío del formulario si hay campos vacíos
    } else {
      alert("¡Gracias por tu mensaje! Te responderé lo antes posible.");
    }
  });
  
  // Animación de aparición de las secciones
  window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
      let sectionTop = section.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;
  
      if (sectionTop < windowHeight - 100) {
        section.classList.add('visible');  // Añadir clase 'visible' cuando la sección está cerca de la vista
      }
    });
  });
  
  // Asegurarse de que las secciones sean invisibles al principio
  document.querySelectorAll('section').forEach(function(section) {
    section.classList.add('invisible');
  });
  
  // Estilos para la animación de visibilidad en CSS
  document.styleSheets[0].insertRule(`
    section.invisible {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    }
  `, document.styleSheets[0].cssRules.length);
  
  document.styleSheets[0].insertRule(`
    section.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `, document.styleSheets[0].cssRules.length);
  