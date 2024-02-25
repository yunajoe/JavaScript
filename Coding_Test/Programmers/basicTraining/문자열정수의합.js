// string을 => array바꾸기
// 문자열안에 문자들을 숫자 type으로 바꾼 후 더하기

function solution(num_str) {
  const arr = [...num_str];
  return arr.reduce((acc, num) => (acc += Number(num)), 0);
}

// 화살표 함수 사용
// 화살표 함수의 경우, 함수 바디 내부의 문장이 한 줄인 경우, 중괄호({})와 return 키워드를 생략할 수 있다
const solution = (num_str) =>
  [...num_str].reduce((acc, curr) => acc + Number(curr), 0);
