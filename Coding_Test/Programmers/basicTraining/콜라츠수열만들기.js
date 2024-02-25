function solution(n) {
  let num = n;
  let answer = [num];
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
      answer.push(num);
    } else {
      num = num * 3 + 1;
      answer.push(num);
    }
  }
  return answer;
}

// sol2  >> 3항연산자
function solution(n) {
  let answer = [n];
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
    answer.push(n);
  }
  return answer;
}

// sol3) >> 재귀
// solution(n)에서 n은 매개변수(parameter)로 전달되는 지역 변수(local variable)
function solution(n, arr = []) {
  arr.push(n);
  if (n === 1) return arr;
  if (n % 2 === 0) return solution(n / 2, arr);
  return solution(3 * n + 1, arr);
}

// sol4) do..while

function solution(n) {
  let answer = [n];
  do {
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
    answer.push(n);
  } while (n !== 1);
  return answer;
}
