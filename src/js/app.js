import isWebp from "./modules/isWebp.js";
isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

import {
  glide
} from './modules/glide-slider.js';

import searchBlockStyle from './modules/search-block.js';
import toggleBurger from "./modules/toggle-burger.js";
import menuToggle from './modules/menu-toggle.js';
import activeSelected from './modules/active-selected.js';
import modals from "./modules/modals.js";
import rating from "./modules/rating.js";

window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  if (document.querySelector('.glide')) {
    glide.mount();
  }

  modals();

  window.addEventListener('scroll', () => {
    let scroll = Math.round(document.documentElement.scrollTop);
    if (scroll > 50) {
      document.querySelector('.header').classList.add('header_move-header');
    } else {
      document.querySelector('.header').classList.remove('header_move-header');
    }
  });

  searchBlockStyle();

  toggleBurger();

  menuToggle();

  // activeSelected();

  rating();
});