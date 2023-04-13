function solution(my_string) {
  // 앞에 있는 0 다 제거한 array 만들기
  let answer = [];
  let cnt = 0;
  let strArr = [...my_string]
    .map((item) => item.replace(/[a-zA-Z]/g, "0"))
    .map((item) => Number(item));
  while (true) {
    let ele = strArr.shift();
    if (ele === 0) {
      continue;
    } else {
      strArr.unshift(ele);
      break;
    }
  }
  // '''위에서 return한 arr에서 push를한다. 끝배열이 0이면은 끝자리를 pop하고  첫번재 array element만 더하기'''
  // '''끝배열이 0이아니면으 계속..담는다..)
  while (strArr.length) {
    let num = strArr.shift();
    answer.push(num);
    if (answer[answer.length - 1] === 0) {
      answer.pop();
      if (Array.isArray(answer) && answer.length !== 0) {
        cnt += parseInt(answer.join(""));
        answer.splice(0, answer.length);
      }
    }
  }
  return cnt;
}

// 정확성: 34.8;
// 합계: 34.8 / 100.0;
