document.addEventListener("DOMContentLoaded", function() {
  const animatedItems = document.querySelectorAll('.testmonails__item');
  const questions = document.querySelectorAll(".faq__item__question");
  const textElement = document.getElementById('hero-text');
  const hamburger = document.querySelector('.navbar__hamburger');
  const navList = document.querySelector('.navbar__list');
  const navLinks = document.querySelectorAll('.navbar__item a');
  const sections = document.querySelectorAll('section[id]');
  const header = document.querySelector('.header');
  const heroSection = document.querySelector('#hero');

  const options = {
    threshold: 0.1
  };
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, options);
  animatedItems.forEach(item => {
    observer.observe(item);
  });

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const currentItem = question.parentElement;
      const isActive = currentItem.classList.contains("active");
      document.querySelectorAll('.faq__item').forEach(item => {
        item.classList.remove('active');
      });
      if (!isActive) {
        currentItem.classList.add('active');
      }
    });
  });

  function typeWriter(element) {
    const text = element.innerHTML;
    element.innerHTML = '';
    element.style.visibility = 'visible';
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
  }

  if (textElement) {
    textElement.classList.add('typing');
    typeWriter(textElement);
  }

  const toggleMenu = () => {
    hamburger.classList.toggle('is-active');
    navList.classList.toggle('is-active');
  };

  hamburger.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navList.classList.contains('is-active')) {
        toggleMenu();
      }
    });
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('is-active-link');
        });

        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`.navbar__item a[href="#${id}"]`);

        if (activeLink) {
          activeLink.classList.add('is-active-link');
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  const handleNavbarScroll = () => {
    if (heroSection && header) {
      const heroHeight = heroSection.offsetHeight;

      if (window.scrollY > heroHeight) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  };

  window.addEventListener('scroll', handleNavbarScroll);


  // --- ANIMAÇÃO DA SEÇÃO "SOBRE NÓS" ---
  const aboutSection = document.querySelector('.about');

  const aboutObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Se a seção está visível
      if (entry.isIntersecting) {
        // Adiciona a classe que dispara a animação
        entry.target.classList.add('is-visible');
        // Para de observar o elemento para não repetir a animação
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 }); // Dispara quando 20% da seção estiver visível

  // Inicia a observação da seção .about
  if (aboutSection) {
    aboutObserver.observe(aboutSection);
  }

   // --- ANIMAÇÃO EM CASCATA DA SEÇÃO FAQ ---
  const faqList = document.querySelector('.faq__list');

  const faqObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Adiciona a classe que dispara a animação em cascata
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 }); // Dispara quando 10% da lista estiver visível

  // Inicia a observação da lista de perguntas
  if (faqList) {
    faqObserver.observe(faqList);
  }
});
