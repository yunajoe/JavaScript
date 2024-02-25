function solution(myString) {
  return myString
    .split("x")
    .filter((letter) => letter !== "")
    .sort();
}

// sol2)
function solution(myString) {
  let regexExp = /[^x]+/g;
  return myString.match(regexExp).sort();
}
