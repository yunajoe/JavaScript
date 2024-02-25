// 1. 알파벳 대소문자를 key로 가지고, 값을 0으로 하는 obj를 만든다
// 대소문자는 65번부터... 소문자는 97번부터..
// 2. myString의 문자와 key값이 같으면은 +1 아니면은 그대로 둔다
// 3. obj의 value값들을 리스트로 만든다
// String.fromCharCode
function solution(my_string) {
  const arr1 = Array.from({ length: 26 }, (num, idx) =>
    String.fromCharCode(65 + idx)
  );
  const arr2 = Array.from({ length: 26 }, (num, idx) =>
    String.fromCharCode(97 + idx)
  );
  const alphabetArr = arr1.concat(arr2);
  const my_stringArr = [...my_string];
  const obj = alphabetArr.reduce((acc, ele, idx) => {
    if (acc[ele]) {
      acc[ele] = acc[ele];
    } else {
      acc[ele] = 0;
    }
    return acc;
  }, {});

  while (my_stringArr.length) {
    let keyValue = my_stringArr.shift();
    for (let key in obj) {
      if (key === keyValue) {
        obj[key] += 1;
      }
    }
  }
  return Object.values(obj);
}

//sol2)
// 52개의 0으로 된 빈 문자열을 만들고, 52개의(알파벳 대소문자)에서 my_string값에 해당하는 문자를 찾은다음에 array에 일씩 더해준다
function solution(my_string) {
  let arr = Array.from({ length: 52 }).fill(0);
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < my_string.length; i++) {
    const findLetter = my_string[i];
    arr[alphabets.indexOf(findLetter)]++;
  }
  return arr;
}

//sol3)
// 대문자 알파벳 유니코드 ( 65 ~ 90)
// 대문자와 소문자 알파벳 유니코드 사이에는 6개의 알파벳과는 다른 문자의 유니코드가 있다
// 소문자 알파벳 유니코드( 97  ~ 122)
function solution(my_string) {
  // string.charCodeAt(index)
  let arr = Array.from({ length: 58 }).fill(0);
  for (let letter of my_string) {
    arr[letter.charCodeAt() - 65]++;
  }
  arr.splice(26, 6);
  return arr;
}

// sol4)
// my_string을 obj로 만든다
// 대소문자가 모두 있는 알파벳 array에서 그 요소가 obj키와 같다면은 obj[요소] 그렇지 않으면은  0
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function solution(my_string) {
  let strArr = [...my_string].reduce((acc, ele, idx) => {
    acc[ele] = (acc[ele] || 0) + 1;
    return acc;
  }, {});
  return letters.map((letter) => strArr[letter] || 0);
}
