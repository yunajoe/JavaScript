// 문제를 잘못 이해했음.. 한개의 원소라도 맞으면은 return 1인줄 알았는데
// 모든 배열의 arr[i][j] == arr[j][i] 여야 한다
// 아래코드는 arr[0][1]와 arr[1][0] 이 같고, arr[1][2]와 arr[2][1]이 달라도 return 1이 된다 >> 이러면 안됨. 다 달라야 한다..
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === arr[j][i]) {
        return 1;
      }
    }
  }
  return 0;
}

// 정확성: 52.4;
// 합계: 52.4 / 100.0;
// 맞은답
// 아래는 다르면은 바로 return 0 for문 다 돌고나면은 return 1
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] !== arr[j][i]) {
        return 0;
      }
    }
  }
  return 1;
}
