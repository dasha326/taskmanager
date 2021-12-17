import AbstractComponent from "../components/abstract-component.js";

const createBoardTemplate = () => {
    return (
        `<p class="board__no-tasks">
          Click «ADD NEW TASK» in menu to create your first task
        </p>`
    );
};

export default class NoTasks extends AbstractComponent{
    getTemplate() {
        return createBoardTemplate();
    }
}
