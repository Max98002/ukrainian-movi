const activeSelected = () => {
  const btns = document.querySelectorAll('.selected-blocks__btn');

  btns.forEach(btn => {
    btn.addEventListener('focus', function() {
      const menu = btn.nextElementSibling;

      this.classList.add('selected-blocks__btn_active');
      menu.classList.add('selected-blocks-list_active');

    });
  });

  btns.forEach(btn => {
    btn.addEventListener('blur', function() {
      const menu = btn.nextElementSibling;

      this.classList.remove('selected-blocks__btn_active');
      menu.classList.remove('selected-blocks-list_active');

    });
  });
  
};

export default activeSelected;