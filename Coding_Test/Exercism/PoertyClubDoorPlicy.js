export function frontDoorResponse(line) {
  return line[0];
}
export function frontDoorPassword(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function backDoorResponse(line) {
  line = line.trim();
  return line[line.length - 1];
}

export function backDoorPassword(word) {
  return frontDoorPassword(word) + ", please";
}

// sol2)

export function frontDoorResponse(line) {
  return line[0];
}
export function frontDoorPassword(word) {
  let password = word.toLowerCase();
  return password[0].toUpperCase() + password.substring(1);
}

export function backDoorResponse(line) {
  let backResponse = line.trim().slice(-1);
  return backResponse;
}

export function backDoorPassword(word) {
  let firstLetter = word.charAt(0).toUpperCase();
  let restLetter = word.slice(1);
  return `${firstLetter}${restLetter}, please`;
}
