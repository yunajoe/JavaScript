function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  if (x2 > x1 && v2 >= v1) {
    return "NO";
  }
  let value = (x1 - v1 - x2 + v2) / (v2 - v1);
  if (Number.isInteger(value)) {
    return "YES";
  }
  return "NO";
}
