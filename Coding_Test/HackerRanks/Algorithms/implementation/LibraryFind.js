function libraryFine(d1, m1, y1, d2, m2, y2) {
  // Write your code here
  // 연도가 due date가 클 때
  if (y1 < y2) {
    return 0;
  }
  // 연도가 같애도 due date 월이 더 클때
  else if (y1 <= y2 && m1 < m2) {
    return 0;
  }
  // 연도랑 월이 같애도 due date 일이 크거나 같을때
  else if (y1 <= y2 && m1 <= m2 && d1 <= d2) {
    return 0;
  }
  // day
  else if (y1 <= y2 && m1 <= m2 && d1 > d2) {
    return 15 * (d1 - d2);
  }
  // month
  else if (y1 <= y2 && m1 > m2) {
    return 500 * (m1 - m2);
  }
  // year
  else if (y1 > y2) {
    return 10000 * (y1 - y2);
  }
}
