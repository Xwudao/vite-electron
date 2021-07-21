import dayjs from 'dayjs';

const useDateFormat = (date: string): string => {
  return dayjs(date).format('YYYY/MM/DD HH:mm:ss');
};
const useUnixFormat = (unix: number): string => {
  return dayjs.unix(unix).format('YYYY/MM/DD HH:mm:ss');
};

export { useUnixFormat };
export default useDateFormat;
