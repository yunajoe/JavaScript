// sol1)
// function sameFrequency(num1, num2) {
//   let arr1 = [...num1.toString()].map(Number).sort((a, b) => a - b);
//   let arr2 = [...num2.toString()].map(Number).sort((a, b) => a - b);
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   let filtedArr = arr1.filter((value, idx) => arr1[idx] === arr2[idx]);
//   if (filtedArr.length === arr1.length) {
//     return true;
//   }
//   return false;
// }

// sol2)

function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
