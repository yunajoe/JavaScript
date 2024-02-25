function solution(my_str, n) {
  let cnt = 0;
  let strings = "";
  let result = [];
  for (let str of my_str) {
    strings += str;
    cnt += 1;
    if (cnt === n) {
      result.push(strings);
      cnt = 0;
      strings = "";
    }
  }
  result.push(strings);
  return result.filter((str) => str !== "");
}

// sol2)
function solution(my_str, n) {
  let answer = [];
  for (let i = 0; i < my_str.length; i += n) {
    const newStr = my_str.substr(i, n);
    answer.push(newStr);
  }
  return answer;
}

//sol3)
function solution(my_str, n) {
  let answer = [];
  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.slice(i, i + n));
  }
  return answer;
}
