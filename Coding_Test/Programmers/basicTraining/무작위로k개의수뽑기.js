// !!! k상관없이 앞에서부터 중복이 아닌 요소만 push한다
// 우선 result = []에 arr를 push
// result = [0] >>
// arr요소를 처음부터 순회하면서 result = [0]이랑 비교 result에 없는 값이면은 arr요소를 push
// result = [0,1] .. arr요소를 처음부터 순회하면서

// arr  = [0,1,1,2,2,3]  & result []
// shift하고
// arr = [1,1,2,2,3] result = [0]
// shift하고 그 값을 result에 있는지 비교
// 1이니까 result에 없으니까 push result = [0,1]
// 또shift
// result에 있으니까 pass
// [2,2,3] result에 에 없으니까 push result = [0,1,2]

// sol1)
function solution(arr, k) {
  let result = [];
  while (arr.length) {
    let ele = arr.shift();
    // 빈배열일때는 무조건 push
    if (result.length === 0) {
      result.push(ele);
      continue;
      // 빈배열이 아닐때는 shift한 값이랑 result값이랑 비교
    } else {
      for (let i = 0; i < result.length; i++) {
        if (ele !== result[i]) {
          result.push(ele);
        } else if (ele === result[i]) {
          continue;
        }
      }
    }
  }
  return result;
}

// sol2)

// !!! k상관없이 앞에서부터 중복이 아닌 요소만 push한다
// 우선 result = []에 arr를 push
// result = [0] >>
// arr요소를 처음부터 순회하면서 result = [0]이랑 비교 result에 없는 값이면은 arr요소를 push
// result = [0,1] .. arr요소를 처음부터 순회하면서

// arr  = [0,1,1,2,2,3]  & result []
// shift하고
// arr = [1,1,2,2,3] result = [0]
// shift하고 그 값을 result에 있는지 비교
// 1이니까 result에 없으니까 push result = [0,1]
// 또shift
// result에 있으니까 pass
// [2,2,3] result에 에 없으니까 push result = [0,1,2]

function solution(arr, k) {
  let result = [];
  while (arr.length) {
    let ele = arr.shift();
    // 빈배열일때는 무조건 push
    if (result.length === 0) {
      result.push(ele);
      continue;
      // 빈배열이 아닐때는 shift한 값이랑 result값이랑 비교
    } else {
      // ele = 1익이고 result = [0,1] 일일ㅇ 청처음처음붙처음부터 달다른다른걸 push함하면하면은 .. 자자웅자우에 걸 빅비굫비교핮비교하지 못못한못한다
      let value;
      for (let i = 0; i < result.length; i++) {
        if (ele === result[i]) {
          break;
        }
      }
    }
  }
  return result;
}

let arr = [0, 1, 1, 2, 2, 3];
let k = 3;
solution(arr, k);
