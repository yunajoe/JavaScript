function isPrime(n) {
  if (n === 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function primeCount(n) {
  let temp = 1,
    count = 0;
  if (n == 1) return 0;

  for (let i = 1; temp <= n; i++) {
    if (isPrime(i)) {
      if (temp < n) {
        temp *= i;
        count++;
      }
      if (temp === n) {
        return count;
      }
      if (temp > n) {
        return count - 1;
      }
    }
  }
}

console.log(primeCount(500));
