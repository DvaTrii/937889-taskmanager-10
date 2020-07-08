import BoardComponent from './components/board.js';
import StatisticsComponent from "./components/statistics.js";
import BoardController from "./controllers/board";
import FilterController from './controllers/filter.js';
import SiteMenuComponent, {MenuItem} from './components/site-menu.js';
import TasksModel from './models/tasks.js';
import {generateTasks} from './mock/task.js';
import {render, RenderPosition} from "./utils/render.js";

const TASK_COUNT = 20;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
const siteMenuComponent = new SiteMenuComponent();

render(siteHeaderElement, siteMenuComponent, RenderPosition.BEFOREEND);


// Быстрое решение для подписки на клик по кнопке.
// Это противоречит нашей архитектуре работы с DOM-элементами, но это временное решение.
// Совсем скоро мы создадим полноценный компонент для работы с меню.
// siteMenuComponent.getElement().querySelector(`.control__label--new-task`)
//   .addEventListener(`click`, () => {
//     boardController.createTask();
//   });

const tasks = generateTasks(TASK_COUNT);
const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

const filterController = new FilterController(siteMainElement, tasksModel);
filterController.render();

const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);

const boardController = new BoardController(boardComponent, tasksModel);
boardController.render();


const dateTo = new Date();
const dateFrom = (() => {
  const d = new Date(dateTo);
  d.setDate(d.getDate() - 7);
  return d;
})();

const statisticsComponent = new StatisticsComponent({tasks: tasksModel, dateFrom, dateTo});
render(siteMainElement, statisticsComponent, RenderPosition.BEFOREEND);
statisticsComponent.hide();

render(siteMainElement, statisticsComponent, RenderPosition.BEFOREEND);
statisticsComponent.hide();

siteMenuComponent.setOnChange((menuItem) => {
  switch (menuItem) {
    case MenuItem.NEW_TASK:
      siteMenuComponent.setActiveItem(MenuItem.TASKS);
      boardController.createTask();
      break;
    case MenuItem.STATISTICS:
      boardController.hide();
      statisticsComponent.show();
      break;
    case MenuItem.TASKS:
      statisticsComponent.hide();
      boardController.show();
      break;
  }
});
