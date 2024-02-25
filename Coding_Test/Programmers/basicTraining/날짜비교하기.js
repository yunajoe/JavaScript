// date1 보다 date2앞서면은 1 그 외에는 0
// 앞선다는 것은 과거
// 즉 부등호가 작다!( < )

//sol1) 비교 연산자(>, >=, <, <=)로 날짜/시간 비교
function solution(date1, date2) {
  const convertedDate1 = new Date(date1);
  const convertedDate2 = new Date(date2);
  return convertedDate1 < convertedDate2 ? 1 : 0;
}

// sol2) Date.getTime()으로 날짜/시간 비교
// Date.getTime()는 UTC 시간을 millisecond로 리턴
function solution(date1, date2) {
  const convertedDate1 = new Date(date1);
  const convertedDate2 = new Date(date2);
  return convertedDate1.getTime() < convertedDate2.getTime() ? 1 : 0;
}

// sol3)
const solution = (date1, date2) => (new Date(date1) < new Date(date2) ? 1 : 0);

// sol4)
function solution(date1, date2) {
  return date1.join("") - date2.join("") < 0 ? 1 : 0;
}

// sol5)

function solution(date1, date2) {
  return new Date(...date1) < new Date(...date2) ? 1 : 0;
}
