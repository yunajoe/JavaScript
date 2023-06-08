function solution(myString, pat) {
  let answer = 0;
  for (let i = 0; i <= pat.length; i++) {
    let str = myString.slice(i, pat.length + i);
    if (str === pat) {
      answer += 1;
    }
  }
  return answer;
}

// 정확성: 23.1
// 합계: 23.1 / 100.0
