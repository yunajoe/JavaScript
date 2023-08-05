function solution(numlist, n) {
  // 내림차순 정렬하기
  let answer = [];
  numlist.sort((a, b) => b - a); //  [6,5,4,3,2,1]
  let diffArr = numlist.map((num) => Math.abs(n - num)); // [2,1,0,1,2,3]
  // diffArr에서 최소값을 뽑아서.. 그 최소값의 인덱스를 값을 찾는다
  // 찾은 인덱스값에 해당되는 값을 num_list[인덱스]로 뽑아서 새로운 array에 정렬
  while (answer.length !== diffArr.length) {
    let MinValue = Math.min(...diffArr);
    let MinValueIdx = diffArr.findIndex((num) => num === MinValue);
    answer.push(numlist[MinValueIdx]);
    diffArr.splice(MinValueIdx, 1, 10001);
  }
  return answer;
}
