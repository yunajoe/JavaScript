// 1회>>  각 문자를 오른쪽으로 한 칸씩 밀고
// 우선 A가 B로 될 수 있는 경우 vs 없는 경우
// a랑 b랑 같을지 확인할수 있는 횟수는 A.length번
// 즉 a.length번을 초과해도 같아지지 않으면은 -1를 return
function solution(A, B) {
  let answer;
  if (A === B) {
    answer = 0;
  }
  // 같지 않을때는 -1 과 횟수로 나뉜다
  else {
    let cnt = 0;
    while (cnt !== A.length) {
      let last = A.slice(-1);
      A = last + A;
      A = A.slice(0, A.length - 1);
      cnt += 1;
      if (A === B) {
        answer = cnt;
        return answer;
      }
    }
    answer = -1;
  }
  return answer;
}

// sol2)

function solution(A, B) {
  if (A === B) {
    return 0;
  }
  for (let i = 0; i < A.length; i++) {
    A = A.slice(-1) + A.slice(0, -1);
    if (A === B) {
      return i + 1;
    }
  }
  return -1;
}
