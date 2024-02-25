function solution(strArr) {
  const result = strArr.map((str, idx) => {
    if (str.includes("ad")) {
      return idx;
    }
  });

  if (result.every((element) => element === undefined)) {
    return strArr;
  } else {
    // 삭제해야할 indexList
    const removedIndexList = result.filter((element) => {
      return typeof element === "number";
    });
    let result2 = [];
    for (let i = 0; i < strArr.length; i++) {
      for (let idx of removedIndexList) {
        if (i !== idx) {
          result2.push(strArr[i]);
        }
      }
    }
    return result2;
  }
}

// 정확성: 15.4;
// 합계: 15.4 / 100.0;
