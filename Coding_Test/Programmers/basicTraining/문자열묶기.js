// runtime에러 장난아님..ㅎ
function solution(strArr) {
  var answer = 0;
  let obj = strArr.reduce((acc, str, idx) => {
    if (acc[str] == undefined) {
      acc[str] = str.length;
      return acc;
    }
  }, {});
  // obj >> {"a":1,"bc":2,"d":1,"efg":3,"hi":2}
  // value를 key값으로 하는 key를 value 값으로 하는 객체 만들기
  let objReverse = {};
  for (let key in obj) {
    value = obj[key];
    if (objReverse[value]) {
      objReverse[value].push(key);
    } else {
      objReverse[value] = [key];
    }
  }
  //  objReverse의 value값의 max값 구하기
  return Math.max(...Object.values(objReverse).map((arr) => arr.length));
}

// sol2)
function solution(strArr) {
  let counter = new Map();
  for (let str of strArr) {
    // counter.set(str.length, (counter.get(str.length) || 0) +1 )
    counter.set(
      str.length,
      counter.get(str.length) ? counter.get(str.length) + 1 : 1
    );
  }
  return Math.max(...counter.values());
}

// sol3)
function solution(strArr) {
  let obj = strArr.reduce((acc, str) => {
    let strLength = str.length;
    acc[strLength] = (acc[strLength] || 0) + 1;
    return acc;
  }, {});
  return Math.max(...Object.values(obj));
}

// sol3)
function solution(strArr) {
  const aa = strArr.map((v) => v.length);
  const count = {};
  for (let i = 0; i < aa.length; i++) {
    count[aa[i]] = count[aa[i]] ? count[[aa[i]]] + 1 : 1;
  }
  return Object.values(count).sort((a, b) => b - a)[0];
}

//sol4)
function solution(strArr) {
  let Arr = Object.values(
    strArr.reduce((acc, str) => {
      if (acc.hasOwnProperty(str.length)) {
        acc[str.length] += 1;
      } else {
        acc[str.length] = 1;
      }
      return acc;
    }, {})
  );
  return Math.max(...Arr);
}
