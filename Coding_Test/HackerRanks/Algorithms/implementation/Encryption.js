function encryption(s) {
  let answer = "";
  let str = s
    .split(" ")
    .filter((val) => val)
    .join("");
  let row = Math.floor(Math.sqrt(str.length));
  let column = Math.ceil(Math.sqrt(str.length));
  let idx = 0;
  let result = [];

  while (idx !== str.length) {
    let sub = str.slice(idx, idx + column);
    result.push(sub);
    idx += column;
  }
  for (let j = 0; j < result.length; j++) {
    for (let k = 0; k < result.length; k++) {
      answer += result[k][j];
    }
    answer += " ";
  }
  return answer;
}

console.log(encryption("haveaniceday"));
