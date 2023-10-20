// pick private keys, generate and share public keys,
// and then generate a shared secret key.
/*  
The test program supplies prime numbers p and g.  
private key ==> a greater than 1 and less than p   
앨리스는 a라는 key, Bob은 b라는 key 

--------------------------------------------------------------

step1 
Alice, Bob은 1부터 크고 p,q보다 작은 private key를 가진다   

step2
Alice는 public key A를 계산한다 

A = g ** a mod p 
B = g ** b mod g

step3
Alice and Bob 는 public key를 교환한다 
Alice는 Bob의 public key, b로 sereket s를 계싼한다 
Bob도 Alice의 public key, a로 serect s를 계산한다 

s = B**a mod p
s = A**b mod p

==> 이 두개는 같은 결과를 갖는다 
 Alice and Bob now share secret s.


*/
class DiffieHellman {}
