// sol1)

function solution(my_string, s, e) {
  let init = my_string.substring(0, s);
  let mid = my_string
    .substring(s, e + 1)
    .split("")
    .reverse()
    .join("");
  let latter = my_string.substring(e + 1);
  return init + mid + latter;
}

//sol2)
function solution(my_string, s, e) {
  let splicedStr = my_string.substring(s, e + 1);
  let newStr = splicedStr.split("").reverse().join("");
  return my_string.replace(splicedStr, newStr);
}

//sol3)
function solution(my_string, s, e) {
  let changedWords = [];
  let arr = my_string.split("");
  for (let i = s; i <= e; i++) {
    changedWords.push(arr[i]);
  }
  changedWords.reverse();
  for (let i = s; i <= e; i++) {
    arr[i] = changedWords.shift();
  }
  return arr.join("");
}

//sol4)
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
function solution(my_string, s, e) {
  let replaceStrs = my_string
    .substring(s, e + 1)
    .split("")
    .reverse();
  let strArr = [...my_string];
  strArr.splice(s, e - s + 1, ...replaceStrs);
  return strArr.join("");
}
