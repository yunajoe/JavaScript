// num_list에 index를 짝수와 홀수로 구분한다
// 각각 map함수로 돌리면서.. 합을 구하고
function solution(num_list) {
  const even_list = num_list
    .filter((num, idx) => {
      return idx % 2 === 0;
    })
    .reduce((acc, cur) => {
      return (acc += cur);
    }, 0);

  const odd_list = num_list
    .filter((num, idx) => {
      return idx % 2 !== 0;
    })
    .reduce((acc, cur) => {
      return (acc += cur);
    }, 0);
  return odd_list > even_list ? odd_list : even_list;
}
