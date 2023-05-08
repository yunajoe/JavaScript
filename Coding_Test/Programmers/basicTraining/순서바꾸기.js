// 배열에서 n(인덱스) ~ 끝까지 => part1
// 배열의 처음부터~ n까지 => part2
// answer = part1 + part2
function solution(num_list, n) {
  let part1 = num_list.slice(n);
  let part2 = num_list.slice(0, n);
  return part1.concat(part2);
}

// sol2
function solution(num_list, n) {
  return num_list.slice(n).concat(num_list.slice(0, n));
}

// sol3
function solution(num_list, n) {
  let part1 = num_list.slice(n);
  let part2 = num_list.slice(0, n);
  return [...part1, ...part2];
}

// function solution(num_list, n) {
//   num_list.push(...num_list.splice(0, n));
//   return num_list;
// }
