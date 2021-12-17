import TasksComponent from "../components/tasks.js";
import SortComponent, {SortType} from "../components/sort.js";
import MoreBtnComponent from "../components/more-btn.js";
import TaskComponent from "../components/task.js";
import TaskEditComponent from "../components/task-edit.js";
import NoTasksComponent from "../components/no-tasks.js";
import {render, replace, remove, RenderPosition} from "../utils/render.js";

const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const renderTask = (taskListElement, task) => {
    const onEditBtnClick = () => {
        replace(taskElement, taskEditElement);
    };
    const onEditFormSubmit = (e) => {
        e.preventDefault();
        replace(taskEditElement, taskElement);
    };
    const onEscapeKeyDown = (e) => {
        const isEscKey = e.key === `Escape` || e.key === `Esc`;
        if (isEscKey) {
            onEditFormSubmit(e);
        }
        document.removeEventListener(`keydown`, onEscapeKeyDown);
    };

    const taskComponent = new TaskComponent(task);
    const taskElement = taskComponent.getElement();
    taskComponent.setEditHandler(() => {
        onEditBtnClick();
        document.addEventListener(`keydown`, onEscapeKeyDown);
    });

    const taskEditComponent = new TaskEditComponent(task);
    const taskEditElement = taskEditComponent.getElement();
    taskEditComponent.setSubmitHandler((e) => {
        e.preventDefault();
        onEditFormSubmit(e);
        document.removeEventListener(`keydown`, onEscapeKeyDown);
    });
    render(taskListElement, taskElement, RenderPosition.BEFOREEND);
};
const renderTasks = (tasks, tasksListElement) => {
    tasks.forEach((task) => renderTask(tasksListElement, task));
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
        this._noTaskComponent = new NoTasksComponent();
        this._tasksComponent = new TasksComponent();
        this._sortComponent = new SortComponent();
        this._loadMoreBtnComponent = new MoreBtnComponent();
    }

    renderBoard(tasks) {
        const renderMoreBtn = () =>{
            const loadMoreBtnElement = this._loadMoreBtnComponent.getElement();
            if (showingTaskCount >= tasks.length) {
                return;
            }
            render(siteBoardElement, loadMoreBtnElement, RenderPosition.BEFOREEND);

            this._loadMoreBtnComponent.setClickHandler(()=>{
                const prevTaskCount = showingTaskCount;
                showingTaskCount += SHOWING_TASKS_COUNT_BY_BUTTON;
                renderTasks(getSortedTasks(tasks, this._sortComponent.getSortType(), prevTaskCount, showingTaskCount), tasksListElement);
                if (showingTaskCount >= tasks.length) {
                    remove(this._loadMoreBtnComponent);
                }
            });
        };

        const siteBoardElement = this._container;
        const isAllArchive = tasks.every((task) => task.isArchive);
        if (isAllArchive) {
            render(siteBoardElement, this._noTaskComponent.getElement(), RenderPosition.AFTERBEGIN);
            return;
        }

        // Render list and tasks
        const tasksListElement = this._tasksComponent.getElement();
        render(siteBoardElement, tasksListElement, RenderPosition.AFTERBEGIN);

        let showingTaskCount = SHOWING_TASKS_COUNT_ON_START;
        renderTasks(getSortedTasks(tasks, this._sortComponent.getSortType(), 1, showingTaskCount), tasksListElement);
        renderMoreBtn();

        // Sort
        render(siteBoardElement, this._sortComponent.getElement(), RenderPosition.AFTERBEGIN);

        this._sortComponent.setSortTypeChangeHandler((sortType) => {
            tasksListElement.innerHTML = ``;
            renderTasks(getSortedTasks(tasks, sortType, 1, showingTaskCount), tasksListElement);
            renderMoreBtn();
        });
    }
}
