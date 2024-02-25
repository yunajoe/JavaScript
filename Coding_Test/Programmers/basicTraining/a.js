// new Map()으로 key 그리고 value는 key를 카운트하는 object을 만든다
// key값을 내림차순..

function makeObj(a, b, c, d) {
  const map = new Map();
  const arr = [a, b, c, d];
  arr.forEach((key) => {
    map.set(key, (map.get(key) || 0) + 1);
  });
  // dictionary key의unt로 정렬
  const sortedArr = [...map.keys()].sort((a, b) => map.get(b) - map.get(a));
  const minValue = Math.min(...map.values());
  const [Arr, min] = [sortedArr, minValue];
  return Arr;
}

console.log(makeObj(2, 5, 2, 6));
