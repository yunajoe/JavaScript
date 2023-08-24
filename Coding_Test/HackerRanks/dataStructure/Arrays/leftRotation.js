function rotateLeft(d, arr) {
  // Write your code here
  while (d !== 0) {
    let value = arr.shift();
    arr.push(value);
    d--;
  }
  return arr;
}

// sol2)
function rotateLeft(d, arr) {
  // Write your code here
  const arrCopy = arr.concat();
  for (let i = 0; i < d; i++) {
    const value = arrCopy.shift();
    arrCopy.push(value);
  }
  return arrCopy;
}
