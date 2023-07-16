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

  return result;
}
