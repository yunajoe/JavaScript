// function solution(strArr) {
//   return strArr.map((str, idx) => {
//     return idx % 2 === 0 ? str.toLowerCase() : str.toUpperCase();
//   });
// }

function solution(strArr) {
  return strArr.map((v, idx) =>
    idx % 2 === 0 ? v.toLowerCase() : v.toUpperCase()
  );
}
