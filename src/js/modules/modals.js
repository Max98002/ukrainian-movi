const modals = () => {

  const bindModal = (triggerModal, tirggersBtns, triggerClose, clickModalOverlay = true) => {

    const modalWindow = document.querySelector(triggerModal),
      modalBtns = document.querySelectorAll(tirggersBtns),
      modalClose = document.querySelector(triggerClose),
      windows = document.querySelectorAll('[data-modal]');

    const closeAllWindow = (arr) => {
      arr.forEach(item => {
        item.classList.remove('animate__fadeIn');
      });
    };

    closeAllWindow(windows);

    modalBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        closeAllWindow(windows);

        modalWindow.classList.add('animate__fadeIn');
        document.body.style.overflow = 'hidden';

      });
    });

    modalClose.addEventListener('click', () => {
      closeAllWindow(windows);

      modalWindow.classList.remove('animate__fadeIn');
      document.body.style.overflow = '';
    });

    modalWindow.addEventListener('click', (e) => {
      const target = e.target;

      if (target && target === modalWindow && clickModalOverlay) {
        modalWindow.classList.remove('animate__fadeIn');
        document.body.style.overflow = '';
      }
    })

  };

  bindModal('.login-window', '.header__button_enter', '.login-close');
  bindModal('.login-window', '.sign-up-button-login', '.login-close');
  bindModal('.sign-up-window', '.login-button-registration', '.sign-up-close');

  bindModal('.rating-window', '.button__rating', '.rating-close');
  bindModal('.share-window', '.button-share', '.share-close');


};

export default modals;