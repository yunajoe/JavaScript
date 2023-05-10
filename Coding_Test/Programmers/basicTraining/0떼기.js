// 가장 왼쪽에 있는 "0"이 기준이다
// "0"으로 시작이 되면은 .. "0" 이아닌 문자열이 나올떄까지
// "0"으로 시작이 안되면은 바로 return n_str
function solution(n_str) {
  let strCopy = [...n_str];
  let strZero = strCopy[0];
  if (strZero !== "0") {
    return n_str;
  } else {
    while (strZero === "0") {
      strZero = strCopy.shift();
      // 아래 조건이 없으면은 [0,0,1,0] >> 일때
      // 두번째 0을 shift하여 while조건문 통과 1또한 shift()해버리기 떄문에 break가 안 됨
      if (strCopy[0] !== "0") break;
    }
    return strCopy.join("");
  }
}

// sol2
const solution = (str) => String(Number(str));

// sol3
function solution(n_str) {
  let result = "";
  let arr = n_str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] !== "0") {
      result = n_str;
      break;
    } else {
      result = Number(n_str).toString();
    }
  }
  return result;
}
