function solution(a, b) {
  // 두개의 식을 구한다음 비교
  // 2 * a * b  vs 하나는 문자열로 만든다음 =>  다시 숫자로 반환
  var answer = 0;
  let compare1 = Number(a.toString() + b.toString());
  let compare2 = 2 * a * b;
  return compare1 > compare2 ? compare1 : compare2;
}
