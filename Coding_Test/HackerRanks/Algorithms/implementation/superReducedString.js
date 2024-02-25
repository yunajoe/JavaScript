function superReducedString(s) {
  // Write your code here
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      let beforeArr = s.slice(0, i);
      let afterArr = s.slice(i + 2);
      // join("")
      s = [...beforeArr, afterArr].join("");
      i = -1;
    }
  }
  return s.length !== 0 ? s : "Empty String";
}
