//sol1)
function solution(arr) {
  let firstIndex = arr.indexOf(2);
  let lastIndex = arr.lastIndexOf(2);
  return firstIndex === -1 || lastIndex === -1
    ? [-1]
    : arr.slice(firstIndex, lastIndex + 1);
}

// sol2)
function solution(arr) {
  let indexArray = [];
  if (arr.filter((x) => x === 2).length === 0) return [-1];
  arr.forEach((x, i) => {
    if (x === 2) {
      indexArray.push(i);
    }
  });

  return indexArray[1]
    ? arr.slice(indexArray[0], indexArray[indexArray.length - 1] + 1)
    : arr.slice(indexArray[0], indexArray[0] + 1);
}
