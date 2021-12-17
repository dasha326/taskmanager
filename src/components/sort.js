import AbstractComponent from "../components/abstract-component.js";

export const SortType = {
    DATE_DOWN: `date-down`,
    DATE_UP: `date-up`,
    DEFAULT: `default`,
};

const createSortTemplate = () => {
    return (
        `<div class="board__filter-list">
          <a href="#" class="board__filter" data-sort-type="${SortType.DEFAULT}">SORT BY DEFAULT</a>
          <a href="#" class="board__filter" data-sort-type="${SortType.DATE_UP}">SORT BY DATE up</a>
          <a href="#" class="board__filter" data-sort-type="${SortType.DATE_DOWN}">SORT BY DATE down</a>
        </div>`
    );
};

export default class Sort extends AbstractComponent {
    constructor() {
        super();
        this._currenSortType = SortType.DEFAULT;
    }

    getTemplate() {
        return createSortTemplate();
    }
    getSortType() {
        return this._currenSortType;
    }

    setSortTypeChangeHandler(cb) {
        this.getElement().addEventListener(`click`, (e)=>{
            if (e.target.tagName !== `A`) {
                return;
            }

            const sortType = e.target.dataset.sortType;

            if (sortType === this._currenSortType) {
                return;
            }

            this._currenSortType = sortType;
            cb(this._currenSortType);
        });
    }
}
