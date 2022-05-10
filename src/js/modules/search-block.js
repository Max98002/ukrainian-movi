const searchBlockStyle = () => {
  const searchBlock = document.querySelector('.search');
  const input = searchBlock.querySelector('.search-input');

  const dandruff = searchBlock.querySelector('.search-dandruff-icon');
  const close = searchBlock.querySelector('.search-close-icon');

  const btn = document.querySelector('.burger');
  const nav = document.querySelector('.nav');


  input.addEventListener('focus', (e) => {
    const target = e.target;

    if (btn.classList.contains('burger_active')) {
      btn.classList.remove('burger_active');
      nav.classList.remove('nav_active');
    }

    dandruff.classList.add('search-dandruff-icon_focus');
    close.classList.add('search-close-icon_focus');
    searchBlock.classList.add('search_focus');

    target.setAttribute('placeholder', '');
    target.value = '';
  });

  close.addEventListener('click', () => {
    dandruff.classList.remove('search-dandruff-icon_focus');
    close.classList.remove('search-close-icon_focus');
    searchBlock.classList.remove('search_focus');

    input.value = '';
    input.setAttribute('placeholder', 'Шукай за назвою, актором або персонажем...')
  });
};

export default searchBlockStyle;