function solution(keyinput, board) {
  let result = [0, 0];
  let [width, height] = board;
  width = Math.floor((width - 1) / 2);
  height = Math.floor((height - 1) / 2);
  let newBoard = [width, height];
  // plus, minus를 나누자?
  let firstLetter = keyinput[0]; // firstLetter로 시작을 하면은 같음 표시가 없고 나머지는 다 있따
  if (firstLetter === "left") {
    for (let i = 0; i < keyinput.length; i++) {
      if (keyinput[i] === "left") {
        if (result[0] >= 0 && result[0] < width) {
          result[0] -= 1;
        } else if (result[0] < 0 && result[0] > -width) {
          result[0] -= 1;
        }
      } else if (keyinput[i] === "right") {
        if (result[0] >= 0 && result[0] <= width) {
          result[0] += 1;
        } else if (result[0] < 0 && result[0] >= -width) {
          result[0] += 1;
        }
      } else if (keyinput[i] === "down") {
        if (result[1] >= 0 && result[1] <= height) {
          result[1] -= 1;
        } else if (result[1] < 0 && result[1] >= -height) {
          result[1] -= 1;
        }
      } else if (keyinput[i] === "up") {
        if (result[1] >= 0 && result[1] <= height) {
          result[1] += 1;
        } else if (result[1] < 0 && result[1] >= -height) {
          result[1] += 1;
        }
      }
    }
  } else if (firstLetter === "right") {
    for (let i = 0; i < keyinput.length; i++) {
      if (keyinput[i] === "left") {
        if (result[0] >= 0 && result[0] <= width) {
          result[0] -= 1;
        } else if (result[0] < 0 && result[0] >= -width) {
          result[0] -= 1;
        }
      } else if (keyinput[i] === "right") {
        if (result[0] >= 0 && result[0] < width) {
          result[0] += 1;
        } else if (result[0] < 0 && result[0] > -width) {
          result[0] += 1;
        }
      } else if (keyinput[i] === "down") {
        if (result[1] >= 0 && result[1] <= height) {
          result[1] -= 1;
        } else if (result[1] < 0 && result[1] >= -height) {
          result[1] -= 1;
        }
      } else if (keyinput[i] === "up") {
        if (result[1] >= 0 && result[1] <= height) {
          result[1] += 1;
        } else if (result[1] < 0 && result[1] >= -height) {
          result[1] += 1;
        }
      }
    }
  } else if (firstLetter === "up") {
    for (let i = 0; i < keyinput.length; i++) {
      if (keyinput[i] === "left") {
        if (result[0] >= 0 && result[0] <= width) {
          result[0] -= 1;
        } else if (result[0] < 0 && result[0] >= -width) {
          result[0] -= 1;
        }
      } else if (keyinput[i] === "right") {
        if (result[0] >= 0 && result[0] <= width) {
          result[0] += 1;
        } else if (result[0] < 0 && result[0] >= -width) {
          result[0] += 1;
        }
      } else if (keyinput[i] === "down") {
        if (result[1] >= 0 && result[1] <= height) {
          result[1] -= 1;
        } else if (result[1] < 0 && result[1] >= -height) {
          result[1] -= 1;
        }
      } else if (keyinput[i] === "up") {
        if (result[1] >= 0 && result[1] < height) {
          result[1] += 1;
        } else if (result[1] < 0 && result[1] > -height) {
          result[1] += 1;
        }
      }
    }
  } else if (firstLetter === "down") {
    for (let i = 0; i < keyinput.length; i++) {
      if (keyinput[i] === "left") {
        if (result[0] >= 0 && result[0] <= width) {
          result[0] -= 1;
        } else if (result[0] < 0 && result[0] >= -width) {
          result[0] -= 1;
        }
      } else if (keyinput[i] === "right") {
        if (result[0] >= 0 && result[0] <= width) {
          result[0] += 1;
        } else if (result[0] < 0 && result[0] >= -width) {
          result[0] += 1;
        }
      } else if (keyinput[i] === "down") {
        if (result[1] >= 0 && result[1] < height) {
          result[1] -= 1;
        } else if (result[1] < 0 && result[1] > -height) {
          result[1] -= 1;
        }
      } else if (keyinput[i] === "up") {
        if (result[1] >= 0 && result[1] <= height) {
          result[1] += 1;
        } else if (result[1] < 0 && result[1] >= -height) {
          result[1] += 1;
        }
      }
    }
  }
  return result;
}

//합계: 63.6 / 100.0
