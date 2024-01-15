const encode = (str = "") => {
  let cnt = 1;
  let answer = "";
  return str.split("").reduce((acc, str, idx, arr) => {
    acc += str;
    const lastLetter = acc[acc.length - 1];
    if (lastLetter !== arr[idx + 1]) {
      answer += cnt > 1 ? cnt + lastLetter : lastLetter;
      cnt = 1;
      if (arr === acc) {
        return answer;
      }
    } else {
      cnt++;
    }
    return acc === arr.join("") ? answer : acc;
  }, "");
};

const decode = (str = "") => {
  let numLength = "";
  let answer = "";
  return str
    .split("")
    .map((char, idx) => {
      if (Number(char)) {
        numLength += char;
      } else {
        const num = Number(numLength);
        answer += num === 0 ? char : char.repeat(num);
        numLength = "";
      }
      return idx === str.length - 1 && answer;
    })
    .filter((item) => item)
    .join("");
};

console.log(decode("2 hs2q q2w2 "));
