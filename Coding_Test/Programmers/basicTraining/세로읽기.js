function solution(my_string, m, c) {
  let answer = "";
  for (let i = 0; i <= my_string.length; i = i + m) {
    let str = my_string.slice(i, i + m);
    if (str.length !== 0) {
      answer += [...str].reduce((acc, cur, idx) => {
        return idx === c - 1 ? (acc += cur) : acc;
      }, "");
    }
  }
  return answer;
}

// sol2)

function solution(my_string, m, c) {
  return Array.from(my_string).reduce((acc, v, i) => {
    return (i % m) + 1 === c ? (acc += v) : acc;
  }, "");
}
