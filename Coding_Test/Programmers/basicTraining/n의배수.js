function solution(num, n) {
  return num % n === 0 ? 1 : 0;
}

function solution(num, n) {
  // 삼항연산자에서 ? 바로 다음은 true값 : 다음은 false값
  // 나눴을때 나머지가 0이면은 0은 false이기 때문에 ":" 옆에 해당 return값 넣어주기
  // 나머지가 0이 아닌 값은 true이기 때문에 "?" 옆에 해당 return값 넣어주기
  return num % n ? 0 : 1;
}
