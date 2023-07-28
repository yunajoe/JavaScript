// n이 소수일수도있고 아닐수도 있다.
// 소수인 경우는 그 수를 return을 하고
// 소수가 아닌 경우는 그 수의 소
// 인수(약수) 중에서 소수인것  >> 소인수
const IsPrimeNumber = (n) => {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

function solution(n) {
  var answer = [];
  if (IsPrimeNumber(n)) {
    return [n];
  } else {
    for (let i = 1; i <= n / 2; i++) {
      if (n % i === 0) {
        // 인수들 (약수)
        if (IsPrimeNumber(i)) {
          answer.push(i);
        }
      }
    }
  }
  return answer;
}
