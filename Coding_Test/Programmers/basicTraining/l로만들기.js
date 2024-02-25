// 알파벳 중에서 i보다 앞선걸 다 i로 만들기
// 알파벳 i를 아스키코드 값으로 변환한 것은 105 인데 이것보다 작으면은 다 i로 바꿔주기
function solution(myString) {
  const iAsnum = "l".charCodeAt();
  return [...myString]
    .map((str) => {
      if (str.charCodeAt() < iAsnum) {
        return (str = "l");
      } else {
        return str;
      }
    })
    .join("");
}
// sol2)
const solution = (myString) => myString.replace(/[a-k]/g, "l");

// sol3)
function solution(myString) {
  return [...myString].map((v) => (v < "l" ? "l" : v)).join("");
}

// sol4)

function solution(myString) {
  let result = "";
  let arr = myString.split("");
  let unicodeArr = arr.map((v) => v.charCodeAt());
  let unicodeL = "l".charCodeAt(); // 108
  let smallThanLArr = unicodeArr.map((v) => (v < 108 ? 108 : v));

  result = smallThanLArr.map((v) => String.fromCharCode(v)).join("");

  return result;
}
