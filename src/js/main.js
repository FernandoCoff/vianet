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
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`.navbar__item a[href="#${id}"]`);

        if (activeLink) {
          navLinks.forEach(link => {
            link.classList.remove('is-active-link');
          });
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

  const aboutSection = document.querySelector('.about');

  const aboutObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  if (aboutSection) {
    aboutObserver.observe(aboutSection);
  }

  const faqList = document.querySelector('.faq__list');

  const faqObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  if (faqList) {
    faqObserver.observe(faqList);
  }

  const gallerySwiper = document.querySelector('.galery__group');
  if (gallerySwiper) {
    const swiper = new Swiper(gallerySwiper, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }
    });
  }
});
