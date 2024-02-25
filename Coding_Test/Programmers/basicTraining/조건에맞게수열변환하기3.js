function solution(arr, k) {
  if (k % 2 !== 0) {
    return arr.map((num) => num * k);
  } else {
    return arr.map((num) => num + k);
  }
}
// if문으로 k의 홀짝 여부를 확인하지 않고, map method로 컬백함수를 실행
function solution(arr, k) {
  return arr.map((num) => (k % 2 ? num * k : num + k));
}

const solution = (arr, k) => arr.map((v) => (k % 2 ? v * k : v + k));
