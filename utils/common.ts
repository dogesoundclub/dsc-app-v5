export const calendar = () => {
  const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const dayArr = [];

  if (date < 4) {
    if (month === 0) {
      dayArr.push(new Date(year - 1, 11, 29).getTime());
      dayArr.push(new Date(year - 1, 11, 30).getTime());
      dayArr.push(new Date(year - 1, 11, 31).getTime());
    } else {
      dayArr.push(new Date(year, month - 1, nDays[month - 1] - 3).getTime());
      dayArr.push(new Date(year, month - 1, nDays[month - 1] - 2).getTime());
      dayArr.push(new Date(year, month - 1, nDays[month - 1] - 1).getTime());
    }
    for (let i = 0; i < nDays[month] + (nDays[month + 1] ?? 31); i++) {
      dayArr.push(new Date(year, month, date + i).getTime());
    }
  } else {
    dayArr.push(new Date(year, month, date - 3).getTime());
    dayArr.push(new Date(year, month, date - 2).getTime());
    dayArr.push(new Date(year, month, date - 1).getTime());
    for (let i = 0; i < nDays[month] + (nDays[month + 1] ?? 31); i++) {
      dayArr.push(new Date(year, month, date + i).getTime());
    }
  }
  //   console.log(dayArr);
  return dayArr;
};

export function dateToText(d: string | number | undefined) {
  const date = new Date(Number(d));

  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  return (
    date.getFullYear() +
    "년 " +
    month +
    "월 " +
    day +
    "일 " +
    hours +
    "시 " +
    minutes +
    "분"
  );
}
