// function solution(names) {
//   var answer = [];
//   return names.filter((name, idx) => idx % 5 === 0);
// }

// sol2
// const solution = (names) => names.filter((_, idx) => !(i % 5));

// sol3
function solution(names) {
  var answer = [];
  for (let i = 0; i < names.length; i += 5) {
    answer.push(names[i]);
    // answer[i/5] = names[i]
  }
  return answer;
}

// sol4
function solution(names) {
  var answer = [];
  names.map((x, i) => {
    if ((i + 1) % 5 == 1) answer.push(x);
  });
  return answer;
}
