function solution(quiz) {
  var answer = [];
  for (let q of quiz) {
    let arr = q.split(" ");
    const [num1, signs, num2, equals, result] = arr;
    if (signs === "-") {
      answer.push(Number(num1) - Number(num2) === Number(result) ? "O" : "X");
    } else {
      answer.push(Number(num1) + Number(num2) === Number(result) ? "O" : "X");
    }
  }
  return answer;
}
