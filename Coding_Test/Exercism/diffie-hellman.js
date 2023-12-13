//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isPrimeNumber = (value) => {
  if (value <= 1) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(value)); i++) {
    if (value % 2 === 0) return false;
  }
  return true;
};

class DiffieHellman {
  // prime numbers p and g.
  constructor(p, g) {
    if (!isPrimeNumber(p) || !isPrimeNumber(g)) throw new Error("error");
    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {
    if (privateKey > 1 && privateKey < this.p) {
      const publicKey = this.g ** privateKey % this.p; // alice
      return publicKey;
    }
    throw new Error("error");
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey ** myPrivateKey % this.p;
  }
}
