function solution(my_string) {
  const arr = my_string.split(" ");
  let answer = Number(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === "+") {
      answer += +arr[i + 1];
      arr.splice(i + 1, 1);
    } else if (arr[i] === "-") {
      answer -= +arr[i + 1];
      arr.splice(i + 1, 1);
    }
  }
  return answer;
}

// sol2)
function solution(my_string) {
  const arr = my_string.split(" ");
  let answer = +arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === "+") {
      answer += +arr[i + 1];
    } else if (arr[i] === "-") {
      answer -= +arr[i + 1];
    } else {
      continue;
    }
  }
  return answer;
}

// sol3)
// 음수가 없으니까 되는 방법>> (계산에 사용하는 숫자는 1 이상 20,000 이하인 자연수)
function solution(my_string) {
  let result = [];
  let sign = 1;
  for (let str of my_string.split(" ")) {
    if (str === "+") {
      sign = 1;
    } else if (str === "-") {
      sign = -1;
    } else {
      result.push(sign * str);
    }
  }
  return result.reduce((acc, num) => {
    return (acc += num);
  }, 0);
}

// sol4)
function solution(my_string) {
  let arr = my_string.split(" ").filter((ele) => ele);
  while (arr.length > 1) {
    let result = +arr.shift() + (arr.shift() === "+" ? 1 : -1) * +arr.shift();
    arr.unshift(result);
  }
  return arr[0];
}
