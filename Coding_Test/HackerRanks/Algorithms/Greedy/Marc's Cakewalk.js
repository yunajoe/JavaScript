function marcsCakewalk(calorie) {
  // Write your code here
  calorie.sort((a, b) => b - a);
  return calorie.reduce((acc, total, idx) => {
    let val = 2 ** idx * total; // find the optimal subvalue
    acc += val;
    return acc; // global optimal value
  }, 0);
}
