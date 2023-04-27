//sol1)

function solution(n, control) {
  return control.split("").map((str) => {
    return str === "w"
      ? (n += 1)
      : str === "s"
      ? (n -= 1)
      : str === "d"
      ? (n += 10)
      : (n -= 10);
  })[control.length - 1];
}

// sol2)
function solution(n, control) {
  for (let i = 0; i < control.length; i++) {
    switch (control[i]) {
      case "w":
        n++;
        break;
      case "s":
        n--;
        break;
      case "d":
        n += 10;
        break;
      case "a":
        n -= 10;
        break;
    }
  }
  return n;
}
