// intStrs문자열에 있는 각각의 원소들을 인덱스 s부터 시작하여 l수만큼 자른다. 즉 slice(s, s+l)
// s, l이 5, 5 이면은 slic(5,10) 5~9
// 잘라낸 문자열이 k보다 크면은 answer array에다가 담는다..
function solution(intStrs, k, s, l) {
  return intStrs
    .map((ele) => ele.slice(s, s + l))
    .map((ele) => {
      if (Number(ele) > k) {
        return Number(ele);
      }
    })
    .filter((ele) => ele != null); // nullish값(undefined, null) 제거하기
}

//sol2)
// slice를 먼저 하고 +, 즉 number로 형태가 바뀐다
function solution(intStrs, k, s, l) {
  return intStrs.map((ele) => +ele.slice(s, s + l)).filter((ele) => ele > k);
}

// sol3)
function solution(intStrs, k, s, l) {
  return intStrs
    .map((ele) => +ele.substring(s, s + l))
    .filter((ele) => ele > k);
}

// sol4)
function solution(intStrs, k, s, l) {
  return intStrs.reduce((acc, ele) => {
    const num = Number(ele.slice(s, s + l));
    num > k ? acc.push(num) : acc;
    return acc;
  }, []);
}

//sol5)
// forEach는 값을 return하지 않는다
function solution(intStrs, k, s, l) {
  let answer = [];
  intStrs.forEach((ele) => {
    const num = +ele.slice(s, s + l);
    num > k ? answer.push(num) : answer;
  });
  return answer;
}
