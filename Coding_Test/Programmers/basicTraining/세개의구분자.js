function solution(myStr) {
  const regex = /a|b|c/g;
  return myStr.split(regex).filter((str) => str !== "").length === 0
    ? ["EMPTY"]
    : myStr.split(regex).filter((str) => str !== "");
}
