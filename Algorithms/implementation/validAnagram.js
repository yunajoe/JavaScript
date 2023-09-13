// 나의풀이
const makeObj = (str) => {
  let obj = {};
  [...str].forEach((value) => {
    obj[value] = (obj[value] || 0) + 1;
  });
  return obj;
};

function validAnagram(str1, str2) {
  if (str1.length === 0 && str2.length) {
    return true;
  }
  let obj1 = makeObj(str1);
  let obj2 = makeObj(str2);
  // obj1의 key와 obje2의 key, 그리고 value값들이 같은지 check  같으면 true를 return
  return Object.keys(obj1).every((value) => {
    if (value in obj2 && obj2[value] === obj1[value]) {
      return true;
    }
    return false;
  });
}

console.log(validAnagram("", "")); // true,
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
