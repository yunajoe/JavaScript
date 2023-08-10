function getMulti(num) {
  let total = 1;
  for (let i = num; i >= 1; i--) {
    total *= i;
  }
  return total;
}

function solution(balls, share) {
  var answer = 0;
  let res = balls - share;
  let numerator = getMulti(balls);
  let denumerator = getMulti(res) * getMulti(share);
  return Math.floor(numerator / denumerator);
}

// 합계: 94.3 / 100.0

// sol2)
// Math.round로 했더니 통과!
function getMulti(num) {
  let total = 1;
  for (let i = num; i >= 1; i--) {
    total *= i;
  }
  return total;
}

function solution(balls, share) {
  var answer = 0;
  let res = balls - share;
  let numerator = getMulti(balls);
  let denumerator = getMulti(res) * getMulti(share);
  return Math.round(numerator / denumerator);
}
