/*
my_string을 split하여 배열로 만든다 
queries가 2dimensaion array인데 , 원소가 각각 배열로 되어있음
그 각각의 배열은 slicing할 인덱스를 가지고 있다 
ex) [2,3]> 2와 3까지 my_string을 split하여 배열로 만든것을 자른다음 스위치! ==> 바뀐 새로운 단어는  my_string이 되는것
*/

function solution(my_string, queries) {
  let answer_string = my_string;
  while (queries.length) {
    let my_string_arr = [...answer_string];
    let [start, end] = queries.shift();
    let original = my_string_arr.slice(start, end + 1).join(""); // rm
    let newWord = my_string_arr
      .slice(start, end + 1)
      .reverse()
      .join(""); //mr
    answer_string = answer_string.replace(original, newWord); // original 과 newWord를 replace한 새로운 문장
  }
  return answer_string;
}

// 정확성: 68.0;
// 합계: 68.0 / 100.0;
