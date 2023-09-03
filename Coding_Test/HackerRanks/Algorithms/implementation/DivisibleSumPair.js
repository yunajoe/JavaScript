function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let cnt = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      let val = ar[i] + ar[j];
      if (val % k === 0) {
        cnt++;
      }
    }
  }
  return cnt;
}
