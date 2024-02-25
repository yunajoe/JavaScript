//  환자의 응급도를 기준으로 진료 순서
// array안에 원소가 클 수록 응급도가 큰 거다
// 내림차순으로 한다
// [76, 24, 3] => 인덱스 +1 [1,2,3] = > obj로 {76:1, 24:2, 3:3}
// 본래 array에 원소에 해당 value를 넣는다
function solution(emergency) {
  // deepCopy >> 원소의 값만 복사한다(주소X)
  let copyEmergency = [...emergency];
  let result = copyEmergency
    .sort((a, b) => b - a)
    .reduce((obj, ele, idx) => {
      obj[ele] = idx + 1;
      return obj;
    }, {});
  // return result //  {"3":3,"24":2,"76":1}
  let keys = Object.keys(result); //  ["3","24","76"]
  return emergency.map((ele) => result[ele]);
}

// sol2)
function solution(emergency) {
  let sortedArr = emergency.slice().sort((a, b) => b - a);
  return emergency.map((ele) => {
    return sortedArr.indexOf(ele) + 1;
  });
}
// sol3)
function solution(emergency) {
  let sortedArr = [...emergency].sort((a, b) => b - a);
  return emergency.map((num) => {
    let idx = sortedArr.findIndex((num2) => num === num2);
    return idx + 1;
  });
}
