const arr = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
function solution(numbers) {
  const num = arr.reduce((acc, value, idx) => {
    return acc.replaceAll(value, idx);
  }, numbers);
  return Number(num);
}

// sol2)

// 이 화살표 함수는 정규 표현식으로 찾은 각각의 영어 단어를 v라는 매개변수로 받아들이고, 그에 해당하는 숫자로 변환하여 반환
// 정규식 & obj를 사용하기
function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  // 문자열을 찾는 regex. 정규표현식에서 ||는 안됨
  const regex = /zero|one|two|three|four|five|six|seven|eight|nine/g;
  const result = numbers.replace(regex, (v) => {
    return obj[v];
  });
  return Number(result);
}

// sol3)
function solution(numbers) {
  const number = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < number.length; i++) {
    numbers = numbers.split(number[i]).join(i);
  }
  return Number(numbers);
}
