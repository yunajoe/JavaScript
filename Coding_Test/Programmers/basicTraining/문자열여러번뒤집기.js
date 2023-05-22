function solution(my_string, queries) {
  while (queries.length) {
    const [start, end] = queries.shift();
  }
  const str_split = my_string.split("");
  const [start, end] = queries.shift();
  const newWord = my_string
    .split("")
    .slice(start, end + 1)
    .reverse()
    .join("");
  str_split.splice(start, end - start + 1, newWord);
  return str_split.join("");
}
