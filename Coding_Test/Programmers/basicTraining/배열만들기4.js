// // 크게 2가지로 나눈다
// skt가 빈 배열
// // stk가 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1를 더한다
// skt가 빈 배열이 아닐 때
// // 1) skt의 마지막 원소가 arr[i] 보다 작으면 arr[i]를 stk의 뒤에 추가하고 i에 1를 더한다
// // 2) skt의 마지막 원소가 arr[i] 보다 크거나 같으면 stk의 마지막 원소를 skt에서 제거
// // 즉  skt의 마지막 원소 arr[i] q보다 작으면 arr[i]를 추가하고 arr.shift()
// // skt의 마지막 원소가 arr[i]보다 크거나 강트면은 skt.pop()

function solution(arr) {
  let stk = [];
  let idx = 0;
  while (arr.length) {
    if (!stk.length) {
      stk.push(arr[idx]);
      arr.shift();
    } else {
      if (stk[stk.length - 1] < arr[idx]) {
        stk.push(arr[idx]);
        arr.shift();
      } else {
        stk.pop();
      }
    }
  }
  return stk;
}

// sol2)
function solution(arr) {
  let stk = [];
  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0) {
      stk.push(arr[i]);
    } else {
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
      } else {
        stk.pop();
        i--;
      }
    }
  }
  return stk;
}
