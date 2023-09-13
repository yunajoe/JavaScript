// 나의풀이
const makeObj = (str) => {
  let obj = {};
  [...str].forEach((value) => {
    obj[value] = (obj[value] || 0) + 1;
  });
  return obj;
};

function validAnagram2(str1, str2) {
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

// 해설풀이
function validAnagram(str1, str2) {
  // 길이 비교 . 같지 않으면 false return
  // str1를 obj로 만든다
  // str1의 obj의 key값이랑 str2문자열이랑 비교
  // obj[key]가 falsy한 값이 아니면은(undefined, 0)  obj[key] -=1
  // undfeind이 나오는 경우는, 아예 key값이 존재하지 않을떄이구 , 0이 나오는 경우는, 키는 있지만은 갯수가 맞지 않을떄
  let obj = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    obj[str1[i]] ? (obj[str1[i]] = obj[str1[i]] + 1) : (obj[str1[i]] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    if (!obj[str2[i]]) {
      return false;
    }
    obj[str2[i]] -= 1;
  }
  return true;
}
console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false)
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
