// a, b를 number => string으로 바꾼다 ..
// a+b, b+a를 구한다 >> 각각을 number로 바꿔 비교 하여 a+b >=b+a 이면은 a+b를 return 그 외는 b+a
function solution(a, b) {
  a = a.toString();
  b = b.toString();
  return Number(a + b) >= Number(b + a) ? Number(a + b) : Number(b + a);
}

function solution(a, b) {
  return Math.max(
    +(a.toString() + b.toString()),
    +(b.toString() + a.toString())
  );
}
