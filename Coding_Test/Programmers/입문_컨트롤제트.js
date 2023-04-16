// s를 array로 만든다
// arr안에 elemenet를 순회하면서, 숫자인경우 현재값을 더하고 Z가 나오는 경우는 현재값 이전의 수를 뺀다
function solution(s) {
  let answer = 0;
  var result = s.split(" ").map((ele) => {
    if (ele !== "Z") {
      return parseInt(ele);
    } else {
      return ele;
    }
  });
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== "Z") {
      answer += result[i];
    } else {
      answer -= result[i - 1];
    }
  }

  return answer;
}
