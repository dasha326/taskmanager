/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/board-filter.js":
/*!****************************************!*\
  !*** ./src/components/board-filter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boardFilterTemplate": () => (/* binding */ boardFilterTemplate)
/* harmony export */ });
const boardFilterTemplate = () => {
    return (
        `<div class="board__filter-list">
          <a href="#" class="board__filter" data-sort-type="default">SORT BY DEFAULT</a>
          <a href="#" class="board__filter" data-sort-type="date-up">SORT BY DATE up</a>
          <a href="#" class="board__filter" data-sort-type="date-down">SORT BY DATE down</a>
        </div>`
    )
};

/***/ }),

/***/ "./src/components/board-task.js":
/*!**************************************!*\
  !*** ./src/components/board-task.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boardTaskTemplate": () => (/* binding */ boardTaskTemplate)
/* harmony export */ });
const boardTaskTemplate = () => {
    return (
        `<article class="card card--black">
            <div class="card__form">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">
                    edit
                  </button>
                  <button type="button" class="card__btn card__btn--archive">
                    archive
                  </button>
                  <button
                    type="button"
                    class="card__btn card__btn--favorites card__btn--disabled"
                  >
                    favorites
                  </button>
                </div>

                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <p class="card__text">Example task with default color.</p>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <div class="card__date-deadline">
                        <p class="card__input-deadline-wrap">
                          <span class="card__date">23 September</span>
                          <span class="card__time">16:15</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>`
    )
};

/***/ }),

/***/ "./src/components/board.js":
/*!*********************************!*\
  !*** ./src/components/board.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boardTemplate": () => (/* binding */ boardTemplate)
/* harmony export */ });
const boardTemplate = () => {
    return (
        `<section class="board container">
            <div class="board__tasks"></div>
        </section>`
    )
};

/***/ }),

/***/ "./src/components/filter.js":
/*!**********************************!*\
  !*** ./src/components/filter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterTemplate": () => (/* binding */ filterTemplate)
/* harmony export */ });
const filterTemplate = () => {
    return (
        `<section class="main__filter filter container">
        <input
          type="radio"
          id="filter__all"
          class="filter__input visually-hidden"
          name="filter"
          checked
        />
        <label for="filter__all" class="filter__label">
          All <span class="filter__all-count">13</span></label
        >
        <input
          type="radio"
          id="filter__overdue"
          class="filter__input visually-hidden"
          name="filter"
          disabled
        />
        <label for="filter__overdue" class="filter__label"
          >Overdue <span class="filter__overdue-count">0</span></label
        >
        <input
          type="radio"
          id="filter__today"
          class="filter__input visually-hidden"
          name="filter"
          disabled
        />
        <label for="filter__today" class="filter__label"
          >Today <span class="filter__today-count">0</span></label
        >
        <input
          type="radio"
          id="filter__favorites"
          class="filter__input visually-hidden"
          name="filter"
        />
        <label for="filter__favorites" class="filter__label"
          >Favorites <span class="filter__favorites-count">1</span></label
        >
        <input
          type="radio"
          id="filter__repeating"
          class="filter__input visually-hidden"
          name="filter"
        />
        <label for="filter__repeating" class="filter__label"
          >Repeating <span class="filter__repeating-count">1</span></label
        >
        <input
          type="radio"
          id="filter__archive"
          class="filter__input visually-hidden"
          name="filter"
        />
        <label for="filter__archive" class="filter__label"
          >Archive <span class="filter__archive-count">115</span></label
        >
      </section>`
    )
};

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuTemplate": () => (/* binding */ menuTemplate)
/* harmony export */ });
const menuTemplate = () => {
    return (
        `<section class="control__btn-wrap">
          <input
            type="radio"
            name="control"
            id="control__new-task"
            class="control__input visually-hidden"
          />
          <label for="control__new-task" class="control__label control__label--new-task"
            >+ ADD NEW TASK</label
          >
          <input
            type="radio"
            name="control"
            id="control__task"
            class="control__input visually-hidden"
            checked
          />
          <label for="control__task" class="control__label">TASKS</label>
          <input
            type="radio"
            name="control"
            id="control__statistic"
            class="control__input visually-hidden"
          />
          <label for="control__statistic" class="control__label"
            >STATISTICS</label
          >
        </section>`
    )
};


/***/ }),

/***/ "./src/components/more-btn.js":
/*!************************************!*\
  !*** ./src/components/more-btn.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boardMoreTemplate": () => (/* binding */ boardMoreTemplate)
/* harmony export */ });
const boardMoreTemplate = () => {
    return (
        `<button class="load-more" type="button">load more</button>`
    )
};

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu.js */ "./src/components/menu.js");
/* harmony import */ var _components_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/filter.js */ "./src/components/filter.js");
/* harmony import */ var _components_board_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/board.js */ "./src/components/board.js");
/* harmony import */ var _components_board_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/board-filter.js */ "./src/components/board-filter.js");
/* harmony import */ var _components_board_task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/board-task.js */ "./src/components/board-task.js");
/* harmony import */ var _components_more_btn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/more-btn.js */ "./src/components/more-btn.js");







const TASK_COUNT = 3;
const siteMain = document.querySelector('main');
const siteMenu = siteMain.querySelector('.main__control');

const render = (container, template, place) =>{
    container.insertAdjacentHTML(place, template)
};

render(siteMenu, (0,_components_menu_js__WEBPACK_IMPORTED_MODULE_0__.menuTemplate)(), 'beforeend');
render(siteMain, (0,_components_filter_js__WEBPACK_IMPORTED_MODULE_1__.filterTemplate)(), 'beforeend');
render(siteMain, (0,_components_board_js__WEBPACK_IMPORTED_MODULE_2__.boardTemplate)(), 'beforeend');

const siteBoard = siteMain.querySelector('.board');
render(siteBoard, (0,_components_board_filter_js__WEBPACK_IMPORTED_MODULE_3__.boardFilterTemplate)(), 'afterbegin');
render(siteBoard, (0,_components_more_btn_js__WEBPACK_IMPORTED_MODULE_5__.boardMoreTemplate)(), 'beforeend');

const siteTasks = siteBoard.querySelector('.board__tasks');
for (let i = 0; i < TASK_COUNT; i++){
    console.log(11);
    render(siteTasks, (0,_components_board_task_js__WEBPACK_IMPORTED_MODULE_4__.boardTaskTemplate)(), 'beforeend');
}


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map