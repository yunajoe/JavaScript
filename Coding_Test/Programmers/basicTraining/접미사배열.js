// my_string에 끝 문자부터 ~ 첫문짜가지. .slicing하는데 idx+1 만큼
// >> 이렇게 idx가 출력이 되어야한다 [5], [4,5], [3,4,5], [2,3,4,5], [1,2,3,4,5], [0,1,2,3,4,5]
function solution(my_string) {
  let outer = [];
  for (let i = my_string.length - 1; i >= 0; i = i - 1) {
    let inner = [];
    for (let j = i; j <= my_string.length - 1; j++) {
      inner.push(j);
    }
    outer.push(inner);
  }
  return outer
    .map((arr) => my_string.slice(arr[0], arr[arr.length - 1] + 1))
    .sort();
}
