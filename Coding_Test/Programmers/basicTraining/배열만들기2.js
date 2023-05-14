// l과 r의 범위에 해당되는 5의배수에서
// 5, 10, 15.. 이렇게 나오면은 [1,0].. 이렇게 두고
// [1,0] 에서 5와 0 이외의 배열을 out
function OnlyFiveZero(value) {
  return value === 5 || value === 0;
}
function solution(l, r) {
  let arrs = [];
  for (let i = l; i <= r; i += 5) {
    let arrSplit = String(i)
      .split("")
      .map((ele) => Number(ele)); // [ 5, 0, 0 ]
    arrs.push(arrSplit);
  }
  // 각각의 array들의 원소가 5 또는 0 으로만 이루어져 있으면은 true  & 아니면은 false
  let trueFalseArr = arrs.map((arr) => arr.every(OnlyFiveZero));
  // 위에서 true값에 해당하는 array의 index를 반환. 없으면은 []
  const trueFalseIndexArr = trueFalseArr
    .map((ele, idx) => {
      if (ele === true) return idx;
    })
    .filter((ele) => ele !== undefined); // [0,9,10,99,100,109,110], []
  // arrs가 true값에 해당의 하는 array들을 원본을 가지고 있으니 여기서 해당 인덱스에 해당하는 배열을 ㄱeturn
  return trueFalseIndexArr.length !== 0
    ? trueFalseIndexArr.map((idx) => Number(arrs[idx].join("")))
    : [-1];
}

// 정확성: 45.5;
// 합계: 45.5 / 100.0;
