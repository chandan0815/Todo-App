//gives the current time in the format DD:MM:YYYY HH:MM:SS or DD:MM:YYYY based on the argument passed
const separator = '/';
export const getCurrentTime = (time: boolean) => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const dateStr = `${day}${separator}${month}${separator}${year}`;
  const timeStr = `${hours}${separator}${minutes}${separator}${seconds}`;
  if (time) {
    return `${dateStr} ${timeStr}`;
  } else {
    return dateStr;
  }
};

export const parseDate = (date: string, inputSeparator: string) => {
  // converts a date string in the format YYYY-MM-DD to DD/MM/YYYY to format
  if (!date) return '';
  if (date === 'Invalid Date') return '';
  if (date === 'undefined') return '';
  const [year, month, day] = date.split(inputSeparator);
  return `${day}${separator}${month}${separator}${year}`;
};

export const getDateFromString = (date: string, inputSeparator: string) => {
  // converts a date string in the format DD-MM-YYYY to Date object
  const [day, month, year] = date.split(inputSeparator);
  return new Date(+year, +month - 1, +day);
};
