function lowestTriangle(trianglebase, area) {
  let h = 2 * area * (1 / trianglebase.toFixed(1));
  return Math.ceil(h);
}
