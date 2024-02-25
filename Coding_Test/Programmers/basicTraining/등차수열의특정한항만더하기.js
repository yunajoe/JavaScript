// true값에 해당되는 등차수열의 값을 다 더한 것이 return값이 된다
/*
included의 길이 만큼의 등차수열의 값을 구하여 array로 만든다 
included의 true의 idx에 대항되는 값의 합을 구한다 
*/
// 첫항은 a 부터 시작
// 끝항은 a + d *  (included.length-1)
function solution(a, d, included) {
  let result = [];
  for (let i = a; i <= a + d * (included.length - 1); i += d) {
    result.push(i);
  }
  const index_arr = included
    .map((ele, idx) => {
      if (ele === true) {
        return idx;
      }
    })
    .filter((ele) => ele !== undefined);
  // filter((ele) => ele !== null) 하면은 null값이 안 지워지고 >>  [0,null,null,3,4] 그대로 나옴
  return index_arr
    .map((idx) => result[idx])
    .reduce((acc, currentvalue) => acc + currentvalue, 0);
}

// sol2
function solution(a, d, included) {
  return included.reduce((acc, cur, idx) => {
    return cur === true ? (acc += a + idx * d) : acc;
  }, 0);
}

// sol3
function solution(a, d, included) {
  let answer = 0;
  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      answer += a + i * d;
    }
  }
  return answer;
}
