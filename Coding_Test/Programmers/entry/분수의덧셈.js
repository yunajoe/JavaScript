// first-trial
function printCommonEle(arr1, arr2) {
  const result =
    arr1.length >= arr2.length
      ? arr1.filter((ele) => arr2[ele])
      : arr2.filter((ele) => arr1[ele]);
  return Math.max(...result);
}

const printDivision = (value) => {
  let result = [];
  for (let i = 1; i <= value; i++) {
    if (value % i === 0) {
      result.push(i);
    }
  }
  return result;
};

function solution(numer1, denom1, numer2, denom2) {
  Newnumer1 = numer1 * denom2; // 4
  //   Newdenom1 = denom1 * denom2   // 8
  Newnumer2 = numer2 * denom1; // 6
  //  Newdenom2 = denom2 * denom1  // 8
  let numer3 = Newnumer1 + Newnumer2; // 10, 29
  let denom3 = denom2 * denom1; //
  let finalnumer = printDivision(numer3);
  let finaldenom = printDivision(denom3);
  let maxNum = printCommonEle(finalnumer, finaldenom);
  return [numer3 / maxNum, denom3 / maxNum];
}

// 합계: 6.7 / 100.0

// 2nd trial
const commonFactor = (num) => {
  let result = [];
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  result.push(num);
  return result;
};
function solution(numer1, denom1, numer2, denom2) {
  let copyDenom1 = denom1;
  let copyDenom2 = denom2;
  let result = [];
  let arr1 = commonFactor(denom1);
  let arr2 = commonFactor(denom2);
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  // result.length === 0이라는 것은 두개수가 공통인게 없다는 것
  if (result.length === 0) {
    return [numer1 * denom2 + numer2 * denom1, denom1 * denom2];
  }
  result.sort((a, b) => a - b);
  let numsArr = [];
  while (result.length !== 0) {
    let value = result.pop();
    while (denom1 % value === 0 && denom2 % value === 0) {
      if (denom1 % value === 0 && denom2 % value == 0) {
        numsArr.push(value);
        denom1 = denom1 / value;
        denom2 = denom2 / value;
      } else {
        value = result.pop();
      }
    }
  }
  let division = numsArr.reduce((acc, val) => {
    acc *= val;
    return acc;
  }, 1);
  //   return division * (denom1 / division) * (denom2 / division)
  let denom = division * denom1 * denom2;

  return [(denom / copyDenom1) * numer1 + (denom / copyDenom2) * numer2, denom];
}

// 합계: 20.0 / 100.0;
