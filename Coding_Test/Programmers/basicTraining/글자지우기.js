function solution(my_string, indices) {
  let my_string_copy = my_string;
  indices.sort((a, b) => a - b);
  let removedLetters = indices.map((idx) => my_string[idx]);
  // return removedLetters
  while (removedLetters.length) {
    let letter = removedLetters.shift();
    my_string_copy = my_string_copy.replace(letter, "");
  }
  return my_string_copy; //   "rogramemprs"
}
// 인덱스를 키로 해당 문자열을 value로 하는 오브젝트를 만든다
// indices를 키로 안 가는 value갖만 뽑아서 문자열로 만들기
// sol1)
function solution(my_string, indices) {
  const obj = [...my_string].reduce((obj, str, idx) => {
    obj[idx] = str;
    return obj;
  }, {});
  const Keys = Object.keys(obj);
  const indicesKeys = indices.map((num) => String(num));
  return Keys.filter((key) => !indicesKeys.includes(key))
    .map((key) => {
      return obj[key];
    })
    .join("");
}

//sol2)
function solution(my_string, indices) {
  var answer = "";
  for (let i = 0; i < my_string.length; i++) {
    !indices.includes(i) === true ? (answer += my_string[i]) : answer;
  }
  return answer;
}

//sol3)
function solution(my_string, indices) {
  return [...my_string].filter((_, idx) => !indices.includes(idx)).join("");
}

//sol4)
function solution(my_string, indices) {
  var answer = "";
  return [...my_string].reduce(
    (p, c, idx) => (p += indices.includes(idx) ? "" : c),
    ""
  );
}

// sol5)
function solution(my_string, indices) {
  return [...my_string].reduce((acc, str, idx) => {
    return !indices.includes(idx) ? acc + str : acc;
  }, "");
}
