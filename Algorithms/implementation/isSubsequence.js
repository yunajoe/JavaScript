function isSubsequence(word, str) {
  let firstIdx = 0;
  let firstIdx_two = 0;
  let marekdIdxArr = [];

  if (word.length > str.length) {
    return false;
  }
  // 우선 str를 다 돌아야 하니까 조건문을 아래처럼
  while (firstIdx_two <= str.length - 1) {
    if (word[firstIdx] === str[firstIdx_two]) {
      marekdIdxArr.push(firstIdx);
      firstIdx++;
      firstIdx_two++;
    } else if (word[firstIdx] !== str[firstIdx_two]) {
      firstIdx_two++;
    }
  }
  if (marekdIdxArr[marekdIdxArr.length - 1] === word.length - 1) {
    return true;
  }
  return false;
}
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    // str2[j] == str1[i]가 같을떄만 i++
    if (str2[j] == str1[i]) i++;
    // j++는  str2[j] == str1[i]가 같을때나 안 같을때는 무조건 ++
    j++;
    // 비교하고 ++ 이기 떄문에 str1.length-1이 아닌 st1.length로 한다
    if (i === str1.length) return true;
  }
  return false;
}

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false
