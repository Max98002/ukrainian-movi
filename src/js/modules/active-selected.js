const activeSelected = () => {
  const btns = document.querySelectorAll('.selected-blocks__btn');
  let intervalId;

  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      const dataBtn = e.currentTarget.getAttribute('data-path');
      const menu = document.querySelector(`[data-target=${dataBtn}]`);

      for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('selected-blocks__btn_active');
        btns[i].nextElementSibling.classList.remove('selected-blocks-list_active');
        intervalId = setTimeout(() => {
          btns[i].classList.remove('open');
        }, 0);
      }

      if (!btn.classList.contains('open')) {
        btn.classList.add('selected-blocks__btn_active');
        menu.classList.add('selected-blocks-list_active');

        intervalId = setTimeout(() => {
          btn.classList.add('open');
        }, 0);
      }

      if (btn.classList.contains('open')) {
        clearTimeout(intervalId);

        btn.classList.remove('selected-blocks__btn_active');
        menu.classList.remove('selected-blocks-list_active');

        intervalId = setTimeout(() => {
          btn.classList.remove('open');
        }, 0);
      }

    })
  });

  window.addEventListener('click', (e) => {
    const target = e.target;

    if (target && !target.matches('.selected-blocks__btn')) {
      for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('selected-blocks__btn_active');
        btns[i].nextElementSibling.classList.remove('selected-blocks-list_active');
        intervalId = setTimeout(() => {
          btns[i].classList.remove('open');
        }, 0);
      }
    }
  });

  window.addEventListener('touchstart', (e) => {
    const target = e.target;

    if (target && !target.matches('.selected-blocks__btn') && window.screen.availWidth < 820) {
      for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('selected-blocks__btn_active');
        btns[i].nextElementSibling.classList.remove('selected-blocks-list_active');
        intervalId = setTimeout(() => {
          btns[i].classList.remove('open');
        }, 0);
      }
    }
  });

  // function addStyle(i) {
  //   btns[i].classList.add('selected-blocks__btn_active');
  //   btns[i].nextElementSibling.classList.add('selected-blocks-list_active');
  // }

  // function removeStyle() {
  //   for (let i = 0; i < btns.length; i++) {
  //     btns[i].classList.remove('selected-blocks__btn_active');
  //     btns[i].nextElementSibling.classList.remove('selected-blocks-list_active');
  //   }
  // }

  // if (window.screen.availWidth > 820) {
  //   btns.forEach((btn, i) => {
  //     btn.addEventListener('click', function () {
  //       removeStyle();
  //       addStyle(i);
  //     });
  //   })
  // }

};

export default activeSelected;