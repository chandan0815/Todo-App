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
  if (time) {
    return `${day}${separator}${month}${separator}${year} ${hours}${separator}${minutes}${separator}${seconds}`;
  } else {
    return `${day}${separator}${month}${separator}${year}`;
  }
};
