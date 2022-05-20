const toggleBurger = () => {
  const btn = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  btn.addEventListener('click', () => {

    btn.classList.toggle('burger_active');
    nav.classList.toggle('nav_active');
    document.body.classList.toggle('no-scroll');

  })

};

export default toggleBurger;