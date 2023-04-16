// s를 array로 만든다
// arr안에 elemenet를 순회하면서, 숫자인경우 현재값을 더하고 Z가 나오는 경우는 현재값 이전의 수를 뺀다
function solution(s) {
  let answer = 0;
  var result = s.split(" ").map((ele) => {
    if (ele !== "Z") {
      return parseInt(ele);
    } else {
      return ele;
    }
  });
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== "Z") {
      answer += result[i];
    } else {
      answer -= result[i - 1];
    }
  }

  return answer;
}

// 다른풀이2
// Z가 나오면은 Z나오기 전에 array에 있던 마지막 수는 더하지 않기 때문에 stack사용 (LIFO)
// 처음부터 Z가 나오는 경우는 없다?  빈 array에서 pop하면은 undefined나옴
function solution(s) {
  const stack = [];

  s.split(" ").forEach((element) => {
    if (element === "Z") {
      stack.pop();
    } else {
      stack.push(element);
    }
  });

  return stack.length
    ? stack.reduce((acc, cur) => {
        return (acc += parseInt(cur));
      }, 0)
    : 0;
}

// 다른풀이3 (다른풀이2에서 조금 변형)

function solution3(s) {
  const stack = [];

  s.split(" ").forEach((target) => {
    if (target === "Z") stack.pop();
    else stack.push(+target); //  +가 stirng => int로 바꿔주는 것
  });

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}
