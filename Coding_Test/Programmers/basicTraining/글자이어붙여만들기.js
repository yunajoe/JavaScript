// map으로 index_list를 돌면서 my_string에서 각각 idx에 해당되는 문자를 map으로 return한다
function solution(my_string, index_list) {
  return index_list.map((idx) => my_string[idx]).join("");
}

//sol2
function solution(my_string, index_list) {
  let answer = "";
  index_list.forEach((idx) => {
    answer += my_string.charAt(idx);
  });
  return answer;
}
