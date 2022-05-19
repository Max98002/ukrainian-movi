const activeSelected = () => {
  const btns = document.querySelectorAll('.selected-blocks__item');

  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {

      const menu = btns[i].querySelector('.selected-blocks-list');
      const button = btns[i].querySelector('.selected-blocks__btn');

      menu.classList.toggle('selected-blocks-list_active');
      button.classList.toggle('selected-blocks__btn_active');

    });
  });
  
}

export default activeSelected;