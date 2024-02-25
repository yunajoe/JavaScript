function solution(arr, queries) {
  let answer;
  while (queries.length) {
    const [n1, n2] = queries.shift();
    answer = arr.map((ele, idx) => {
      if (idx === n1 || idx === n2) {
        return (arr[idx] = arr[idx] + 1);
      } else {
        return arr[idx];
      }
    });
  }
  return answer;
}
// test만 통과

// 시도1
function solution(arr, queries) {
  return queries.map((ele) => {
    const [start, end] = ele;
    return arr.map((num, idx) =>
      idx === start || idx === end ? num + 1 : num
    );
  });
}

let arr = [0, 1, 2, 3, 4];
let queries = [
  [0, 1],
  [1, 2],
  [2, 3],
];

console.log(solution(arr, queries));
// 	실행한 결괏값 [[1,2,2,3,4],[0,2,3,3,4],[0,1,3,4,4]]이 기댓값 [1,3,4,4,4]과 다릅니다.

function solution2(arr, queries) {
  return queries.reduce((ele) => {
    const [start, end] = ele;
    return arr.map((num, idx) =>
      idx === start || idx === end ? num + 1 : num
    );
  });
}
// [0, 1, 2, 3, 4]
// queries의 마지막 array인 [2,3] 를 인덱스로 삼아 +1씩 한 값
// [0, 1, 3, 3, 4]
function solution(arr, queries) {
  return queries.reduce((acc, ele) => {
    const [start, end] = ele;
    return arr.map((num, idx) =>
      idx === start || idx === end ? num + 1 : num
    );
  }, 0);
}

// sol1010
function solution(arr, queries) {
  return arr.reduce((acc, ele, idx, arrCopy) => {
    return queries.map((index) => {
      const [start, end] = index;
      return idx === start ? arrCopy[idx] + 1 : arrCopy;
    });
  }, arr);
}
