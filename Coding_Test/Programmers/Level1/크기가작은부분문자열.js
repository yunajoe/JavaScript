function solution(t, p) {
  let answer = 0;
  let leng = p.length;
  for (let i = 0; i < t.length; i++) {
    let letter = t.slice(i, i + leng);
    if (letter.length === leng && Number(letter) <= Number(p)) {
      answer++;
    }
  }
  return answer;
}
