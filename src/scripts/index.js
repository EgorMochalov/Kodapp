import { slidersMain } from "./parts/slidersMain/slidersMain";

window.APP = {};

const initPage = () => {
  window.APP.SLIDERS = slidersMain();

  window.showPreload = () => {

  };
  window.hidePreload = () => {

  };
};

window.addEventListener('DOMContentLoaded', initPage);

