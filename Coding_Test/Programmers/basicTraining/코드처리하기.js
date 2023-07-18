function solution(code) {
  let ret = "";
  let mode = 0;
  let codeArr = [...code];
  for (let idx = 0; idx < codeArr.length; idx++) {
    if (mode === 0) {
      if (idx % 2 === 0) {
        if (code[idx] !== "1") {
          ret += code[idx];
        } else {
          mode = 1;
        }
      } else {
        if (code[idx] === "1") {
          mode = 1;
        }
      }
    } else {
      if (idx % 2 !== 0) {
        if (code[idx] !== "1") {
          ret += code[idx];
        } else {
          mode = 0;
        }
      } else {
        if (code[idx] === "1") {
          mode = 0;
        }
      }
    }
  }
  if (ret.length === 0) {
    ret = "EMPTY";
  }
  return ret;
}
