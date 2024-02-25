// 나의풀이;
const compareFunc = (arr1, arr2) => {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  return arr1.every((value, idx) => value === arr2[idx]);
};

function same(arr1, arr2) {
  if (arr1.length === arr2.length) {
    let newArr1 = arr1.map((num) => num ** 2);
    return compareFunc(newArr1, arr2);
  }
  return false;
}

// 해설풀이
/*
array들을 object로 만든다.
object1의 key**2이 obejct2에 있는지 확인 >> 우선, 키값만 확인 , 키가 없으면 return false!
obejct1 의 object1[key]값이 object[key**2]와 같은지 확인 >> 키에 해당되는 값을 확인

*/
function solution(arr1, arr2) {
  let obj1 = {};
  let obj2 = {};
  for (let value of arr1) {
    obj1[value] = (obj1[value] || 0) + 1;
  }
  for (let value of arr2) {
    obj2[value] = (obj2[value] || 0) + 1;
  }

  for (let key1 in obj1) {
    let value = key1 ** 2;
    // if(!value in obj2)
    if (!Object.keys(obj2).includes(value)) {
      return false;
    }
    if (obj1[value] !== obj2[value]) {
      return false;
    }
  }
  return true;
}

solution([1, 1, 2, 4], [1, 1, 4, 16]);
