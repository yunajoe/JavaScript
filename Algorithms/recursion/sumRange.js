// value를 하나씩 적게해서 더한다.
function sumRange(value) {
  // base
  if (value <= 0) {
    return 0;
  }
  return value + sumRange(value - 1);
}

console.log(sumRange(5));
