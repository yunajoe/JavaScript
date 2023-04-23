function solution(num_list) {
  const num = Number(num_list.filter((num) => num < 0).join(""));
  return num !== 0 ? num_list.indexOf(num) : -1;
}

// 정확성: 10.5;
// 합계: 10.5 / 100.0;
/*  
만약 음수가 하나가 아니라 여러개라면은? 
[12, 4, 15, 46, 38, -2, -1, -3, 15]와 같은 배열이 입력되면, filter 메소드로 음수 값들만 필터링한 후 배열([-2, -1, -3])을 반환
Number 함수는 배열 자체를 숫자로 변환할 수 없기 때문에 NaN을 반환

*/

// sol2
// The index of the first element in the array that passes the test. Otherwise, -1.

function solution(num_list) {
  return num_list.findIndex((num) => num < 0);
}

// 정확성: 100.0;
// 합계: 100.0 / 100.0;
