function get_element_by_index(indexArr, originalArr) {
  answer = [];
  for (num of indexArr) {
    answer.push(originalArr[num]);
  }
  return answer;
}

function solution(array, n) {
  let find_indexes = [];
  const resultArr = array.map((number) => Math.abs(number - n));

  const minValue = resultArr.reduce((a, b) => Math.min(a, b));
  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] === minValue) {
      find_indexes.push(i);
    }
  }
  const answer = get_element_by_index(find_indexes, array);
  return Math.min(...answer);
}
