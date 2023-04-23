function solution(num_list) {
  const num = Number(num_list.filter((num) => num < 0));
  return num;
}

console.log(solution([12, 4, 15, 46, 38, -2, -1, -3, 15]));
