"use strict";function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}!function(modules){var installedModules={};function __webpack_require__(moduleId){var module;return(installedModules[moduleId]||(module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}},modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module)).exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"===_typeof(value)&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s="./src/scripts/index.js")}({"./src/scripts/index.js":function srcScriptsIndexJs(module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_slidersMain_slidersMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/slidersMain/slidersMain */ "./src/scripts/parts/slidersMain/slidersMain.js");\n\n\nwindow.APP = {};\n\nconst initPage = () => {\n  window.APP.SLIDERS = Object(_parts_slidersMain_slidersMain__WEBPACK_IMPORTED_MODULE_0__["slidersMain"])();\n\n  window.showPreload = () => {\n\n  };\n  window.hidePreload = () => {\n\n  };\n};\n\nwindow.addEventListener(\'DOMContentLoaded\', initPage);\n\n\n\n//# sourceURL=webpack:///./src/scripts/index.js?')},"./src/scripts/parts/slidersMain/slidersMain.js":function srcScriptsPartsSlidersMainSlidersMainJs(module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slidersMain\", function() { return slidersMain; });\nconst slidersMain = () => {\n\n  document.querySelectorAll(\".js-keys-carousel\").forEach(e => {\n    new Swiper(e, {\n      // Optional parameters\n      slidesPerView: 'auto',\n      centeredSlides: true,\n      centeredSlidesBounds: true,\n      spaceBetween: 30,\n      initialSlide: 1,\n      // Navigation arrows\n      navigation: {\n        nextEl: '.js-keys__swiper-next',\n        prevEl: '.js-keys__swiper-prev',\n      }\n    });\n  })\n\n\n  document.querySelectorAll(\".js-keys__partners\").forEach(e => {\n    new Swiper(e, {\n      // Optional parameters\n      slidesPerView: 'auto',\n      spaceBetween: 40,\n      breakpoints: {\n        667: {\n          spaceBetween: 84,\n        }\n      }\n    });\n  })\n\n  document.querySelectorAll(\".experience__swiper\").forEach(e => {\n    new Swiper(e, {\n      // Optional parameters\n      slidesPerView: 'auto',\n      spaceBetween: 30,\n      breakpoints: {\n        1024: {\n          slidesPerView: 6,\n        }\n      }\n    });\n  })\n\n  document.querySelectorAll(\".expertis__swiper\").forEach(e => {\n    new Swiper(e, {\n      // Optional parameters\n      slidesPerView: 'auto',\n      spaceBetween: 30,\n    });\n  })\n\n  document.querySelectorAll(\".js-info-swiper\").forEach(e => {\n    new Swiper(e, {\n      // Optional parameters\n      slidesPerView: 'auto',\n      pagination: {\n        el: '.js-info-pagination',\n      },\n      spaceBetween: 20,\n      autoHeight: true,\n      breakpoints: {\n        720: {\n          slidesPerView: 'auto',\n          spaceBetween: 30,\n        }\n      }\n    });\n  })\n\n  document.querySelectorAll(\".js-section-designing__swiper\").forEach(e => {\n    new Swiper(e, {\n      // Optional parameters\n      slidesPerView: 1,\n      spaceBetween: 20,\n      breakpoints: {\n        667: {\n          slidesPerView: 'auto',\n          enabled: false,\n        }\n      },\n      navigation: {\n        nextEl: '.js-designing__swiper-next',\n        prevEl: '.js-designing__swiper-prev',\n      }\n    });\n  })\n}\n\n\n//# sourceURL=webpack:///./src/scripts/parts/slidersMain/slidersMain.js?")}});