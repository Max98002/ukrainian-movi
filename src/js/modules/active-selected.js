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

  function eventElem(i) {
    removeStyle();
    addStyle(i);
  }

  if (window.screen.availWidth > 820) {
    btns.forEach((btn, i) => {
      btn.addEventListener('click', function () {
        eventElem(i);
      });
    })
  }



  if (window.screen.availWidth < 820) {
    console.log(window.screen.availWidth);
    btns.forEach((btn, i) => {
      btn.addEventListener('touchstart', function () {
        eventElem(i);
      });
    })
  }


  window.addEventListener('click', (e) => {
    const target = e.target;

    if (target && !target.matches('.selected-blocks__btn')) {
      removeStyle();
    }
  })

};

export default activeSelected;