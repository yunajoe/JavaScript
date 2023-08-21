// obj만들기 >>  key를 element로 value를 각 key에 해당하는 갯수?
// array의 개수가 1개일 때 고정으로 1을 return 하고 있어서 문제가 발생합니다.
function solution(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    const obj = array.reduce((acc, num) => {
      acc[num] ? (acc[num] += 1) : (acc[num] = 1);
      return acc;
    }, {});
    const valueArr = Object.values(obj);
    const maxNum = Math.max(...valueArr);
    // maxNum의 indexOf 와 lastIndexOf
    const arrs = Object.entries(obj);
    const resultArr = arrs
      .map((arr) => {
        let [key, value] = arr;
        if (maxNum === value) {
          return key;
        }
      })
      .filter((ele) => ele !== null && ele !== undefined);
    return resultArr.length === 1 ? Number(resultArr[0]) : -1;
  }
}

// 영환님 풀이
function solution(array) {
  var answer = 0;
  const unique = Array.from(new Set(array));
  const reduced = unique.reduce((sum, cur) => {
    const length = array.filter((data) => data === cur).length;
    sum.push(length);
    return sum;
  }, []);
  const max = Math.max(...reduced);
  const result = reduced.filter((data) => data === max);
  const maxIndex = reduced.findIndex((data) => data === max);
  return result.length > 1 ? -1 : unique[maxIndex];
}

//sol3)
const solution = (array) => {
  const counter = array.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: (acc[cur] || 0) + 1,
    }),
    {}
  );

  const items = Object.keys(counter)
    .map((key) => [Number(key), counter[key]])
    .sort((a, b) => b[1] - a[1]);

  if (items[0][1] === items?.[1]?.[1]) {
    return -1;
  }

  return items[0][0];
};
