// 직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return
// 즉, finished에 원소가 false인 인덴스를 찾는다 >> todo_list에 해당 인덱스에 맞는 원소들을 return한다
function solution(todo_list, finished) {
  return finished
    .map((ele, idx) => {
      if (ele === false) {
        return todo_list[idx];
      }
    })
    .filter((todo) => todo != undefined);
}
