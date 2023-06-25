function solution(str_list) {
  if (str_list.includes("l") === false && str_list.includes("r") === false) {
    return [];
  }
  // 해당 인덱스가 없으면은 -1
  let l_idx = str_list.indexOf("l");
  let r_idx = str_list.indexOf("r");
  // l 인덱스가 r 인덱스보다 작다는 것은 l이 r보다 앞에 있따는 뜻!
  if (l_idx < r_idx || r_idx === -1) {
    return str_list.slice(0, l_idx);
    // r이 l보다 먼저 나옴
  } else if (l_idx > r_idx || l_idx === -1) {
    return str_list.slice(r_idx + 1);
  }
}
// 정확성: 95.0
// 합계: 95.0 / 100.0

//sol2)
function solution(str_list) {
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === "l") return str_list.splice(0, i);
    else if (str_list[i] === "r") return str_list.splice(i + 1);
  }
  return [];
}

//sol3)
function solution(str_list) {
  let value;
  const idx = str_list.findIndex((letter) => {
    // l 또는 r이면은 true값이고 아니면은 false값이다
    const trueFalsy = letter === "l" || letter === "r";
    if (trueFalsy) {
      // true값이면은 letter로 return
      // false값이면은 underfined로 return
      return (value = letter);
    }
  });
  if (!value) {
    return [];
  } else if (value === "l") {
    return str_list.splice(0, idx);
  } else if (value === "r") {
    return str_list.splice(idx + 1);
  }
}

// sol4)
function solution(str_list) {
  let answer = [];
  for (let i = 0; i < str_list.length; i++) {
    const char = str_list[i];
    if (char === "l") {
      return str_list.slice(0, i);
    } else if (char === "r") {
      return str_list.slice(i + 1);
    }
  }
  return answer;
}
