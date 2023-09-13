// sol1)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
}

// sol2)
function sumZero(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx < rightIdx) {
    // arr를 오름차순 정렬 후
    // if  left 인덱스 값과 right 인덱스가 값이  0이면은 return 해주고
    // else if 0보다크면은 오른쪽 인덱스의 절대값이 왼쪽 인덱스의 절대값보다 더 큰것이기 떄문에 오른쪽 인덱스를 -1 를 해준다
    // else if 0보다 작으면은 왼쪽 인덱스의 절대값이 오른쪽 인덱스의 절대값보다 더 큰것이기 떄문에 왼쪽 인덱스를 +1 해준다
    if (arr[leftIdx] + arr[rightIdx] === 0) {
      return [arr[leftIdx], arr[rightIdx]];
    } else if (arr[leftIdx] + arr[rightIdx] < 0) {
      leftIdx++;
    } else if (arr[leftIdx] + arr[rightIdx] > 0) {
      rightIdx--;
    }
  }
  return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-3, 0, 1, 2]));
