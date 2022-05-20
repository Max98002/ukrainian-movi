const menuToggle = () => {
  const btnBurger = document.querySelector('.burger');
  const navs = document.querySelectorAll('.nav > a');

  navs.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const target = e.target;

      if (target && target.parentElement.classList.contains('nav_active')) {
        target.parentElement.classList.remove('nav_active');
        btnBurger.classList.remove('burger_active');
        document.body.classList.remove('no-scroll');
      }

    })
  });

};

export default menuToggle;