const searchBlockStyle = () => {
  const searchBlock = document.querySelector('.search');
  const input = searchBlock.querySelector('.search-input');

  const dandruff = searchBlock.querySelector('.search-dandruff-icon');
  const close = searchBlock.querySelector('.search-close-icon');

  const setStyle = (toggleClass, attr = '', e) => {
    const target = e.target;

    dandruff.classList[toggleClass]('search-dandruff-icon_focus');
    close.classList[toggleClass]('search-close-icon_focus');
    searchBlock.classList[toggleClass]('search_focus')

    target.setAttribute('placeholder', attr);
    target.value = '';
  };

  input.addEventListener('focus', (e) => setStyle('add', '', e));
  input.addEventListener('blur', (e) => setStyle('remove', 'Шукай за назвою, актором або персонажем...', e));
};

export default searchBlockStyle;