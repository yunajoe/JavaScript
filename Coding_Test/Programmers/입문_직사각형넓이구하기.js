// 배열의 첫번재 원소를 기준으로 정렬하여 사각형만들기  (이미지처럼 생각해보기)

function solution(dots) {
  dots.sort((a, b) => a[0] - b[0]);
  let height = Math.abs(dots[0][1] - dots[1][1]);
  let width = Math.abs(dots[0][0] - dots[2][0]);
  return width * height;
}
