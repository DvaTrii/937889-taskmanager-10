// import moment from 'moment';

export const formatTime = (date) => {
  return window.moment(date).format(`hh:mm A`);
};

export const formatDate = (date) => {
  return window.moment(date).format(`DD MMMM`);
};
