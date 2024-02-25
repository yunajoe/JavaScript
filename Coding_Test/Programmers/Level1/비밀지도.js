const compareStrings = (str1, str2) => {
  return [...str1].map((num, idx) => {
    if (num === "1" || str2[idx] === "1") {
      return true;
    }
    return false;
  });
};
const changeTwo = (n, num) => {
  let result = [];
  while (num / 2 !== 0) {
    let res = num % 2;
    result.push(res);
    num = Math.floor(num / 2);
  }
  result.reverse();
  let str = result.join("");

  if (str.length !== n) {
    str = str.padStart(n, 0);
  }
  return str;
};

function solution(n, arr1, arr2) {
  let twoArr1 = arr1.map((num) => {
    return changeTwo(n, num);
  });
  let twoArr2 = arr2.map((num) => {
    return changeTwo(n, num);
  });

  let result = twoArr1.map((num, idx) => {
    let booleanArr = compareStrings(num, twoArr2[idx]);
    return booleanArr
      .map((bol) => {
        if (bol === true) {
          return "#";
        }
        return " ";
      })
      .join("");
  });
  return result;
}
