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
