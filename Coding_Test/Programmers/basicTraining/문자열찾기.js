/*
 1. myString,과 pat문자를 uppercase 또는 lowercase로 만든다
 2. 길이를 비교 myString < pat 으면은 return 0
 3. myString >=pat 이면은 만약 pat이(이때 pat은 자를수 없고 통째로 들어가야 한다) str에 있으면 return 1 없으면 return 0  
*/
function solution(myString, pat) {
  myString = myString.toUpperCase();
  pat = pat.toUpperCase();
  if (myString.length < pat.length) {
    return 0;
  } else {
    return myString.includes(pat) ? 1 : 0;
  }
}
