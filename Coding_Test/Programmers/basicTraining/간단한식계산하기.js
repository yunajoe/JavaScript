function solution(binomial) {
  let answer;
  let signal = binomial.split(" ")[1];
  let a = binomial.split(" ")[0];
  let b = binomial.split(" ")[2];
  switch (signal) {
    case "+":
      answer = Number(a) + Number(b);
      break;

    case "-":
      answer = Number(a) - Number(b);
      break;

    case "*":
      answer = Number(a) * Number(b);
      break;
  }
  return answer;
}
