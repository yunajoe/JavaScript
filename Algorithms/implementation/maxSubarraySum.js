// sliding window pattern

// sol1)
function maxSubarraySum(arr, n) {
  let maxNum = 0;
  let result = 0;
  if (arr.length === 0) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j <= i + n - 1; j++) {
      if (i > arr.length - n) {
        break;
      }
      result += arr[j];
    }
    if (result > maxNum) {
      maxNum = result;
    }
    result = 0;
  }
  return maxNum;
}

// sol2)
function maxSubarraySum(arr, n) {
  // arr의 길이가 n보다 작으면은 더하지를 못하기때문에 return
  if (arr.length < n) {
    return null;
  }
  let maxSum = 0;
  let tempSum = 0;
  // arr의 첫번째 n만큼의 합을 구한다
  for (let i = 0; i < n; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum; // 6

  // 다음 arr[i]를 더하고, 결과값의 첫번쨰 arr[i]만큼 뺸다
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - n];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}
