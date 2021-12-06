import BordComponent from "./components/board.js";
import MenuComponent from "./components/menu.js";
import FilterComponent from "./components/filter.js";
import TasksComponent from "./components/tasks.js";
import SortComponent from "./components/sort.js";
import MoreBtnComponent from "./components/more-btn.js";
import TaskComponent from "./components/task.js";
import TaskEditComponent from "./components/task-edit.js";
import NoTaskstComponent from "./components/no-tasks.js";

import {generateFilter} from "./mock/filter.js";
import {generateTasks} from "./mock/task.js";
import {render, RenderPosition} from "./utils.js";

const TASK_COUNT = 23;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const siteMain = document.querySelector(`main`);
const siteMenu = siteMain.querySelector(`.main__control`);

const renderTask = (taskListElement, task) => {
    const onEditBtnClick = () => {
        taskListElement.replaceChild(taskEditElement, taskElement);
    };
    const onEditFormSubmit = (e) => {
        e.preventDefault();
        taskListElement.replaceChild(taskElement, taskEditElement);
    };
    const onEscapeKeyDown = (e) => {
        const isEscKey = e.key === `Escape` || e.key === `Esc`;
        if (isEscKey) {
            onEditFormSubmit(e);
        }
        document.removeEventListener(`keydown`, onEscapeKeyDown);
    };

    const taskElement = new TaskComponent(task).getElement();
    const editBtn = taskElement.querySelector(`.card__btn--edit`);
    editBtn.addEventListener(`click`, () => {
        onEditBtnClick();
        document.addEventListener(`keydown`, onEscapeKeyDown);
    });

    const taskEditElement = new TaskEditComponent(task).getElement();
    const formSubmitBtn = taskEditElement.querySelector(`.card__save`);
    formSubmitBtn.addEventListener(`click`, (e) => {
        e.preventDefault();
        onEditFormSubmit(e);
        document.removeEventListener(`keydown`, onEscapeKeyDown);
    });
    render(taskListElement, taskElement, RenderPosition.BEFOREEND);
};
const renderBoard = (siteBoard, tasks) => {
    const isAllArchive = tasks.every((task) => task.isArchive);
    console.log(isAllArchive);
    if (isAllArchive) {
        render(siteBoard.getElement(), new NoTaskstComponent().getElement(), RenderPosition.AFTERBEGIN);
        return;
    }
    const tasksList = new TasksComponent().getElement();
    render(siteBoard.getElement(), tasksList, RenderPosition.AFTERBEGIN);
    render(siteBoard.getElement(), new SortComponent().getElement(), RenderPosition.AFTERBEGIN);

    let showingTaskCount = SHOWING_TASKS_COUNT_ON_START;
    tasks.slice(1, showingTaskCount).forEach((task) => renderTask(tasksList, task));

    const loadMoreBtn = new MoreBtnComponent().getElement();
    render(siteBoard.getElement(), loadMoreBtn, RenderPosition.BEFOREEND);

    loadMoreBtn.addEventListener(`click`, () => {
        const prevTaskCount = showingTaskCount;
        showingTaskCount += SHOWING_TASKS_COUNT_BY_BUTTON;
        tasks.slice(prevTaskCount, showingTaskCount).forEach((task) => renderTask(tasksList, task));
        if (showingTaskCount >= TASK_COUNT) {
            loadMoreBtn.remove();
        }
    });
};

const tasks = generateTasks(TASK_COUNT);
const filters = generateFilter();

render(siteMenu, new MenuComponent().getElement(), RenderPosition.BEFOREEND);
render(siteMain, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);

const boardComponent = new BordComponent();
render(siteMain, boardComponent.getElement(), RenderPosition.BEFOREEND);
renderBoard(boardComponent, tasks);
