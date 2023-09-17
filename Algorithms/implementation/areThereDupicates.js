function areThereDuplicates() {
  let obj = {};
  for (let key in arguments) {
    obj[arguments[key]] = (obj[arguments[key]] || 0) + 1;
  }
  for (let key in obj) {
    if (obj[key] > 1) {
      return true;
    }
    // else{} 한다음에 return false를 하면은 안되는 이유가.. 첫번재 key의 값은 1, 두번째 key의 값은 3일때 첫번째 key의 value값 1이기 떄문에 return false를 하구 끝내버림
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
