// 배열의 길이가 홀수 일때
// 배열의 짝수 인덱스에 해당하는 수에 n를 더함
// 배열위 길이가 짝수 일때
// 배열의 홀수 인덱스에 해당하는 수에 n을 더함
function solution(arr, n) {
  return arr.length % 2 !== 0
    ? arr.map((num, idx) => {
        return idx % 2 === 0 ? num + n : num;
      })
    : arr.map((num, idx) => {
        return idx % 2 !== 0 ? num + n : num;
      });
}

//sol2)
const solution = (arr, n) => {
  return arr.map((num, idx) => (arr.length % 2 !== idx % 2 ? num + n : num));
};
