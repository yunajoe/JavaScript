// 각각의 조합의 최소값들을 비교하여 가장 작은 value가 optimal value이다
function minimumAbsoluteDifference(arr) {
  // Write your code here
  let minValue = 1000000000; // since arr[i] -10^9 <=arr[i] <= 10^9
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let val = Math.abs(arr[i] - arr[j]);
      if (minValue >= val) {
        minValue = val;
      }
    }
  }
  return minValue;
}
