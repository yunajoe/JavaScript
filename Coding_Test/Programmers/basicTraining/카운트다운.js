function solution(start, end) {
  return Array.from({ length: start - end + 1 }, (_, i) => start - i);
}

// sol2
function solution(start, end) {
  let result = [];
  for (let i = start; i >= end; i--) {
    result.push(i);
  }
  return result;
}
