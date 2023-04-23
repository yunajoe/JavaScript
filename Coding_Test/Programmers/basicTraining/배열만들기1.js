function solution(n, k) {
  let answer = [];
  for (let num = 1; num <= n; num++) {
    if (num % k === 0) {
      answer.push(num);
    }
  }
  return answer;
}
