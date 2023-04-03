function splitIntoArrayandCount(num) {
  const count = {};
  const arr = Array.from(String(num));
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = (count[arr[i]] || 0) + 1;
  }
  return count;
}

function solution(i, j, k) {
  let cnt = 0;
  for (let start = i; i <= j; i++) {
    const splitArr = splitIntoArrayandCount(i);
    const k_str = k.toString();
    // splitArr.k_str 하면은 모두 undefined로 나온다.. 왜징?
    let answer = splitArr[k_str] ? splitArr[k_str] : 0;
    cnt += answer;
  }
  return cnt;
}
