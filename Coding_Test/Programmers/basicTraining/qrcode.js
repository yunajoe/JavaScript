// code의 해당하는 인덱스를 q로 나눈 값을 arr로 만든다
// arr의 요소들(인덱스)과 r를 비교하여 같으면 해당 index를 뽑느다
//code의 해당 index에 해당
function solution(q, r, code) {
  let index_arr = [...code].map((ele, idx) => idx % q);
  // q로 나눈 값들의 arr
  return index_arr
    .map((ele, idx) => {
      return ele === r ? code[idx] : "";
    })
    .join("");
}
