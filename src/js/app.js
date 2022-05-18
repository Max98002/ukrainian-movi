import isWebp from "./modules/isWebp.js";
isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/
import searchBlockStyle from './modules/search-block.js';
import toggleBurger from "./modules/toggle-burger.js";
import menuToggle from './modules/menu-toggle.js';
import {
  glide
} from './modules/glide-slider.js';

window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  if (document.querySelector('.glide')) {
    glide.mount();
  }

  searchBlockStyle();

  toggleBurger();

  menuToggle();
});