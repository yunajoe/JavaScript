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

// sol2)
function solution(todo_list, finished) {
  return todo_list.filter((ele, idx) => !finished[idx]);
}

//sol3)
// ! (부정연산자)는 true => false, false=>ture로 바꿔준다
// if문에서 if(x) >> 이것이 if(x===ture)를 의미하듯이 !if(x) 하면은 if(x===false)를 의미
function solution(todo_list, finished) {
  let answer = [];
  for (let i = 0; i < todo_list.length; i++) {
    if (!finished[i]) {
      answer.push(todo_list[i]);
    }
  }
  return answer;
}
