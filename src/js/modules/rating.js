const rating = () => {
  const rating = document.querySelector('.rating-block-starts')
  const ratingItem = document.querySelectorAll('.rating-block-starts__item');

  function removeClass(arr) {
    for (var i = 0, iLen = arr.length; i < iLen; i++) {
      for (var j = 1; j < arguments.length; j++) {
        ratingItem[i].classList.remove(arguments[j]);
      }
    }
  }

  function addClass(arr) {
    for (var i = 0, iLen = arr.length; i < iLen; i++) {
      for (var j = 1; j < arguments.length; j++) {
        ratingItem[i].classList.add(arguments[j]);
      }
    }
  }

  function mouseOverActiveClass(arr) {
    for (var i = 0, iLen = arr.length; i < iLen; i++) {
      if (arr[i].classList.contains('rating-block-starts__item_active')) {
        break;
      } else {
        arr[i].classList.add('rating-block-starts__item_active');
      }
    }
  }

  function mouseOutActiveClass(arr) {
    for (var i = arr.length - 1; i >= 1; i--) {
      if (arr[i].classList.contains('current-active')) {
        break;
      } else {
        arr[i].classList.remove('rating-block-starts__item_active');
      }
    }
  }

  rating.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('rating-block-starts__item')) {
      removeClass(ratingItem, 'current-active')
      target.classList.add('rating-block-starts__item_active', 'current-active');
    }
  })

  rating.addEventListener('mouseover', (e) => {
    const target = e.target;

    if(target.classList.contains('rating-block-starts__item')){
      removeClass(ratingItem,'rating-block-starts__item_active')
      target.classList.add('rating-block-starts__item_active');
      mouseOverActiveClass(ratingItem)
    }

  });

  rating.addEventListener('mouseout', () => {
    addClass(ratingItem,'rating-block-starts__item_active');
    mouseOutActiveClass(ratingItem);
  })

};

export default rating;