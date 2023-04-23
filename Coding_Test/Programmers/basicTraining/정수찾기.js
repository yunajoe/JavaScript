function solution(num_list, n) {
  return num_list.map((num) => (num === n ? 1 : 0)).includes(1) ? 1 : 0;
}

// 화살표함수
const solution = (num_list, n) =>
  num_list.map((num) => (num === n ? 1 : 0)).includes(1) ? 1 : 0;

// sol2)
const solution = (num_list, n) => (num_list.includes(n) ? 1 : 0);

function solution(num_list, n) {
  // else를 안쓰는 이유는 n이 첫번째 element가 아니면은 바로 return 0해버리기 때문에 for문을 다 돌고 나서 써야한다
  for (let num of num_list) {
    if (num === n) {
      return 1;
    }
  }
  return 0;
}
