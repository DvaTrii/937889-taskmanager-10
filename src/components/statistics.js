import AbstractSmartComponent from "./abstract-smart-component.js";

const creatStatisticsTemplate = () => {
  return `<div>Statistics</div>`;
};

export default class Statistics extends AbstractSmartComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return creatStatisticsTemplate();
  }
}
