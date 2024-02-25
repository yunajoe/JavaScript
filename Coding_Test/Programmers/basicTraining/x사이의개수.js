function solution(myString) {
  var answer = [];
  return myString.split("x").map((ele) => ele.length);
}

// sol2)
function solution(myString) {
  let answer = [];
  myString.split("x").map((str) => answer.push(str.length));
  return answer;
}
