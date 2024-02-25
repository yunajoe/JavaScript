function solution(a, b, c) {
  let cal1 = a + b + c;
  let cal2 = cal1 * (a ** 2 + b ** 2 + c ** 2);
  let cal3 = cal2 * (a ** 3 + b ** 3 + c ** 3);
  if (a !== b && b !== c && a !== c) {
    return cal1;
  } else if (
    (a === b && b !== c) ||
    (b === c && a !== c) ||
    (a === c && b !== c)
  ) {
    return cal2;
  } else if (a === b && a === c) {
    return cal3;
  }
}

function solution(a, b, c) {
  const calculate = (n) => {
    let answer = 1;
    for (let i = 1; i <= n; i++) {
      answer *= a ** i + b ** i + c ** i;
    }
    return answer;
  };

  const setArr = new Set([a, b, c]);
  switch ([...setArr].length) {
    // a,b,c가 모두 같을때
    case 1:
      return calculate(3);
    // a,b,c 중 2개만 같을때
    case 2:
      return calculate(2);
    //a,b,c가 모두 다를때
    case 3:
      return calculate(1);
  }
}
