// (x1 ∨ x2) ∧ (x3 ∨ x4)
//  a ∧ b >>  a 또는 b 중 하나라도 false 이면은 false . 즉 둘다 true여야지 true (&&)
// a v b >> a 또는 b중 하나라도  true 이면은 true . 둘다 false여야지 false (||)
function solution(x1, x2, x3, x4) {
  let result1 = x1 || x2;
  let result2 = x3 || x4;
  return result1 && result2;
}
