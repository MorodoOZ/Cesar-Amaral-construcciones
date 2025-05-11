document.addEventListener('DOMContentLoaded', () => {
  /* Smooth scrolling para los enlaces de la navegación */
  const navLinks = document.querySelectorAll('.fixed-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* Creación y funcionalidad del botón "Volver arriba" */
  const backToTop = document.createElement('button');
  backToTop.id = 'backToTop';
  backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(backToTop);
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* Animación de aparición en las secciones con Intersection Observer */
  const observerOptions = { threshold: 0.1 };
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  };
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  /* Función para mostrar un mensaje de agradecimiento (toast) */
  function showToast(message) {
    const toast = document.createElement('div');
    toast.innerText = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '50px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = 'rgba(97, 67, 67, 0.7)';
    toast.style.color = '#fff';
    toast.style.padding = '10px 20px';
    toast.style.borderRadius = '5px';
    toast.style.zIndex = '400';
    toast.style.opacity = '1';
    toast.style.transition = 'opacity 0.5s ease-out';
    
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
        toast.remove();
      }, 500);
    }, 3000);
  }

  /* Mensaje de agradecimiento al solicitar presupuesto */
  const btnPresupuesto = document.getElementById('solicitarPresupuesto');
  if (btnPresupuesto) {
    btnPresupuesto.addEventListener('click', () => {
      showToast("¡Gracias por solicitar su presupuesto sin costo! Nos contactaremos pronto.");
    });
  }

  /* Mensaje de agradecimiento al hacer clic en cada tarjeta de servicio */
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      showToast("¡Gracias por su interés en nuestros servicios!");
    });
  });

  /* Easter Egg en la consola */
  console.log('%cBienvenido a Cesar Amaral Construcciones - ¡Construyendo sueños!', 'color: #00467f; font-size: 16px;');
});
