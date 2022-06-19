/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/navigation.js":
/*!**************************************!*\
  !*** ./src/js/modules/navigation.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const navigation = () => {
  const parent = document.querySelector('.menu__list');
  parent.addEventListener('click', e => {
    switch (e.target.getAttribute('id')) {
      case 'start':
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
        break;

      case 'about':
        window.scrollTo({
          top: 660,
          left: 0,
          behavior: "smooth"
        });
        break;

      case 'projects':
        window.scrollTo({
          top: 1690,
          left: 0,
          behavior: "smooth"
        });
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (navigation);

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const scroll = headerrr => {
  const header = document.querySelector(headerrr),
        width = window.getComputedStyle(header).height;
  let prevScroll = window.pageYOffset;
  let currentScroll;
  window.addEventListener('scroll', () => {
    currentScroll = scrollY;

    if (currentScroll > prevScroll) {
      header.style.cssText = `
            top: -${width};
         `;
    } else {
      header.style.cssText = `
         top: ${0};
      `;
    }

    prevScroll = currentScroll;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (scroll);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const slider = target => {
  $(target).slick({
    dots: true,
    // autoplay: true,
    // adaptiveHeight: true,
    // centerMode: true,
    centerPadding: '100px',
    slidesToShow: 1,
    responsive: [{
      breakpoint: 769,
      settings: {
        arrows: false
      }
    }, {
      breakpoint: 480,
      settings: "unslick"
    }]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ "./src/js/modules/scroll.js");
/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/navigation */ "./src/js/modules/navigation.js");





window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])('.slider');
  (0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__["default"])('.header__inner');
  (0,_modules_navigation__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map