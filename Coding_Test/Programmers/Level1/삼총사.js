// sol1) >> 첫번째 풀이 망함..
function solution(number) {
  let totalArr = [];
  let answer = [];
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let p = i + 2; p < number.length; p++) {
        if (i !== j && j !== p) {
          let subArr = [number[i], number[j], number[p]];
          let result = subArr.reduce((acc, num) => {
            acc += num;
            return acc;
          }, 0);
          if (result === 0) {
            totalArr.push(subArr);
          }
        }
      }
    }
  }
  let sortedArr = totalArr
    .map((arr) => arr.sort((a, b) => a - b))
    .sort((a, b) => a - b);
  let uniqueArr = [...new Set(sortedArr.join("|").split("|"))];
  let num = uniqueArr.map((ele) => {
    return ele.split(",").map(Number);
  }).length;
  return sortedArr.length ? num : 0;
}

// sol2)
function solution(number) {
  let cnt = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          cnt++;
        }
      }
    }
  }
  return cnt;
}

// sol3)
function solution(number) {
  var answer = 0;
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        const sum = number[i] + number[j] + number[k];
        if (sum === 0) answer++;
      }
    }
  }
  return answer;
}
