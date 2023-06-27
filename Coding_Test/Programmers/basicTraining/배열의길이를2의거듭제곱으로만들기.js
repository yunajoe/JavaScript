function solution(arr) {
  let arrLength = arr.length;
  let diffArr = [];
  for (let i = 0; i <= 10; i++) {
    if (arrLength === 2 ** i) {
      return arr;
    }
    diffArr.push(Math.abs(arrLength - 2 ** i));
  }
  let num = Math.min(...diffArr);
  while (num !== 0) {
    arr.push(0);
    num--;
  }
  return arr;
}
// 합계: 72.7 / 100.0
