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

// sol2
// switch문으로 사용하기
function solution(numLog) {
  let answer = [];
  let answerStr = "";
  for (let i = numLog.length - 1; i > 0; i--) {
    let result = numLog[i] - numLog[i - 1];
    answer.push(result);
  }
  answer.reverse();
  answer.map((ele) => {
    const num = ele;
    switch (num) {
      case 1:
        answerStr += "w";
        break;
      case -1:
        answerStr += "s";
        break;
      case 10:
        answerStr += "d";
        break;
      case -10:
        answerStr += "a";
        break;
    }
  });
  return answerStr;
}

// objec으로 사용하기
function solution(numLog) {
  var answer = "";
  const order = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
  };

  for (let i = 1; i < numLog.length; i++) {
    const prev = numLog[i - 1];
    const curr = numLog[i];

    for (let [key, value] of Object.entries(order)) {
      const res = prev + value;

      if (res === curr) {
        answer += key;
        break;
      }
    }
  }
}

// sol3)
function solution(numLog) {
  let answer = "";
  const obj = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
  };
  for (let i = 1; i < numLog.length; i++) {
    const prev = numLog[i - 1]; // 0 ~ 10
    const curr = numLog[i]; // 1 ~ 11
    for (let [key, value] of Object.entries(obj)) {
      if (prev + value === curr) {
        answer += key;
      }
    }
  }
  return answer;
}
