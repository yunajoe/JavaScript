// 입력값 〉 "abcdefghijklmnopqrstuvwxyz", 1
// 기댓값 〉 "bcdefghijklmnopqrstuvwxyza"

// 문자를 숫자로 반환, n만큼 더한다음에, 다시 숫자를 문자로 반환
// 알파벳 소문자와 대문자의 갯수는 각각 26개씩..
// 소문자 a는 97 z는 122
// 대문자 A는 65 Z는 90
// 91~96까지는 특수문자 공백은 유니코드 없음!
// 문자를 숫자로 => 해당문자.charCodeAt(인덱스)
// 숫자를 문자로 => String.fromCharCode(65) > "A"
function solution(s, n) {
  return s
    .split("")
    .map((str) => {
      if (str !== " ") {
        let currentNum = str.charCodeAt(0);
        if (currentNum === 122 || currentNum === 90) {
          return String.fromCharCode(currentNum - 26 + n);
        }
        return String.fromCharCode(currentNum + n);
      } else {
        return " ";
      }
    })
    .join("");
}
// 합계: 7.7 / 100.0;

// 2nd-trial

// 문자를 숫자로 반환, n만큼 더한다음에, 다시 숫자를 문자로 반환
// 알파벳 소문자와 대문자의 갯수는 각각 26개씩..
// 소문자 a는 97 z는 122
// 대문자 A는 65 Z는 90
// 91~96까지는 특수문자 공백은 유니코드 없음!
// 문자를 숫자로 => 해당문자.charCodeAt(인덱스)
// 숫자를 문자로 => String.fromCharCode(65) > "A"
function solution(s, n) {
  return s
    .split("")
    .map((str) => {
      let currentIdx = str.charCodeAt(0);
      let targetIdx = currentIdx + n;
      if (targetIdx >= 65 && targetIdx <= 90) {
        return String.fromCharCode(targetIdx);
      } else if (targetIdx >= 97 && targetIdx <= 122) {
        return String.fromCharCode(targetIdx);
      } else if (targetIdx >= 91) {
        return String.fromCharCode(targetIdx - 26);
      } else {
        return " ";
      }
    })
    .join("");
}

// 3th-trial

// 문자를 숫자로 반환, n만큼 더한다음에, 다시 숫자를 문자로 반환
// 알파벳 소문자와 대문자의 갯수는 각각 26개씩..
// 소문자 a는 97 z는 122
// 대문자 A는 65 Z는 90
// 91~96까지는 특수문자 공백은 유니코드 없음!
// 문자를 숫자로 => 해당문자.charCodeAt(인덱스)
// 숫자를 문자로 => String.fromCharCode(65) > "A"
// 대문자+n이 소문자 알파벳의 범위 안으로 들어가는 경우가 생깁니다. 이 경우를 고려하여 잘 고쳐보세요.
function solution(s, n) {
  return s
    .split("")
    .map((str) => {
      let currentIdx = str.charCodeAt(0);
      let targetIdx = currentIdx + n;
      if (currentIdx >= 65 && currentIdx <= 90) {
        if (targetIdx >= 91) {
          let val = 26 - n;
          return String.fromCharCode(currentIdx - val);
        }
        return String.fromCharCode(targetIdx);
      } else if (currentIdx >= 97 && currentIdx <= 122) {
        if (targetIdx >= 123) {
          let val = 26 - n;
          return String.fromCharCode(currentIdx - val);
        }
        return String.fromCharCode(targetIdx);
      } else {
        return " ";
      }
    })
    .join("");
}
