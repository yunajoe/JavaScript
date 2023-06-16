function arraysAreEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

function cal(arr) {
  return arr.map((num) => {
    if (num % 2 === 0 && num >= 50) {
      return (num = num / 2);
    } else if (num < 50 && num % 2 !== 0) {
      return (num = num * 2 + 1);
    } else {
      return num;
    }
  });
}

function solution(arr) {
  let cnt = 1;
  let newArr = cal(arr);
  if (arraysAreEqual(arr, newArr)) {
    return cnt;
  }
  while (true) {
    cnt += 1;
    let finalArr = cal(newArr);
    if (arraysAreEqual(newArr, finalArr)) {
      return cnt - 1;
    } else {
      newArr = finalArr;
    }
  }
}

// gpt
// 정확성: 84.6 (테스트케이스 12, 13 X)
// 합계: 84.6 / 100.0
