import {createElement} from "../utils/render";

export default class AbstractComponent {
    constructor() {
        if (new.target === AbstractComponent) {
            throw new Error(`Нельзя создать экземпляр класса, только наследовать`);
        }
        this._element = null;
        this._nameClass = new.target.name;
    }

    getTemplate() {
        throw new Error(`Реализуй асбтрактный метод в ${this._nameClass}`);
    }

    getElement() {
        if (!this._element) {
            this._element = createElement(this.getTemplate());
        }

        return this._element;
    }

    removeElement() {
        this._element = null;
    }
}
