function strangeGrid(r, c) {
  // Write your code here
  let n = 0;
  if (r % 2 === 0) {
    n = r / 2;
    n = 10 * n - 9;
    return (c - 1) * 2 + n;
  } else {
    n = Math.floor(r / 2) + Math.floor(r % 2);
    n = 10 * n - 10;
    return (c - 1) * 2 + n;
  }
}
