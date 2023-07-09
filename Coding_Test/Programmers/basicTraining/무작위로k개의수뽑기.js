function solution(arr, k) {
  let cnt = 0;
  let result = [];
  while (arr.length) {
    if (result.length === 0) {
      let ele = arr.shift();
      result.push(ele);
      cnt += 1;
    } else {
      let firstEle = arr.shift();
      let lastEle = result[result.length - 1];
      if (firstEle !== lastEle) {
        result.push(firstEle);
        cnt += 1;
      }
    }
    if (cnt === k) {
      break;
    }
  }
  if (result.length === k) {
    return result;
  } else if (result.length < k) {
    let num = k - result.length;
    const needArr = Array.from({ length: num }).fill(-1);
    const answer = [...result, ...needArr];
    return answer;
  }
}
