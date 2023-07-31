// 기약분수 >> 더 이상 약분할 수 없는 분수  &&  분자와 분모의 최대 공약수 1
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
