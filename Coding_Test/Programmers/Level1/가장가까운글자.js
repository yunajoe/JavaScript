function solution(s) {
  // 문자열에서 처음글자가 나오면은 -1
  // 2번째부터 는 자신보다 먼저 나와있으면 가까운 글자와의 거리 (즉, 배열에서는 인덱스차이)를 return한다
  // 우선 indexof랑 lastIndexof랑 해서 그 인덱스가 같지 않으면은 -1를
  let arr = [...s];

  return arr.map((val, idx, arr) => {
    let firstIdx = arr.indexOf(val);
    let lastIdx = arr.lastIndexOf(val);
    // 하나밖에 없다는것
    if (firstIdx === lastIdx) {
      return -1;
    }
    // 두개이상 있을 때
    let beforeIdx = arr.lastIndexOf(val, idx - 1);
    return beforeIdx === -1 ? beforeIdx : idx - beforeIdx;
  });
}
