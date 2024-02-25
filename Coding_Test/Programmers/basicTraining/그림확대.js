function solution(picture, k) {
  var answer = [];
  const arr = picture.map((ele) =>
    ele
      .split("")
      .reduce((acc, str) => {
        const strs = str.repeat(k);
        acc.push(strs);
        return acc;
      }, [])
      .join("")
  );
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < k; j++) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
