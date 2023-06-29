// 열의길이 >>  arr[0].length
// 행의길이 >>  arr.length
/* 
열의 길이와 행의길이가 같다면은 return arr 
열의 길이 > 행의 길이 ... 행의길이 == 열의 길이 일 때까지 0 을 push 
열의 길이 < 행의 길이 ... 행의길이 == 열의 길이 일 떄까지 열에다가 0을 push 
*/
function solution(arr) {
  let answer;
  let rowLength = arr.length;
  let columnLength = arr[0].length;
  let diff = Math.abs(rowLength - columnLength);
  if (rowLength === columnLength) return arr;
  else if (rowLength > columnLength) {
    let cnt = 0;
    while (cnt !== diff) {
      answer = arr.map((ele) => {
        ele.push(0);
        return ele;
      });
      cnt++;
    }
    return answer;
  } else if (rowLength < columnLength) {
    let cnt = 0;
    const zeroArr = Array.from({ length: columnLength }).fill(0);
    while (cnt !== diff) {
      arr.push(zeroArr);
      cnt++;
    }
    return arr;
  }
}

// sol2)
function solution(arr) {
  const { row, col } = { row: arr.length, col: arr[0].length };
  if (row === col) {
    return arr;
  } else if (row > col) {
    return arr.map((ele) => [...ele, ...new Array(row - col).fill(0)]);
  } else if (row < col) {
    //  new Array(col).fill(0) // [ 0, 0, 0, 0 ]
    return [...arr, ...new Array(col - row)].map((ele) => console.log(ele));
  }
}
