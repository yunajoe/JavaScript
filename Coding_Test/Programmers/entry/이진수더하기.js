function solution(bin1, bin2) {
  // bin1과 bin2를 십진수로 반꾼다음에 더함.. => 다시 2진수로 변환
  let arr1 = bin1.split("");
  let arr2 = bin2.split("");
  let num1 = arr1.map(Number).reduce((acc, num, idx) => {
    return (acc += num * 2 ** (arr1.length - (idx + 1)));
  }, 0);

  let num2 = arr2.map(Number).reduce((acc, num, idx) => {
    return (acc += num * 2 ** (arr2.length - (idx + 1)));
  }, 0);

  let total = num1 + num2;

  // 몫이 0이 될떄까지 나누고 나머지를 문자열로 결합
  let answer = [];
  answer.push(total % 2);
  // 몫이 0일때까지..(그래서 항상 0이 나머지로 push가 된다)
  while (total / 2 !== 0) {
    total = Math.floor(total / 2);
    let remainer = total % 2;
    answer.push(remainer);
  }
  return answer
    .slice(0, answer.length - 1)
    .reverse()
    .join("");
}

// sol2)

function solution(bin1, bin2) {
  // bin1과 bin2를 십진수로 반꾼다음에 더함.. => 다시 2진수로 변환
  let arr1 = bin1.split("");
  let arr2 = bin2.split("");
  let num1 = arr1.map(Number).reduce((acc, num, idx) => {
    return (acc += num * 2 ** (arr1.length - (idx + 1)));
  }, 0);

  let num2 = arr2.map(Number).reduce((acc, num, idx) => {
    return (acc += num * 2 ** (arr2.length - (idx + 1)));
  }, 0);

  let total = num1 + num2;

  // 이거 추가 >> case1 = "0", case2="0" 일때 생각해서
  // 이 case를 주지 않으면은 total = 0이 되어서 while문이 실행되지 않고, return answer.splice(0, answer.length-1).reverse.join("")이 된다
  if (total === 0) {
    return "0";
  }
  let answer = [];
  answer.push(total % 2);
  // 몫이 0일때까지..(그래서 항상 0이 나머지로 push가 된다)
  while (total / 2 !== 0) {
    total = Math.floor(total / 2);
    let remainer = total % 2;
    answer.push(remainer);
  }
  return answer
    .slice(0, answer.length - 1)
    .reverse()
    .join("");
}
