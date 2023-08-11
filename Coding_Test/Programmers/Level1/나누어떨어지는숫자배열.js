function solution(arr, divisor) {
  if (divisor === 1) {
    return arr.sort((a, b) => a - b);
  }
  let resultArr = arr.filter((num) => num % divisor === 0);
  return resultArr.length === 0 ? [-1] : resultArr.sort((a, b) => a - b);
}
