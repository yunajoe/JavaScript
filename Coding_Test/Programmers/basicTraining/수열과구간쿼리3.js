function solution(arr, queries) {
  while (queries.length) {
    const [n, m] = queries.shift();
    [arr[n], arr[m]] = [arr[m], arr[n]];
  }
  return arr;
}
