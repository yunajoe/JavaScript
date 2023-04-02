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
