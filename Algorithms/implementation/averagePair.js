function averagePair(arr, avg) {
  arr.sort((a, b) => a - b);
  let value = avg * 2;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === value) {
      return true;
    } else if (arr[i] + arr[j] > value) {
      let temp = i;
      i++;
      j = temp;
    } else if (arr[i] + arr[j] < value) {
      // j가 끝까지 간다면은
      if (j === arr.length - 1) {
        i++;
        //  j=i+1 >>  이렇게 하면은 안되는 이유가,arr의 길이가 [1,2,3]이라고 할때
        // i가 0에서 1로 바뀐다고 할때.. i, =1 && j +=1는 2가 된다
        // for문에 의해서 2가 3이되서 조건문에 벗어나기 때문에( idx< arr.length)
        j = i;
      }
    }
  }
  return false;
}

function averagePair(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    // 평균이 value와 같다면은 return true를 한다
    // 평균이 value보다 크면은 end -- 를 한다
    // 평균이 value보다 작으면은 start ++를 한다 end를 start += 1 안해도 되는 이유가 어차피 end--로 하나씩 볼 것이기 떄문이다.
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === value) {
      return true;
    } else if (avg < value) {
      start++;
    } else if (avg > value) {
      end--;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
