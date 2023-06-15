// str_list를 돌면서 ex가 포함되어 있는지 check
// 포함되어 있으면 무시하고 아니면은 "" >> 여기에다가 더하기
function solution(str_list, ex) {
  return str_list
    .map((str) => str.includes(ex))
    .reduce((acc, str, idx) => {
      if (!str) {
        return acc + str_list[idx];
      }
      return acc;
    }, "");
}

//sol2)
function solution(str_list, ex) {
  return str_list.reduce((acc, str) => {
    if (str.includes(ex)) {
      return acc;
    } else {
      return acc + str;
    }
  }, "");
}

//sol3)

function solution(str_list, ex) {
  return str_list.filter((str) => !str.includes(ex)).join("");
}
//sol4)
function solution(str_list, ex) {
  // cur가 ex를 includes하고 있으면은 "" 아니면은 cur를 return
  return str_list.reduce((acc, cur) => acc + (cur.includes(ex) ? "" : cur), "");
}
//sol5)

function solution(str_list, ex) {
  let answer = "";
  for (let i = 0; i < str_list.length; i++) {
    if (!str_list[i].includes(ex)) {
      answer += str_list[i];
    }
  }
  return answer;
}
