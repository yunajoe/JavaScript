function solution(arr, queries) {
  let answer;
  while (queries.length) {
    const [n1, n2] = queries.shift();
    answer = arr.map((ele, idx) => {
      if (idx === n1 || idx === n2) {
        return (arr[idx] = arr[idx] + 1);
      } else {
        return arr[idx];
      }
    });
  }
  return answer;
}
// test만 통과
