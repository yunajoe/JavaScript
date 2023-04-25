// // num_list에 index를 짝수와 홀수로 구분한다
// // 각각 map함수로 돌리면서.. 합을 구하고
// function solution(num_list) {
//   const even_list = num_list
//     .filter((num, idx) => {
//       return idx % 2 === 0;
//     })
//     .reduce((acc, cur) => {
//       return (acc += cur);
//     }, 0);

//   const odd_list = num_list
//     .filter((num, idx) => {
//       return idx % 2 !== 0;
//     })
//     .reduce((acc, cur) => {
//       return (acc += cur);
//     }, 0);
//   return odd_list > even_list ? odd_list : even_list;
// }
function solution(num_list) {
  let even = 0;
  let odd = 0;
  num_list.map((num, idx) => {
    idx % 2 ? (odd += num) : (even += num);
  });
  return odd > even ? odd : even;
}
