function solution(start, end) {
  // (_,i) ==> 첫번째 parameter는 배열의 요소, 두번째 parameter는 배열의 인덱스값
  const result = Array.from({ length: end - start + 1 }, (_, i) => i + start);
  return result;
}
