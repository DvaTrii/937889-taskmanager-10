export default class Tasks {
  constructor() {
    this._tasks = [];
  }

  getTasks() {
    return this._tasks;
  }

  setTasks(tasks) {
    this._tasks = Array.from(tasks);
  }
}
