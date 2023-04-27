// 가장 작은 5개의 수를 오름차순
// 오름차순 정렬한다음에.. 5개slicing하기
function solution(num_list) {
  return num_list
    .sort(function (a, b) {
      return a - b;
    })
    .slice(0, 5);
}

// sol2
const solution = (num_list) => {
  return num_list.sort((a, b) => a - b).slice(0, 5);
};

// sol3
const solution = (num_list) => {
  // 인덱스가 0부터 4까지인 요소들만 추출
  return num_list.sort((a, b) => a - b).filter((num, idx) => idx <= 4);
};

// sol4
function solution(num_list) {
  // [...num_list]는 num_list를 복사한다
  return [...num_list].sort((a, b) => a - b).slice(0, 5);
}
