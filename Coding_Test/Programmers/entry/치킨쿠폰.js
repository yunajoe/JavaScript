function solution(chicken) {
  let serviceChicken = 0;
  let resCouponTotal = 0;
  if (0 <= chicken && chicken < 10) {
    return 0;
  }
  let firstResCoupon = chicken % 10;
  resCouponTotal += firstResCoupon;
  while (Math.floor(chicken / 10) !== 0) {
    chicken = Math.floor(chicken / 10);
    let resCoupon = chicken % 10;
    serviceChicken += chicken;
    resCouponTotal += resCoupon;
  }
  if (resCouponTotal >= 10) {
    serviceChicken += Math.floor(resCouponTotal / 10);
  }
  return serviceChicken;
}

// 정확성: 88.1;
// 합계: 88.1 / 100.0;
