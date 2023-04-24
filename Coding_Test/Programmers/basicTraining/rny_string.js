// 문자열중 m이 있으면 rn으로 바꾸기
// 문제는 m이 여러개 있으면은 그 중 하나밖에 반영을 못한다.
// replace() 메서드는 기본적으로 첫 번째로 매치되는 문자열만 대체
function solution(rny_string) {
  return rny_string.replace(/m/g, "rn");
}

// sol2
function solution(rny_string) {
  return rny_string.replace(/m/g, function () {
    return "rn";
  });
}

// sol3 >> for문 사용

function solution(rny_string) {
  let answer = "";
  let arr = rny_string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "m") {
      answer += "rn";
    } else {
      answer += arr[i];
    }
  }
  return answer;
}

// sol4 >> map사용

function solution(rny_string) {
  let answer = "";
  rny_string.split("").map((str) => {
    if (str === "m") {
      answer += "rn";
    } else {
      answer += str;
    }
  });
  return answer;
}
