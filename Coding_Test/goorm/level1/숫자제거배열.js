function solution(num, arr) {
  let filterArr = arr
    .map((ele) => {
      let cntArr = [];
      let findIndexArr = String(num).split("").map(Number);
      let subArr = String(ele).split("").map(Number);
      while (findIndexArr.length) {
        let value = findIndexArr.shift();
        if (subArr.indexOf(value) === -1) {
          return; // undefined
        }
        cntArr.push(subArr.indexOf(value));
      }
      return cntArr;
    })
    .filter((arr) => arr);

  let cnt = 0;
  filterArr.forEach((arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        cnt--;
        break;
      }
    }
    cnt++;
  });
  return arr.length - cnt;
}

console.log(solution(12, [12, 122, 21, 19, 30]));
console.log(solution(2, [10, 20, 22, 12, 11]));
