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

// sol2
// a,b,c 를 set한 다음에
// mySet2 = new Set([1, 2, 3, 4]);
// a,b,c 를 set한 다음에
// mySet2 = new Set([1, 2, 3, 4]);
function solution(a, b, c) {
  const calculate = (nums, n) => {
    const [a, b, c] = nums;
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result = result * (a ** i + b ** i + c ** i);
    }
    return result;
  };

  const setArr = new Set([a, b, c]);
  switch ([...setArr].length) {
    case 1:
      return calculate(setArr, 3);
      break;
    case 2:
      return calculate(setArr, 2);
    case 3:
      return calculate(setArr, 1);
  }
}
