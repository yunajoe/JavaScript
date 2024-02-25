// return은 int[]: an array of integers 형태
// brr에는 있으나 arr에는 없는! element를 return해야 한다
// 만약 arr = [1,1...] brr =[1,1,1..] arr은 brr보다 1이 한개 적은거!(즉, 갯수가 맞지 않는것도 없는걸로 간주한다)
// 최종 결과가 result [1,1,2...] 이라고 하면은 (arr에는 1이 2개 있었는데 arr2에는 1이 4개 있는경우)  result값에 있는 원소들이 unique값을 갔도록 중복원소를 제거해준다
function missingNumbers(arr, brr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  brr.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < brr.length; j++) {
      if (arr[i] === brr[j]) {
        i++;
      } else {
        result.push(brr[j]);
      }
    }
  }
  return [...new Set(result)];
}
