// str2안에 문자에서  str1.length 길이만큼 slice해서 얻은문자와 str1(target)를 비교
function solution(str1, str2) {
  var answer = 0;
  for (let i = 0; i <= str2.length; i++) {
    if (i + str1.length <= str2.length) {
      if (str2.slice(i, i + str1.length) === str1) {
        return 1;
      }
    }
  }
  return 0;
}

// sol2)
const solution = (str1, str2) => (str2.includes(str1) ? 1 : 0);
