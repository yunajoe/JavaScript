function countDown(num) {
  // base case
  if (num === 0) {
    return;
  }
  console.log(num);
  countDown(num - 1);
}

countDown(5);
