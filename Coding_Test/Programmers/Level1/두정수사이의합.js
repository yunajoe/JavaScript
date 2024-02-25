function plusSum(bigNum, smallNum) {
  let sum = 0;
  for (let i = smallNum; i <= bigNum; i++) {
    sum += i;
  }
  return sum;
}
function solution(a, b) {
  if (a === b) {
    return a;
  }
  return a > b ? plusSum(a, b) : plusSum(b, a);
}

// sol2)
function solution(a, b, s = 0) {
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    s += i;
  }
  return s;
}
