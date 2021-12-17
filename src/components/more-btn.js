import AbstractComponent from "../components/abstract-component.js";

const createMoreBtnTemplate = () => {
    return (
        `<button class="load-more" type="button">load more</button>`
    );
};

export default class MoreBtn extends AbstractComponent {
    getTemplate() {
        return createMoreBtnTemplate();
    }
    setClickHandler(cb) {
        this.getElement().addEventListener(`click`, cb);
    }
}
