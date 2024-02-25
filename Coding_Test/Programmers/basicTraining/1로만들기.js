function calNum(n) {
  let cnt = 0;
  while (n != 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = (n - 1) / 2;
    }
    cnt += 1;
  }
  return cnt;
}

function solution(num_list) {
  return num_list.map((num) => calNum(num)).reduce((acc, num) => acc + num, 0);
}

// sol2)
function solution(num_list) {
  let answer = 0;
  num_list.forEach((num) => {
    while (num !== 1) {
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = (num - 1) / 2;
      }
      answer += 1;
    }
  });
  return answer;
}
