const ROMAN_LETTER = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
  V: 5,
  VI: 6,
  VII: 7,
  VIII: 8,
  IX: 9,
  X: 10,
  XX: 20,
  XXX: 30,
  XLV: 40,
  L: 50,
  LX: 60,
  LXX: 70,
  LXXX: 80,
  XC: 90,
  C: 100,
  D: 500,
  M: 1000,
};

const convert_object = (obj) =>
  Object.entries(obj).map(([key, value]) => ({
    value,
    key,
  }));

const toRoman = (targetNum) => {
  const result = String(targetNum)
    .split("")
    .map((num, idx, acc) => {
      return num * 10 ** (acc.length - (idx + 1));
    });

  const finalArray = result.map((num) => {
    const ROMAN = convert_object(ROMAN_LETTER);
    return ROMAN.map((obj) => {
      if (num === obj["value"]) {
        return obj["key"];
      }
    }).filter((item) => item);
  });

  return finalArray;
};

console.log(toRoman(402));
