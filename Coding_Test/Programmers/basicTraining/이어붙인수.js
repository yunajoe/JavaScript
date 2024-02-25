// num_list 를 돌면서 홀수인거랑 짝수인거랑 일단 나눠 홀수 요소만 있는 array, 짝수 요소만 있는 array를 만든다
// array => String (이어붙이기위해서)
//  Stirng=> Number바꿔서 계산하기
function solution(num_list) {
  oddNumber = Number(num_list.filter((ele) => ele % 2 !== 0).join(""));
  evenNumber = Number(num_list.filter((ele) => ele % 2 === 0).join(""));
  return oddNumber + evenNumber;
}

// sol2
function solution(num_list) {
  const { evens, odds } = num_list.reduce(
    (acc, num) => {
      const { evens, odds } = acc;
      if (num % 2 === 0) {
        evens.push(num);
      } else {
        odds.push(num);
      }
      return { evens, odds };
    },
    { evens: [], odds: [] }
  );

  return Number(evens.join("")) + Number(odds.join(""));
}
