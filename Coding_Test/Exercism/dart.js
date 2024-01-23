const score = (x, y) => {
  const d = x ** 2 + y ** 2;
  if (d >= 0 && d <= 1) return 10;
  if (d > 1 && d <= 25) return 5;
  if (d > 25 && d <= 100) return 1;
  return 0;
};

// sol2)
const POINTS = [
  [1, 10],
  [5, 5],
  [10, 1],
  [Infinity, 0],
];
const score2 = (x, y) => POINTS.find((point) => Math.hypot(x, y) <= point[0]);
