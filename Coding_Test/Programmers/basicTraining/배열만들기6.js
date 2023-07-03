// str이 빈배열일때는 arr[idx]를 추가
// stk가 빈배열이 아닐때 2가지 경우로 나뉜다
// 1)
// stk의 마지막 원소가 arr[idx]와 같을때
// >> strk의 마지막 원소를 제거
// 2)
// stk의 마지막 원소가 arr[idx]와 다를떄
// >> stk의 맨 마지막에 arr[idx]를 추가
function solution(arr) {
  let idx = 0;
  let stk = [];
  // 만약에 arr.length -1라고 해버리면은
  // idx가 4일때 (즉, 마지막원소를처리를 하지 못함)
  while (idx !== arr.length) {
    // 빈배열일떄
    if (idx === 0) {
      stk.push(arr[idx]);
    } else {
      if (arr[idx] === stk[stk.length - 1]) {
        stk.pop();
      } else if (arr[idx] !== stk[stk.length - 1]) {
        stk.push(arr[idx]);
      }
    }
    idx += 1;
  }
  return stk.length ? stk : [-1];
}

// sol2)
function solution(arr) {
  let stk = [];
  arr.forEach((ele, idx) => {
    if (stk[stk.length - 1] !== ele) {
      stk.push(ele);
    } else {
      // 마지막 원소 제거
      stk.splice(-1);
    }
  });
  if (stk.length === 0) {
    return [-1];
  }
  return stk;
}

// sol3)
function solution(arr) {
  let stk = [];
  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0 || stk[stk.length - 1] !== arr[i]) {
      stk.push(arr[i]);
    } else if (stk[stk.length - 1] === arr[i]) {
      stk.splice(-1);
    }
  }
  return stk.length === 0 ? [-1] : stk;
}
