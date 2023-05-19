// [a,b,idx] => arr 배열에서 a부터 b까지의 범위를 가지는 새로운 배열을 arr를 return
// 새로운 arr에서 idx보다 크면서 가장 작은 값 구하기. 값이 없으면 1를 return
function solution(arr, queries) {
  let newArr = [];
  for (let i = 0; i < queries.length; i++) {
    const [start, end, idx] = queries[i];
    newArr.push(arr.slice(start, end + 1).filter((ele) => ele > idx));
  }
  return newArr.map((arr) => (arr.length ? Math.min(...arr) : -1));
}
