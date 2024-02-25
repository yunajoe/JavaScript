function solution(n, slicer, num_list) {
  const [start, end, width] = slicer;
  switch (n) {
    case 1:
      return num_list.slice(0, end + 1);
    case 2:
      return num_list.slice(start);
    case 3:
      return num_list.slice(start, end + 1);
    case 4:
      const newArr = num_list.slice(start, end + 1);
      return newArr.filter((num) => num % width === 0);
  }
}

// 시도2)

function solution(n, slicer, num_list) {
  const [start, end, width] = slicer;

  switch (n) {
    case 1:
      return num_list.slice(0, end + 1);
    case 2:
      return num_list.slice(start);
    case 3:
      return num_list.slice(start, end + 1);
    case 4:
      // 아래가 안된 이유가 index를 고려해야 해야 하는데 array의 element요소로 고려함
      const start_num = num_list[start];
      const end_num = num_list[end];
      const answerArr = [];
      for (let i = start_num; i <= end_num; i = i + width) {
        answerArr.push(i);
      }
      return answerArr;
  }
}

// 정확성: 94.7
// 합계: 94.7 / 100.0

// sol1)

function solution(n, slicer, num_list) {
  let [a, b, c] = [...slicer];

  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      return num_list.slice(a, b + 1).filter((_, idx) => !(idx % c));
  }
}

// sol2)

function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;
  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      const answer = [];
      for (let i = a; i <= b; i = i + c) {
        answer.push(num_list[i]);
      }
      return answer;
  }
}

//sol3)
const slices = {
  1: (num_list, [a, b, c]) => num_list.slice(0, b + 1),
  2: (num_list, [a, b, c]) => num_list.slice(a),
  3: (num_list, [a, b, c]) => num_list.slice(a, b + 1),
  4: (num_list, [a, b, c]) =>
    num_list.slice(a, b + 1).filter((_, i) => i % c === 0),
};

function solution(n, slicer, num_list) {
  return slices[n](num_list, slicer);
}

/