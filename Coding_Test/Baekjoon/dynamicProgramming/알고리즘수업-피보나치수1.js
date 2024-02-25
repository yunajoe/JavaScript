const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let recursiveCnt = 0;
let fiboCnt = 0;

// 재귀로 피보나치구하기
function recursive(n) {
  if (n === 1 || n === 2) {
    recursiveCnt++;
    return 1;
  }

  recursive(n - 1) + recursive(n - 2);
  return recursiveCnt;
}

// DP로 피보나치수 구하기
function fibo(n) {
  let arr = [];
  arr[0] = 1;
  arr[1] = 1;
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
    fiboCnt++;
  }
  return fiboCnt;
}

function solution(n) {
  let value1 = recursive(n);
  let value2 = fibo(n);
  return [value1, value2].join(" ");
}

console.log(solution(+input));
