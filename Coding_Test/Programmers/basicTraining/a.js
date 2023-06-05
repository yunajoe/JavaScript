// function calNum(n) {
//   let cnt = 0;
//   while (n != 1) {
//     if (n % 2 === 0) {
//       n = n / 2;
//       cnt += 1;
//     } else {
//       n = n - 1;
//       cnt += 1;
//     }
//   }

//   return cnt;
// }
// console.log(calNum(10));

function calNum(n) {
  let cnt = 0;
  while (n != 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = (n - 1) / 2;
    }
    cnt += 1;
  }
  return cnt;
}

// console.log(calNum(12));
