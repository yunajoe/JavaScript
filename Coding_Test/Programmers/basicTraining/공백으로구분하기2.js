function solution(my_string) {
  var answer = [];
  return my_string.split(" ").filter((str) => str !== "");
}

// sol2
// filter 메서드는 truthy한 값만을 return한다
// 빈문자열, null, undefined, 0 과 같은 falsy한 값은 return x
function solution(my_string) {
  var answer = [];
  return my_string.split(" ").filter((str) => str);
}
