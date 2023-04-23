function solution(num_list) {
  const mul = num_list.reduce((acc, cur) => (acc *= cur), 1);
  const sum = num_list.reduce((acc, cur) => (acc += cur), 0);
  return mul > sum * sum ? 0 : 1;
}

function solution(num_list) {
  let sum = 0;
  let product = 1;
  for (let i = 0; i < num_list.length; i++) {
    sum += num_list[i];
    product *= num_list[i];
  }
  return product < sum * sum ? 1 : 0;
}
