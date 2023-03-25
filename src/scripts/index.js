import { slidersMain } from "./parts/slidersMain/slidersMain";
import { popups } from "./parts/popups/popups";
import { form } from "./parts/forms/form";
import { pug } from "./parts/pug/pug";
import { drop } from "./parts/drop/drop";


window.APP = {};

const initPage = () => {
  window.APP.SLIDERS = slidersMain();
  window.APP.POPUPS = popups();
  window.APP.FORM = form();
  window.APP.PUG = pug();
  window.APP.DROP = drop();

  window.showPreload = () => {

  };
  window.hidePreload = () => {

  };
};

window.addEventListener('DOMContentLoaded', initPage);

