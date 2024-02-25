/*
flag[i]가 true일때 해당하는 arr[i]의 값(ex 3).. 을 3x2 = 6번 arr에 push 해 준다 
flag[i] false일 일땐는 arr 마지막 값 삭제!  
*/

function addPush(arr, n) {
  for (let i = 0; i < n * 2; i++) {
    arr.push(n);
  }
  return arr;
}

function solution(arr, flag) {
  let answer = [];
  arr.map((ele, idx) => {
    if (flag[idx]) {
      addPush(answer, arr[idx]);
    } else {
      answer.splice(-arr[idx], arr[idx]);
    }
  });
  return answer;
}

//sol2)  reduce로 만들어보기
