const menu = {
  iceamericano: 4500,
  americanoice: 4500,
  hotamericano: 4500,
  americanohot: 4500,
  americano: 4500,
  anything: 4500,
  icecafelatte: 5000,
  cafelatteice: 5000,
  hotcafelatte: 5000,
  cafelattehot: 5000,
  cafelatte: 5000,
};

function solution(order) {
  return order
    .map((coffee) => menu[coffee])
    .reduce((total, money) => {
      return total + money;
    }, 0);
}
