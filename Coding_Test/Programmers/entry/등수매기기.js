function solution(score) {
  const scoreAverage = score
    .map((arr) => {
      return arr.reduce((total, ele) => {
        total += ele;
        return total;
      }, 0);
    })
    .map((score) => score / 2);
  const copyScoreAverage = [...scoreAverage];
  return scoreAverage.map((score) => {
    let idx = copyScoreAverage.sort((a, b) => b - a).indexOf(score);
    return idx + 1;
  });
}

// sol2)
function solution(score) {
  let avgScore = score.map((value) => (value[0] + value[1]) / 2);
  let sortedArr = avgScore.slice().sort((a, b) => b - a);
  return avgScore.map((v) => sortedArr.indexOf(v) + 1);
}
