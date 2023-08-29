function birthday(s, d, m) {
  // Write your code here
  let answer = 0;
  const arrSum = (arr) => {
    return arr.reduce((acc, val) => {
      acc += val;
      return acc;
    }, 0);
  };
  for (let i = 0; i <= s.length - m; i++) {
    let subArr = s.slice(i, i + m);
    if (arrSum(subArr) === d) {
      answer++;
    }
  }
  return answer;
}
