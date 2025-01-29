document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('[data-animate]');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');

        const fadeInElements = entry.target.querySelectorAll('.fade-in');
        fadeInElements.forEach((el, index) => {
          el.style.transitionDelay = `${index * 0.2}s`;
        });
        
        observer.unobserve(entry.target);
      }
    });
  };

  window.addEventListener('load', () => {
    document.body.classList.remove('no-animation');

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elements.forEach(element => {
      observer.observe(element);
    });
  });
});
