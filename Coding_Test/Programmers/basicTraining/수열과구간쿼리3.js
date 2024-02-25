function solution(arr, queries) {
  while (queries.length) {
    const [n, m] = queries.shift();
    [arr[n], arr[m]] = [arr[m], arr[n]];
  }
  return arr;
}

function solution(arr, queries) {
  queries.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  });
  return arr;
}
