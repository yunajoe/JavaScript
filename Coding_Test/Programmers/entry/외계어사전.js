function solution(spell, dic) {
  var answer = 0;
  spell.sort();
  letter = spell.join("");
  let result = dic
    .map((word) => {
      let newWord = [...word].sort().join("");
      if (newWord.includes(letter)) {
        return newWord;
      }
    })
    .filter((ele) => ele);
  return result.length === 0 ? 2 : 1;
}

// sol2)
function solution(spell, dic) {
  return dic.filter((word) => {
    return spell.every((letter) => word.includes(letter));
  }).length
    ? 1
    : 2;
}
