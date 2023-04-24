const solution = (a, b) => {
  // a, b 숫자 모두가 홀수라면은
  if (a % 2 === 1 && b % 2 === 1) {
    return a ** 2 + b ** 2;
    // a, b중 하나만 홀수라면
  } else if (a % 2 === 1 || b % 2 === 1) {
    return 2 * (a + b);
    // a, b모두 짝수라면은
  } else if (a % 2 !== 1 && b % 2 !== 1) {
    return Math.abs(a - b);
  }
};

// sol2
// 화살표함수이용
const solution2 = (a, b) =>
  a % 2 === 1 && b % 2 === 1
    ? a ** 2 + b ** 2
    : a % 2 !== 1 || b % 2 !== 1
    ? 2 * (a + b)
    : Math.abs(a - b);
