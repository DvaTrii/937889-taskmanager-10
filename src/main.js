// import {createSiteMenuTemplate} from './components/site-menu.js';
// import {createFilterTemplate} from './components/filter.js';
// import {createBoardTemplate} from './components/board.js';
// import {createTaskTemplate} from './components/task.js';
// import {createTaskEditTemplate} from './components/task-edit.js';
// import {generateFilters} from './mock/filter.js';
// import {createLoadMoreButtonTemplate} from './components/load-more-button.js';

import {createBoardTemplate} from './components/board.js';
import {createFilterTemplate} from './components/filter.js';
import {createLoadMoreButtonTemplate} from './components/load-more-button.js';
import {createTaskEditTemplate} from './components/task-edit.js';
import {createTaskTemplate} from './components/task.js';
import {createSiteMenuTemplate} from './components/site-menu.js';
import {generateTasks} from './mock/task.js';
import {generateFilters} from './mock/filter.js';

const TASK_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
render(siteHeaderElement, createSiteMenuTemplate());
const filters = generateFilters();
render(siteMainElement, createFilterTemplate(filters), `beforeend`);
render(siteMainElement, createBoardTemplate());

const taskListElement = document.querySelector(`.board__tasks`);
render(taskListElement, createTaskEditTemplate());

new Array(TASK_COUNT)
  .fill(``)
  .forEach(
      () => render(taskListElement, createTaskTemplate())
  );

const boardElement = siteMainElement.querySelector(`.board`);
render(boardElement, createLoadMoreButtonTemplate());
