import {menuTemplate} from "./components/menu.js";
import {filterTemplate} from "./components/filter.js";
import {boardTemplate} from "./components/board.js";
import {boardFilterTemplate} from "./components/board-filter.js";
import {boardTaskTemplate} from "./components/board-task.js";
import {boardMoreTemplate} from "./components/more-btn.js";

const TASK_COUNT = 3;
const siteMain = document.querySelector('main');
const siteMenu = siteMain.querySelector('.main__control');

const render = (container, template, place) =>{
    container.insertAdjacentHTML(place, template)
};

render(siteMenu, menuTemplate(), 'beforeend');
render(siteMain, filterTemplate(), 'beforeend');
render(siteMain, boardTemplate(), 'beforeend');

const siteBoard = siteMain.querySelector('.board');
render(siteBoard, boardFilterTemplate(), 'afterbegin');
render(siteBoard, boardMoreTemplate(), 'beforeend');

const siteTasks = siteBoard.querySelector('.board__tasks');
for (let i = 0; i < TASK_COUNT; i++){
    render(siteTasks, boardTaskTemplate(), 'beforeend');
}

