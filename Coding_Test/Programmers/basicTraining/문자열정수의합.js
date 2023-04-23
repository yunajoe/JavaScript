// string을 => array바꾸기
// 문자열안에 문자들을 숫자 type으로 바꾼 후 더하기

function solution(num_str) {
  const arr = [...num_str];
  return arr.reduce((acc, num) => (acc += Number(num)), 0);
}
