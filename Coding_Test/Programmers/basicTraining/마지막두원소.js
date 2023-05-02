function solution(num_list) {
  end_list = num_list.slice(-2);
  const prev = end_list[0];
  const last = end_list[1];
  prev < last ? num_list.push(last - prev) : num_list.push(last * 2);
  return num_list;
}

function solution(num_list) {
  const [a, b] = [...num_list].reverse(); // a가 마지막, b가 마지막 전의 원소
  const answer = [...num_list, a > b ? a - b : a * 2];
  return answer;
}
