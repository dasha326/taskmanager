import TaskComponent from "../components/task.js";
import TaskEditComponent from "../components/task-edit.js";
import {render, replace, RenderPosition} from "../utils/render.js";

export default class TaskController {
    constructor(container, onDataChange) {
        this._container = container;
        this._taskComponent = null;
        this._taskEditComponent = null;
        this._onEscapeKeyDown = this._onEscapeKeyDown.bind(this);
        this._onDataChange = onDataChange;
    }

    render(task) {
        this._taskComponent = new TaskComponent(task);
        this._taskElement = this._taskComponent.getElement();
        this._taskComponent.setEdiClickHandler(() => {
            this._replaceEditToTask();
            document.addEventListener(`keydown`, this._onEscapeKeyDown);
        });

        this._taskEditComponent = new TaskEditComponent(task);
        this._taskEditElement = this._taskEditComponent.getElement();
        this._taskEditComponent.setSubmitHandler((e) => {
            e.preventDefault();
            this._replaceTaskToEdit(e);
            document.removeEventListener(`keydown`, this._onEscapeKeyDown);
        });


        this._taskComponent.setArchiveClickHandler(() => {
            this._onDataChange(this, task);
        });
        this._taskComponent.setFavoritesClickHandler(() => {
            console.log(task.isFavorite);
            const newTask = this._onDataChange(task, Object.assign({}, task, {
                isFavorite: !task.isFavorite
            }));
            //replace(this._taskElement, this._taskEditElement);
        });
        render(this._container, this._taskElement, RenderPosition.BEFOREEND);

    }

    _replaceEditToTask() {
        replace(this._taskElement, this._taskEditElement);
    }

    _replaceTaskToEdit(e) {
        e.preventDefault();
        replace(this._taskEditElement, this._taskElement);
    }

    _onEscapeKeyDown(e) {
        const isEscKey = e.key === `Escape` || e.key === `Esc`;
        if (isEscKey) {
            this._replaceTaskToEdit(e);
        }
        document.removeEventListener(`keydown`, this._onEscapeKeyDown);
    }

}
