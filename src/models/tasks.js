import {getTasksByFilter} from '../utils/filter.js';
import {FilterType} from '../const.js';

export default class Tasks {
  constructor() {
    this._tasks = [];
    this._activeFilterType = FilterType.ALL;

    this._filterChangeHandlers = [];
  }

  getTasks() {
    return getTasksByFilter(this._tasks, this._activeFilterType);
  }

  getTasksAll() {
    return this._tasks;
  }

  setTasks(tasks) {
    this._tasks = Array.from(tasks);
  }

  setFilter(filterType) {
    this._activeFilterType = filterType;
    this._filterChangeHandlers.forEach((handler) => handler());
  }

  updateTask(id, task) {
    const index = this._tasks.findIndex((it) => it.id === id);

    if (index === -1) {
      return false;
    }

    this._tasks = [].concat(this._tasks.slice(0, index), task, this._tasks.slice(index + 1));

    return true;
  }

  setFilterChangeHandler(handler) {
    this._filterChangeHandlers.push(handler);
  }
}
