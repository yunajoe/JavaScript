// let arr => [0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]  (12)
// result => "wsdawsdassw".length  (11)
/*   
 +1 -1 +10 -10 +1 -1 +10 -10 -1 -1 +1 
  w s   d   a   w  s   d   a s   s  w 
*/
// 배열 거꾸로..for문으로 돌며
function solution(numLog) {
  let answer = [];
  for (let i = numLog.length - 1; i > 0; i--) {
    let result = numLog[i] - numLog[i - 1];
    answer.push(result);
  }
  answer.reverse();
  let strArr = "";
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === 1) {
      strArr += "w";
    } else if (answer[i] === -1) {
      strArr += "s";
    } else if (answer[i] === 10) {
      strArr += "d";
    } else {
      strArr += "a";
    }
  }
  return strArr;
}
