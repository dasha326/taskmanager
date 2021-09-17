'use strict';
console.log(1111);
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
const siteMain = document.querySelector('main');
const siteMenu = siteMain.querySelector('.main__control');
console.log(siteMain, siteMenu);
const render = (container, template, place) =>{
    container.insertAdjacentHTML(place, template)
};

render(siteMenu, menuTemplate(), 'beforeend');