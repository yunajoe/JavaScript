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

//sol1)
function solution(myString, pat) {
  let answer = 0;
  for (let i = 0; i < myString.length; i++) {
    let str = myString.slice(i, pat.length + i);
    if (str === pat) answer += 1;
  }
  return answer;
}

// sol2)
function solution(myString, pat) {
  let count = 0;
  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.slice(i, pat.length + i) === pat) {
      count++;
    }
  }
  return count;
}

function solution(myString, pat) {
  let answer = 0;
  let idx = myString.indexOf(pat);
  while (idx !== -1) {
    myString.indexOf(pat, idx + 1);
    // idx = myString.indexOf(pat, idx + pat.length-1) 이게 안되는 이유는 pat이라는 글자가 만약 한글자라면은('a')
    // "aaaa" "a" 라고 했을때 처음에 idx는 0이고, while 문 안에서는 또 0이 된다.. 왜냐면 ("a", 0 + 1 -1 )  >> 이렇게 된다
    answer++;
  }
  return answer;
}

//sol3)
function solution(myString, pat) {
  let answer = 0;
  let idx = myString.indexOf(pat);
  while (idx !== -1) {
    idx = myString.indexOf(pat, idx + 1);
    answer += 1;
  }
  return answer;
}

//sol4)
function solution(myString, pat) {
  return [...myString].reduce((cnt, letter, idx) => {
    return myString.substr(idx, pat.length) === pat ? cnt + 1 : cnt;
  }, 0);
}
