/*
if(arr1과 arr2의 길이가 같으면){
    let newArr1 = arr1의 원소들을 다 제곱하여 새로운 배열로 만든다.
    새로운 배열의 원소들이랑 arr2의 배열의 원소들이 다 같으면 true
}
return false
단순히 arr1의 원소가 arr2의 원소에만 있다고 확인하명는 X 갯수도 같아야... 
(return arr1.every((value) => arr2.includes(value));)
*/

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

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 1, 4])); // false
