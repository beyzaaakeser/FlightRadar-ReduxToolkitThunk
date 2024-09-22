import moment from 'moment';

const formatDate = (unix_time) => {
  if (unix_time === 0 || unix_time === null || unix_time === undefined)
    return 'Unknown';
  const formatted = new Date(unix_time * 1000);
  return moment(formatted).calendar();
};

export default formatDate;
