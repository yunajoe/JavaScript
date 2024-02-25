function solution(myString, pat) {
  let startIndex = myString.lastIndexOf(pat);
  let lastIndex = startIndex + pat.length;
  return myString.substring(0, lastIndex);
}

// sol2)
// 마지막 pat이 시작되기 전까지 인덱스에 해당되는 글자를 반환한 다음에 + pat
function solution(myString, pat) {
  return myString.substring(0, myString.lastIndexOf(pat)) + pat;
}
