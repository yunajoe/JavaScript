// sol1)
const isArmstrongNumber = (num) => {
  return String(num)
    .split("")
    .reduce((acc, num, _, arr) => {
      const multiNum = arr.length;
      acc += num ** multiNum;
      return acc;
    }, 0) === num
    ? true
    : false;
};

// sol2)
const isArmstrongNumber2 = (num) => {
  return (
    [...`${num}`].reduce((acc, item, _, { length }) => {
      acc += item ** length;
      return acc;
    }, 0) === num
  );
};

// sol3)
const isArmstrongNumber3 = (num) => {
  const result = [];
  let answer = 0;
  let x = num;
  while (x) {
    result.push(x % 10);
    x = Math.floor(x / 10);
  }
  const powNum = result.length;

  while (result.length) {
    let x = result.pop();
    answer += Math.pow(x, powNum);
  }
  return answer === num;
};
