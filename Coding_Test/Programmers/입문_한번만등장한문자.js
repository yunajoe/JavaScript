function solution(s) {
  let result = [];
  var answer = "";
  let arr = Array.from(s);
  let dic = {};
  for (const element of arr) {
    if (dic[element]) {
      dic[element] += 1;
    } else {
      dic[element] = 1;
    }
  }
  for (const [key, value] of Object.entries(dic)) {
    if (value === 1) {
      result.push(key);
    }
  }
  return result.sort().join("");
}
