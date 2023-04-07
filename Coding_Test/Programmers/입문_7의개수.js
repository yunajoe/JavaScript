let myFunc = (num) => Number(num);
function solution(array) {
  let answer = 0;
  array.forEach((number) => {
    let numArr = Array.from(String(number), myFunc);
    for (num of numArr) {
      if (num === 7) {
        answer += 1;
      }
    }
  });
  return answer;
}

// 다른풀이
function solution(array) {
  var answer = 0;
  return array
    .join("")
    .split("")
    .filter((num) => {
      return num === "7";
    }).length;
}
