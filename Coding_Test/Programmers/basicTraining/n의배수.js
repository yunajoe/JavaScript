function solution(num, n) {
  // num에서 n을 나누었을때 0이면은 (false일때 값이면은) >> 1
  // 0이 아닐때 (true일때) >> 0
  return num % n ? 0 : 1;
}
