/*
my_stringr과 parts의 1:1 대응으로 slicing 한다음에 붙이기
*/
function solution(my_strings, parts) {
  let answer = "";
  for (let i = 0; i < my_strings.length; i++) {
    const [start, end] = parts[i];
    const slicedString = my_strings[i].slice(start, end + 1);
    answer += slicedString;
  }
  return answer;
}

//sol2)
function solution(my_strings, parts) {
  return parts
    .map(([start, end], idx) => {
      return my_strings[idx].slice(start, end + 1);
    })
    .join("");
}

//sol3)
function solution(my_strings, parts) {
  return my_strings.reduce((answer, str, idx) => {
    const [start, end] = parts[idx];
    return answer + str.substring(start, end + 1);
  }, "");
}

//sol4)
function solution(my_strings, parts) {
  let result = "";
  my_strings.forEach((str, idx) => {
    const [start, end] = parts[idx];
    result += str.substring(start, end + 1);
  });
  return result;
}

// sol5)
function solution(my_strings, parts) {
  var answer = "";
  return my_strings
    .map((e, i) => e.substring(parts[i][0], parts[i][1] + 1))
    .join("");
}
// sol6)
function solution(my_strings, parts) {
  let answer = "";
  for (let i = 0; i < my_strings.length; i++) {
    answer += my_strings[i].substring(parts[i][0], parts[i][1] + 1);
  }
  return answer;
}
