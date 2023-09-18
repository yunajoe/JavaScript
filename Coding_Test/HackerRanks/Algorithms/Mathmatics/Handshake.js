//  combination without repetition
function handshake(n) {
  // Write your code here
  let answer = 0;
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      answer++;
    }
  }
  return answer;
}
