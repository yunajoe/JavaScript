//  "if"문의 조건이 모두 충족되지 않은 경우 "undefined"를 반환
function solution(arr) {
  return arr.map((ele) => {
    if (ele >= 50 && ele % 2 === 0) {
      return ele / 2;
    } else if (ele < 50 && ele % 2 !== 0) {
      return ele * 2;
    }
  });
}

// fix하기
function solution(arr) {
  return arr.map((ele) => {
    if (ele >= 50 && ele % 2 === 0) {
      return ele / 2;
    } else if (ele < 50 && ele % 2 !== 0) {
      return ele * 2;
    } else {
      return ele;
    }
  });
}

// sol2
const solution = (arr) =>
  arr.map((num) =>
    num >= 50 && num % 2 === 0
      ? num / 2
      : num < 50 && num % 2 === 1
      ? num * 2
      : num
  );
