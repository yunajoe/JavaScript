// n이 홀수 >> n이하 홀수 모든 양의 정수의 합
// n이 짤수 >> n이하 짝수인 모든 양의 정수의 제곱의 합
function solution(n) {
  let answer = 0;
  // 홀수
  if (n % 2 !== 0) {
    for (let i = 1; i <= n; i++) {
      i % 2 !== 0 ? (answer += i) : 0;
    }
  } else {
    // 짝수
    for (let i = 1; i <= n; i++) {
      i % 2 === 0 ? (answer += i ** 2) : 0;
    }
  }
  return answer;
}

// sol2
function solution(n) {
  const arr = Array(n)
    .fill()
    .map((num, idx) => idx + 1);
  return n % 2 !== 0
    ? arr.reduce((acc, num) => (num % 2 !== 0 ? (acc += num) : acc), 0)
    : arr.reduce((acc, num) => (num % 2 === 0 ? (acc += num ** 2) : acc), 0);
}
