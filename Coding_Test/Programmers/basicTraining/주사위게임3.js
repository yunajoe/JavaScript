function solution(a, b, c, d) {
  const dic = [a, b, c, d].reduce((acc, str) => {
    acc[str] ? (acc[str] = acc[str] + 1) : (acc[str] = 1);
    return acc;
  }, {});
  const dicLength = Object.keys(dic).length;

  switch (dicLength) {
    case 1:
      const [num] = Object.keys(dic);
      return num * 1111;
      break;
    case 2:
      // 갯수가 1과 3 또는 2와 2로 나뉜다
      if (Object.values(dic).includes(2)) {
        let [p, q] = Object.keys(dic);
        p = Number(p);
        q = Number(q);
        return (p + q) * Math.abs(p - q);
      } else {
        // 콜백조건에 해당되는  첫번째 find((key))를 찾는 것이다
        let p = Object.keys(dic).find((key) => dic[key] === 3);
        let q = Object.keys(dic).find((key) => dic[key] === 1);
        p = Number(p);
        q = Number(q);
        return (10 * p + q) ** 2;
      }
      break;
    case 3:
      // 콜백조건에 해당되는 모든 filter((key))를 찾는 것이다
      let [q, r] = Object.keys(dic).filter((key) => dic[key] === 1);
      q = Number(q);
      r = Number(r);
      return q * r;
      break;
    case 4:
      const arr = Object.keys(dic).map((str) => Number(str));
      return Math.min(...arr);
      break;
  }
}

// sol2)
function makeObj(a, b, c, d) {
  const map = new Map();
  const arr = [a, b, c, d];
  arr.forEach((key) => {
    map.set(key, (map.get(key) || 0) + 1);
  });
  // dictionary key의unt로 정렬
  const sortedArr = [...map.keys()].sort((a, b) => map.get(b) - map.get(a));
  const minValue = Math.min(...map.values());
  return [sortedArr, minValue];
}
function solution(a, b, c, d) {
  const [arr, minValue] = makeObj(a, b, c, d);
  const [p, q, r, s] = arr;
  if (arr.length === 1) {
    return 1111 * p;
  } else if (arr.length === 2) {
    return minValue === 1 ? (10 * p + q) ** 2 : (p + q) * Math.abs(p - q);
  } else if (arr.length === 3) {
    return q * r;
  } else if (arr.length === 4) {
    return Math.min(...arr);
  }
}
