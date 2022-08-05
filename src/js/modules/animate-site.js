import 'animate.css';
import WOW from 'wow.js';

new WOW().init();

const animateSite = () => {

  const animateCSS = (elements, animation, delay = 'animate__delay-', prefix = 'animate__', wow = 'wow') => {

    new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;
      const nodes = document.querySelectorAll(elements);

      nodes.forEach(el => {
        el.classList.add(wow, `${prefix}animated`, animationName, `${delay}0.2s`, 'animate__fast');
      });

      function handleAnimationEnd(event) {
        event.stopPropagation();
        nodes.forEach(el => {
          el.classList.remove(wow, `${prefix}animated`, animationName, `${delay}0.5s`);
        });
        resolve('Animation ended');
      }

      // nodes.forEach(el => {
      //   el.addEventListener('animationend', handleAnimationEnd, {
      //     once: true
      //   });
      // });
    })

  };

  animateCSS('.movie-card', 'fadeInUp');

};

export default animateSite;