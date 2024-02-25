function solution(myString, pat) {
  const newStr = myString
    .split("")
    .map((ele) => {
      return ele === "A" ? "B" : "A";
    })
    .join("");
  return newStr.includes(pat) ? 1 : 0;
}

// sol2)
const solution = (myString, pat) => {
  [...myString]
    .map((ele) => (ele === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0;
};

// sol3)

function solution(myString, pat) {
  const newStr = [...myString].reduce((acc, cur) => {
    if (cur === "A") {
      acc += "B";
    } else {
      acc += "A";
    }
    return acc;
  }, "");
  return newStr.includes(pat) ? 1 : 0;
}
