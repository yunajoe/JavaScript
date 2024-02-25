// 2가지의 케이스로 나누면은 된다
// 1. [1,2]에서 MaxNum이 최대길이인경우
// 나머지 한변을 구하려면?(n)
// n<=MaxNum && (나머지 변 + n) > MaxNum
// 2. array에 없는 변의 길이가 최대인 경우
// MaxNum < n < array 합
function solution(sides) {
  var answer = 0;
  let MaxLength = Math.max(...sides);
  let resLength = sides.indexOf(MaxLength) === 1 ? sides[0] : sides[1];
  // case 1 MaxLength가 최대길이인경우
  let cnt1 = [];
  let cnt2 = [];
  for (let i = 1; i <= MaxLength; i++) {
    if (i + resLength > MaxLength) {
      cnt1.push(i);
    }
  }
  // 2. array에 없는 변의 길이가 최대인 경우
  let sum = sides.reduce((acc, val) => {
    acc += val;
    return acc;
  }, 0);

  for (let j = MaxLength; j < sum; j++) {
    cnt2.push(j);
  }
  return [...new Set(cnt1.concat(cnt2))].length;
}
