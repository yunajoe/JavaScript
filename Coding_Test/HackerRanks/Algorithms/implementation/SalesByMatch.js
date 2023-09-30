// 아래코드는 runTimeEror
function sockMerchant(ar) {
  ar.sort((a, b) => a - b);
  let start = 0;
  let next = 1;
  let cnt = 0;
  while (start < ar.length - 1) {
    if (ar[start] === ar[next]) {
      start = ++next;
      next++;
      cnt++;
    } else if (ar[start] !== ar[next]) {
      let tempNext = next;
      start = tempNext;
      next++;
    }
  }
  return cnt;
}

// set으로 만들기
function sockMerchant(n, ar) {
  let cnt = 0;
  let set = new Set();
  for (let value of ar) {
    if (!set.has(value)) {
      set.add(value);
    } else {
      cnt++;
      set.delete(value);
    }
  }
  return cnt;
}
