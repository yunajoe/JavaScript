function solution(strings, n) {
  let result = [];
  let sortedArr;
  let obj = strings.reduce((acc, str, idx) => {
    str = str.toLowerCase();
    let uniNum = str.replace(str, str[n].charCodeAt(0));
    acc[uniNum] ? acc[uniNum].push(idx) : (acc[uniNum] = [idx]);
    return acc;
  }, {});
  let sortedObj = Object.fromEntries(
    Object.entries(obj).sort((a, b) => (Number(a[0]) > Number(b[0]) ? 1 : -1))
  );

  Object.values(sortedObj).forEach((arr, arrIdx) => {
    if (arr.length > 1) {
      sortedArr = arr.map((idx) => {
        return strings[idx];
      });
      sortedArr.sort();
      result[arrIdx] = sortedArr;
    } else {
      let value = strings[arr[0]];
      result[arrIdx] = value;
    }
  });
  return [].concat(...result);
}
