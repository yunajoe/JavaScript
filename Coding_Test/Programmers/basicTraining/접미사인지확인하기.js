// idx를 0,1,2,3,4,5 ~ length-1 까지 slicing해서 is_suffix와 비교한다

function solution(my_string, is_suffix) {
  for (let i = 0; i < my_string.length; i++) {
    if (my_string.slice(i) === is_suffix) {
      return 1;
    }
  }
  return 0;
}

// sol2
/*  
is_suffix의 길이가 my_string보다 크면 X >>> 0 
같거나 작을경우는 
is_siffix >> ana 즉, 3길이일때  my_string일때..my_string.slice(3)
is_suffix >> 길이가 4일때..my_string.slice(2)
즉, slicing해야 하는 n은 전체 길이 - is_suffix길이  
*/

function solution(my_string, is_suffix) {
  return is_suffix.length > my_string.length
    ? 0
    : my_string.slice(my_string.length - is_suffix.length) === is_suffix
    ? 1
    : 0;
}

// sol3
// String.prototype.endsWith("검사할문자") >> 검사할문자로 끝나면 true, 아니면 false
const solution = (str, suffix) => (str.endsWith(suffix) ? 1 : 0);
