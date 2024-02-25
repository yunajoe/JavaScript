// 문자 두개를 합쳐서 하나로 만든 다음에 (0,5) (1,6) (2,7) (3,8) (4,9)
function solution(str1, str2) {
  let answer = [];
  let str = str1 + str2;
  let mid = str.length / 2;
  for (let i = 0; i < mid; i++) {
    answer.push(str[i]);
    answer.push(str[i + mid]);
  }
  return answer.join("");
}

//sol2
function solution(str1, str2) {
  return [...str1].map((ele, idx) => ele + str2[idx]).join("");
}

//sol3
function solution(str1, str2) {
  let answer = "";
  let str1Arr = [...str1];
  let str2Arr = [...str2];
  // map() 함수의 목적은 단순히 배열의 각 요소에 대해 작업을 수행하고, 결과를 answer 변수에 누적시키는 것
  // 따라서 반환값은 상관 없다
  str1Arr.map((ele, idx) => {
    answer += ele + str2Arr[idx];
  });
  return answer;
}
