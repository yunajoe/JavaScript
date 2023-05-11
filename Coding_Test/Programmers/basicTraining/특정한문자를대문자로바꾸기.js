// my_string에  alp 문자를 대문자로 바꾸기
// for문이나 map으로 원소를 돌리면서 alp이면은 대문자로 바꾸기
function solution(my_string, alp) {
  return [...my_string]
    .map((ele, idx) => {
      return ele === alp ? ele.toUpperCase() : ele;
    })
    .join("");
}

// sol2)
function solution(my_string, alp) {
  let re = new RegExp(alp, "g"); // >> /p/g
  return my_string.replace(re, alp.toUpperCase());
}

// sol3)
function solution(my_string, alp) {
  let answer = "";
  let stringCopy = [...my_string];
  for (let i = 0; i < stringCopy.length; i++) {
    if (stringCopy[i] === alp) {
      answer += stringCopy[i].toUpperCase();
    } else {
      answer += stringCopy[i];
    }
  }
  return answer;
}
// sol4)
const solution = (s, a) => s.replaceAll(a, a.toUpperCase());

// sol5)
function solution(my_string, alp) {
  if (!my_string.includes(alp)) {
    return my_string;
  }
  return my_string.replaceAll(alp, alp.toUpperCase());
}
