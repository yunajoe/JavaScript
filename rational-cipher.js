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

const rotate = (str, num) => {
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

// sol2)
const convertLetter = (letter, initLetter, num) =>
  String.fromCharCode(
    ((letter.charCodeAt(0) - initLetter + num) % 26) + initLetter
  );

const rotate2 = (letters, num) => {
  return letters
    .replace(/[a-z]/g, (letter) =>
      convertLetter(letter, "a".charCodeAt(0), num)
    )
    .replace(/[A-Z]/g, (letter) =>
      convertLetter(letter, "A".charCodeAt(0), num)
    );
};
