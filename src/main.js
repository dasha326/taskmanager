import {menuTemplate} from "./components/menu.js";
import {filterTemplate} from "./components/filter.js";
import {boardTemplate} from "./components/board.js";
import {boardFilterTemplate} from "./components/board-filter.js";
import {taskTemplate} from "./components/task.js";
import {taskEditTemplate} from "./components/task-edit.js";
import {boardMoreTemplate} from "./components/more-btn.js";

import {generateFilter} from "./mock/filter.js";
import {generateTasks} from "./mock/task.js";

const TASK_COUNT = 23;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;
const tasks = generateTasks(TASK_COUNT);
const siteMain = document.querySelector('main');
const siteMenu = siteMain.querySelector('.main__control');

const render = (container, template, place) =>{
    container.insertAdjacentHTML(place, template)
};

render(siteMenu, menuTemplate(), 'beforeend');
render(siteMain, filterTemplate(generateFilter()), 'beforeend');
render(siteMain, boardTemplate(), 'beforeend');

const siteBoard = siteMain.querySelector('.board');
render(siteBoard, boardFilterTemplate(), 'afterbegin');
render(siteBoard, boardMoreTemplate(), 'beforeend');

const siteTasks = siteBoard.querySelector('.board__tasks');
render(siteTasks, taskEditTemplate(tasks[0]), 'beforeend');

let showingTaskCount = SHOWING_TASKS_COUNT_ON_START;
tasks.slice(1, showingTaskCount).forEach((task) => render(siteTasks, taskTemplate(task), 'beforeend'));

const loadMoreBtn = siteBoard.querySelector('.load-more');
loadMoreBtn.addEventListener('click', () => {
    const prevTaskCount = showingTaskCount;
    showingTaskCount += SHOWING_TASKS_COUNT_BY_BUTTON;
    tasks.slice(prevTaskCount, showingTaskCount).forEach((task) => render(siteTasks, taskTemplate(task), 'beforeend'));

    if (showingTaskCount >= TASK_COUNT) loadMoreBtn.remove();
});