import { slidersMain } from "./parts/slidersMain/slidersMain";
import { popups } from "./parts/popups/popups";
import { form } from "./parts/forms/form";


window.APP = {};

const initPage = () => {
  window.APP.SLIDERS = slidersMain();
  window.APP.POPUPS = popups();
  window.APP.FORM = form();

  window.showPreload = () => {

  };
  window.hidePreload = () => {

  };
};

window.addEventListener('DOMContentLoaded', initPage);

