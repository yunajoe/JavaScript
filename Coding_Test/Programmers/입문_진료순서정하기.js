function solution(emergency) {
  const newEmergency = emergency.slice();
  // 아래처럼 sort메서드를 사용하면 원본 배열이 바꾸기 때문에 object shallowcopy를 해준당
  emergency.sort(function (a, b) {
    return b - a;
  });
  let dic = {};
  for (let i = 0; i < emergency.length; i++) {
    dic[emergency[i]] = i + 1;
  }
  //  newEmergency 배열을 돌면서 dictionary key와 같을때 배열대신에 value값 넣어주기
  for (let k in dic) {
    // includes는 true 또는 false를 return한당
    k = parseInt(k);
    if (newEmergency.includes(k)) {
      const keyIdx = newEmergency.indexOf(k);
      newEmergency.splice(keyIdx, 1, dic[k]);
    }
  }
  return newEmergency;
}

// 정확성: 75.0;
// 합계: 75.0 / 100.0;
