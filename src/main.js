import BordComponent from "./components/board.js";
import MenuComponent from "./components/menu.js";
import FilterComponent from "./components/filter.js";
import BoardController from "./controllers/board.js";
import {generateFilter} from "./mock/filter.js";
import {generateTasks} from "./mock/task.js";
import {render, RenderPosition} from "./utils/render.js";

const siteMain = document.querySelector(`main`);
const siteMenu = siteMain.querySelector(`.main__control`);

const TASK_COUNT = 23;
const tasks = generateTasks(TASK_COUNT);
const filters = generateFilter();

render(siteMenu, new MenuComponent().getElement(), RenderPosition.BEFOREEND);
render(siteMain, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);

const boardComponent = new BordComponent();
const boardElement = boardComponent.getElement();
render(siteMain, boardElement, RenderPosition.BEFOREEND);
const boardController = new BoardController(boardElement);
boardController.renderBoard(tasks);
