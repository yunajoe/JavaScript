// 짝수 인덱스에서는 arr에서 query[i]번 인덱스를 제외하고 배열의 query[i]번 인덱스 뒷부분을 잘라서 버립니다.
// 홀수 인덱스에서는 arr에서 query[i]번 인덱스는 제외하고 배열의 query[i]번 인덱스 앞부분을 잘라서 버립니다
// query안에 있는 값들은 인덱스를 뜻한다
// 인덱스의 값이 짝수이면은 arr[인덱스] 이후에 값들을 자르기 (arr[인덱스]  포함 X)
// 인덱스의 값이 홀수이면은 arr[인덱스] 이전에 값들을 자르기  (arr[인덱스]  포함 X)
// arr이 업데이트 되야한다
// 테스트만 맞구 다틀린다..ㅎ
function solution(arr, query) {
  let newArr;
  let cnt = 0;
  while (query.length) {
    if (cnt === 0) {
      // 처음에만 ...arr을 copy한당
      newArr = [...arr];
    } else {
      newArr = [...newArr];
    }
    let idx = query.shift();
    // 인덱스가 짝수일때
    if (idx % 2 === 0) {
      newArr = newArr.slice(0, idx + 1);
      // 인덱스가 홀수일때
    } else {
      newArr = newArr.slice(idx);
    }
    cnt += 1;
  }
  return newArr;
}
