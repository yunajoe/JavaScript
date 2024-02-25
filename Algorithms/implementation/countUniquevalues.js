// sol1)
function countUniqueValues(arr) {
  let uniqueValues = 0;
  let firstIdx = 0;
  let secondIdx = firstIdx + 1;
  if (arr.length === 0) {
    return uniqueValues;
  }
  while (secondIdx <= arr.length - 1) {
    if (arr[firstIdx] !== arr[secondIdx]) {
      uniqueValues++;
    }
    firstIdx++;
    secondIdx++;
  }
  return uniqueValues + 1;
}

// sol2)
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      // i++를 하는 이유는 원소가 서로 다를떄 cnt++ 하는 개념이라 생각하면 된다
      i++;
      arr[i] = arr[j];
    }
  }
  // i+1를 하는 이유는 첫번째value는 위에서 if문 조건문안에서 count를 세지 않기때문에 (다른 value가 나와야 count되서) i+1를 해준것
  return i + 1;
}

// sol3)
function countUniqueValues(arr) {
  // i인덱스를 0, for 문을 돌려서 j인덱스는 1부터 시작해서 arr.length-1까지 간다
  // i과 j의 인덱스의 array값이 같으면은, j++만 해준다. (왜냐하면은 i 랑 j++값이 또 같을수 있으니까 확인하기 위해서이다.)
  // 값이 다를때는 현재 j 인덱스를 i인데스에 대입..
  if (arr.length === 0) return 0;
  let i = 0;
  let cnt = 1;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i = j;
      cnt++;
    }
  }
  return cnt;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 3, 5]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
