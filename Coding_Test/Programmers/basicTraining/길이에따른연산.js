function solution(num_list) {
  // 리스트에 있는 모든 원소의 합
  if (num_list.length >= 11) {
    return num_list.reduce((acc, cur) => (acc += cur), 0);
    // 리스트에 있는 모든 원소의 곱
  } else {
    return num_list.reduce((acc, cur) => (acc *= cur), 1);
  }
}
