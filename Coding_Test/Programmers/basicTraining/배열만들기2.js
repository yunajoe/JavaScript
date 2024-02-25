// l과 r의 범위에 해당되는 5의배수에서
// 5, 10, 15.. 이렇게 나오면은 [1,0].. 이렇게 두고
// [1,0] 에서 5와 0 이외의 배열을 out
function OnlyFiveZero(value) {
  return value === 5 || value === 0;
}
function solution(l, r) {
  let arrs = [];
  for (let i = l; i <= r; i += 5) {
    let arrSplit = String(i)
      .split("")
      .map((ele) => Number(ele)); // [ 5, 0, 0 ]
    arrs.push(arrSplit);
  }
  // 각각의 array들의 원소가 5 또는 0 으로만 이루어져 있으면은 true  & 아니면은 false
  let trueFalseArr = arrs.map((arr) => arr.every(OnlyFiveZero));
  // 위에서 true값에 해당하는 array의 index를 반환. 없으면은 []
  const trueFalseIndexArr = trueFalseArr
    .map((ele, idx) => {
      if (ele === true) return idx;
    })
    .filter((ele) => ele !== undefined); // [0,9,10,99,100,109,110], []
  // arrs가 true값에 해당의 하는 array들을 원본을 가지고 있으니 여기서 해당 인덱스에 해당하는 배열을 ㄱeturn
  return trueFalseIndexArr.length !== 0
    ? trueFalseIndexArr.map((idx) => Number(arrs[idx].join("")))
    : [-1];
}

// 정확성: 45.5;
// 합계: 45.5 / 100.0;   

//sol2)   
// 범위가 l이상 r이하의 정수를 구한다
//  (5의 배수 또는 10의 배수를 구한다 )
// 정수가 5 또는 0 을 includes하는지 check 한개라도 
function isIncluded(ele){
  return ele === 5 || ele === 0
}      
function solution(l, r) {
  let index_arr = []
  let num_arr =[]
  for(let i=l; i<=r; i++){
      if(i % 5 === 0 || i % 10 ===0){
          let arr = i.toString().split('').map((ele) => Number(ele))             
          index_arr.push(arr.every(isIncluded))
          num_arr.push(arr)
      }
  }
  // l부터 r범위 사이에 수들중에서 위의 조건(5또는 10으로 나눠지는 수 중에서 그 수가 5나 0으로만 이루어진)에 만족하는 수들의 인덱스      
  let new_index_arr = index_arr.map((bol, idx) =>{
      if(bol === true){
          return idx
      }
  }).filter((ele) => ele !== undefined)        
  
 return new_index_arr.length === 0 ? [-1] : new_index_arr.map((ele) => Number(num_arr[ele].join("")))      
}   

// sol3)   
function solution(l, r) {
    const arr = Array.from(String(r)).fill(false)
    arr[arr.length-1] = true
    const result = []
    while (!arr.every(v => v === false)) {
        const num = Number(arr.map(v => v ? 5 : 0).join(''))
        if (num >= l && num <= r) result.push(num)
        for (let i = arr.length-1; i >= 0; i -= 1) {
            arr[i] = !arr[i]
            if (arr[i]) break
        }
    }
    return result.length === 0 ? [-1] : result
}

// sol4) 
// 숫자 5로 현혹시켰지만 사실 이건 이진수 문제임.
function* gen50() {
    let i = 1;

    while(true) {
        yield Number(Number(i).toString(2)) * 5;
        i++;
    }
}
function solution(l, r) {
    const n = gen50();
    let a = 0;
    const arr = [];

    while(a < l) { a = n.next().value; }
    while(a <= r) { arr.push(a); a = n.next().value; }

    return arr.length ? arr : [-1];
}


