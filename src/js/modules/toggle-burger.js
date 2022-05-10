const toggleBurger = () => {
  const btn = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  btn.addEventListener('click', (e) => {

    btn.classList.toggle('burger_active');
    nav.classList.toggle('nav_active');

  })

};

export default toggleBurger;