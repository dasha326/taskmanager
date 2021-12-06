import {createElement} from "../utils";

const filterItemTemplate = (filter, isChecked) => {
    const {name, count, disabled} = filter;
    return (
        `<input
          type="radio"
          id="filter__${name}"
          class="filter__input visually-hidden"
          name="filter"
          ${isChecked ? `checked` : ``}
          ${disabled ? `disabled` : ``}
        />
        <label for="filter__${name}" class="filter__label">${name} <span class="filter__${name}-count">${count}</span></label>`
    );
};

const createFilterTemplate = (filters) => {
    const filterMarkup = filters.map((item, i) => filterItemTemplate(item, i === 0)).join(`\n`);
    return (
        `<section class="main__filter filter container">
            ${filterMarkup}
        </section>`
    );
};

export default class Filter {
    constructor(filters) {
        this._filters = filters;
        this._element = null;
    }

    getTemplate() {
        return createFilterTemplate(this._filters);
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
