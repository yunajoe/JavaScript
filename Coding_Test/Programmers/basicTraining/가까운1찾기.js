function solution(arr, idx) {
  // idx를 포함한 이후에 배열에 1이 있으면은 findIndex를 하여 1의 index+ arr.slice(0,idx).length 없으면은 -1
  return arr.slice(idx).findIndex((num) => num === 1) !== -1
    ? arr.slice(idx).findIndex((num) => num === 1) + arr.slice(0, idx).length
    : -1;
}

// sol2
// arr.indexOf(1, fromIndex)
const solution = (arr, idx) => arr.indexOf(1, idx);

// sol3
function solution(arr, idx) {
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) return i;
  }
  return -1;
}
