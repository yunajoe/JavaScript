function solution(my_string, queries) {
  let answer;
  while (queries.length) {
    let Arr = [...my_string];
    let range = queries.shift();
    let [start, end] = range;
    let replaceWords = Arr.slice(start, end + 1).reverse();
    Arr.splice(start, end - start + 1, ...replaceWords);
    my_string = Arr;
    answer = Arr;
  }
  return answer.join("");
}

// sol2)
function solution(my_string, queries) {
  let strArr = my_string.split("");
  queries.forEach(([start, end]) => {
    replacedWords = strArr.slice(start, end + 1);
    strArr.splice(start, replacedWords.length, ...replacedWords.reverse());
  });
  return strArr.join("");
}

// sol3)
function solution(my_string, queries) {
  return queries
    .reduce((acc, [start, end]) => {
      let words = acc.slice(start, end + 1).reverse();
      acc.splice(start, words.length, ...words);
      return acc;
    }, Array.from(my_string))
    .join("");
}
