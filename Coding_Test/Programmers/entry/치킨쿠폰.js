// first-trial 실패
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

//  2nd-trial 성공!
function solution(chicken) {
  let serviceChickenCount = 0;
  let issuedCouponCount = 0;
  // 쿠폰 10장으로 chicken 1마리
  let coupon = chicken; // 원시타입의 값은 always deepcopy
  if (coupon < 10) {
    return 0;
  }
  let serviceChicken = Math.floor(coupon / 10);
  let issuedCoupon = coupon % 10;

  serviceChickenCount += serviceChicken;
  issuedCouponCount += issuedCoupon;

  while (serviceChicken !== 0) {
    issuedCoupon = serviceChicken % 10;
    serviceChicken = Math.floor(serviceChicken / 10);

    serviceChickenCount += serviceChicken;
    issuedCouponCount += issuedCoupon;
  }

  if (issuedCouponCount < 10) {
    return serviceChickenCount;
  }

  // 아래는 나머지 쿠폰이 10장이 남았을때 해당하는 경우, 예를 들어 chicken이 1999 경우 result는 222
  while (issuedCouponCount >= 10) {
    serviceChickenCount += Math.floor(issuedCouponCount / 10);
    issuedCouponCount =
      (issuedCouponCount % 10) + Math.floor(issuedCouponCount / 10);
  }
  return serviceChickenCount;
}
