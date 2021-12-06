import {createElement} from "../utils";

const createMoreBtnTemplate = () => {
    return (
        `<button class="load-more" type="button">load more</button>`
    );
};

export default class MoreBtn {
    constructor() {
        this._element = null;
    }

    getTemplate() {
        return createMoreBtnTemplate();
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
};
