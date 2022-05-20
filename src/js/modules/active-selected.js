const activeSelected = () => {
  const btns = document.querySelectorAll('.selected-blocks__btn');

  function addStyle(i) {
    btns[i].classList.add('selected-blocks__btn_active');
    btns[i].nextElementSibling.classList.add('selected-blocks-list_active');
  }

  function removeStyle() {
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.remove('selected-blocks__btn_active');
      btns[i].nextElementSibling.classList.remove('selected-blocks-list_active');
    }
  }

  btns.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
      const target = e.target;

      removeStyle();
      addStyle(i);
    })
  })

  window.addEventListener('click', (e) => {
    const target = e.target;

    if (target && !target.matches('.selected-blocks__btn')) {
      removeStyle();
    }
  })
  
};

export default activeSelected;