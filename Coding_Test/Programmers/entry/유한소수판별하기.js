//우선 a/b를 기약분수로 만들어야 한다
// a,b의 최대공약수로 나누면은 기약분수가 된다
let getMaxNum = (a, b) => {
  let Num = a >= b ? a : b;
  let MaxNum = 0;
  for (let i = 1; i <= Num; i++) {
    if (a % i === 0 && b % i === 0) {
      if (MaxNum <= i) {
        MaxNum = i;
        //  console.log(MaxNum)
      }
    }
  }
  return MaxNum;
};

function isPrime(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    // 나머지가 0이되면 primeNumber가 아니다
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}
function solution(a, b) {
  let gcd = getMaxNum(a, b);
  let denominator = b / gcd;
  let Newdenominator = isPrime(denominator);

  let finalArr = isPrime(denominator).filter((ele) => {
    return isPrime(ele).length === 2;
  });
  // 배열이 2와 5이외에 다른 원소가 있는지 확인?
  // true면은 2, 5 원소이외에 다른 값이 있는지확인, true면은 있는거고 없으면 2또는 5만 있는거다
  return finalArr.some((ele) => ele !== 2 && ele !== 5) ? 2 : 1;
}
