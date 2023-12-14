const alphabet = "abcdefghijklmnopqrstuvwxyz";

const checkIsAlphabet = (str) => {
  const regex = /[a-zA-Z]/g;
  return regex.test(str);
};

const findLetter = (str, num) => {
  const IsUpper = str === str.toUpperCase();
  const ignoreCaseStr = str.toLowerCase();
  const targetIdx = (alphabet.indexOf(ignoreCaseStr) + num) % 26;
  return IsUpper
    ? alphabet[targetIdx].toUpperCase()
    : alphabet[targetIdx].toLowerCase();
};

export const rotate = (str, num) => {
  return str
    .split("")
    .map((item) => {
      if (checkIsAlphabet(item)) {
        return findLetter(item, num);
      }
      return item;
    })
    .join("");
};
