function solution(num_list, n) {
  let cnt = 0;
  let outer = [];
  let inner = [];
  while (cnt !== n && num_list.length !== 0) {
    let ele = num_list.shift();
    inner.push(ele);
    if (inner.length == n) {
      let inner2 = inner.slice();
      outer.push(inner2);
      inner.length = 0;
      cnt = 0;
    } else {
      cnt += 1;
    }
  }
  return outer;
}
// 다른 사람풀이
function solution(num_list, n) {
  let outer = [];
  for (let i = 0; i < num_list.length; ) {
    let inner = [];
    for (let j = 0; j < n; j++) {
      inner.push(num_list[i]);
      // 뽀인트! 여기서 i가 1씩 증가
      i++;
    }
    outer.push(inner);
  }
  return outer;
}
