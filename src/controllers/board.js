import TasksComponent from "../components/tasks.js";
import SortComponent, {SortType} from "../components/sort.js";
import MoreBtnComponent from "../components/more-btn.js";
import TaskController from "../controllers/task.js";
import NoTasksComponent from "../components/no-tasks.js";
import {render, replace, remove, RenderPosition} from "../utils/render.js";

const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const renderTasks = (tasks, tasksListElement, onDataChange) => {
    return tasks.map((task) => {
        const taskController = new TaskController(tasksListElement, onDataChange);
        taskController.render(task);
    });
};
const getSortedTasks = (tasks, sortType, from, to) => {
    let sortedTasks = [];
    const defaultTasks = tasks.slice();

    switch (sortType) {
        case SortType.DATE_UP:
            sortedTasks = defaultTasks.sort((a, b) => a.dueDate - b.dueDate);
            break;
        case SortType.DATE_DOWN:
            sortedTasks = defaultTasks.sort((a, b) => b.dueDate - a.dueDate);
            break;
        case SortType.DEFAULT:
            sortedTasks = defaultTasks;
            break;
    }

    return sortedTasks.slice(from, to);
};

export default class BoardController {
    constructor(container) {
        this._container = container;

        this._tasks = [];
        this._showedTaskControllers = [];
        this._showingTaskCount = SHOWING_TASKS_COUNT_ON_START;
        this._noTaskComponent = new NoTasksComponent();
        this._tasksComponent = new TasksComponent();
        this._sortComponent = new SortComponent();
        this._loadMoreBtnComponent = new MoreBtnComponent();

        this._onSortTypeChange = this._onSortTypeChange.bind(this);
        this._sortComponent.setSortTypeChangeHandler(this._onSortTypeChange);

        this._onDataChange = this._onDataChange.bind(this);
    }

    render(tasks) {
        this._tasks = tasks;

        const siteBoardElement = this._container.getElement();
        const isAllArchive = tasks.every((task) => task.isArchive);
        if (isAllArchive) {
            render(siteBoardElement, this._noTaskComponent.getElement(), RenderPosition.AFTERBEGIN);
            return;
        }

        // Render list and tasks
        const tasksListElement = this._tasksComponent.getElement();
        render(siteBoardElement, tasksListElement, RenderPosition.AFTERBEGIN);

        // Render Sort
        render(siteBoardElement, this._sortComponent.getElement(), RenderPosition.AFTERBEGIN);

        const newTasks = renderTasks(this._tasks.slice(0, this._showingTaskCount), tasksListElement, this._onDataChange);
        this._showedTaskControllers = this._showedTaskControllers.concat(newTasks);

        this._renderMoreBtn();

    }
    _renderMoreBtn() {
        const siteBoardElement = this._container.getElement();
        const loadMoreBtnElement = this._loadMoreBtnComponent.getElement();
        const tasksListElement = this._tasksComponent.getElement();

        if (this._showingTaskCount >= this._tasks.length) {
            return;
        }
        render(siteBoardElement, loadMoreBtnElement, RenderPosition.BEFOREEND);

        this._loadMoreBtnComponent.setClickHandler(()=>{
            const prevTaskCount = this._showingTaskCount;
            this._showingTaskCount += SHOWING_TASKS_COUNT_BY_BUTTON;

            const sortedTasks = getSortedTasks(this._tasks, this._sortComponent.getSortType(), prevTaskCount, this._showingTaskCount);
            const newTasks = renderTasks(sortedTasks, tasksListElement, this._onDataChange);
            this._showedTaskControllers = this._showedTaskControllers.concat(newTasks);

            if (this._showingTaskCount >= this._tasks.length) {
                remove(this._loadMoreBtnComponent);
            }
        });
    }

    _onSortTypeChange(sortType) {
        this._showingTaskCount = SHOWING_TASKS_COUNT_ON_START;
        const tasksListElement = this._tasksComponent.getElement();

        const sortedTasks = getSortedTasks(this._tasks, sortType, 0, this._showingTaskCount);
        tasksListElement.innerHTML = ``;

        renderTasks(sortedTasks, tasksListElement, this._onDataChange);

        this._renderMoreBtn();
    }

    _onDataChange(oldData, newData) {
        const oldDataIndex = this._tasks.findIndex((it) => it === oldData);
        // console.log(oldDataIndex);
        // console.log(oldData === newData);
        // console.log(this._tasks[oldDataIndex].isFavorite);
        if (oldDataIndex === -1) {
            return;
        }
        console.log(44444);
        this._tasks[oldDataIndex] = newData;
        return this._tasks[oldDataIndex];
    }
}
