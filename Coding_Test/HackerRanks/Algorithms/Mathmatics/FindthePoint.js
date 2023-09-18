//rx, rx는 px, py의 points랑 180도에 놓여 있고
//qx-px 의 거리와 rx-qx의 거리가 같다
//qy-py의 거리와 ry-qy의 거리가 같다
function findPoint(px, py, qx, qy) {
  // Write your code here
  let result = [];
  // qx - px === rx - qx
  // qy - py === ry - qy
  let rx = 2 * qx - px;
  let ry = 2 * qy - py;
  result.push(rx, ry);
  return result;
}
