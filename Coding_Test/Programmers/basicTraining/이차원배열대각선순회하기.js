function solution(board, k) {
  let answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j <= k) {
        answer += board[i][j];
      }
    }
  }
  return answer;
}
// other

function solution(board, k) {
  return board.reduce((acc, arr, idx) => {
    return arr.reduce((acc2, arr2, idx2) => {
      if (idx + idx2 <= k) {
        return acc2 + arr[idx2];
        // 조건을 만족하지 않는 경우에도 반환값을 줘야한다
      } else {
        return acc2;
      }
    }, acc);
  }, 0);
}

// sol2
function solution(board, k) {
  return board.reduce(
    (total, row, i) =>
      total + row.reduce((prev, num, j) => (i + j <= k ? prev + num : prev), 0),
    0
  );
}

// sol3

function solution(board, k) {
  return board
    .map((x, i) => x.filter((_, j) => i + j <= k))
    .flat(1)
    .reduce((p, c) => p + c);
}

// sol4)

function solution(board, k) {
  return board
    .map((v, i) =>
      v.filter((s, j) => (i + j <= k ? s : 0)).reduce((a, b) => a + b, 0)
    )
    .reduce((a, b) => a + b, 0);
}
