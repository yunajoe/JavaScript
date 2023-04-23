function solution(numbers, n) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
    if (sum > n) return sum;
  }
}

// sol2
function solution(numbers, n) {
  let sum = 0;
  while (sum <= n) {
    sum += numbers.shift();
  }
  return sum;
}
