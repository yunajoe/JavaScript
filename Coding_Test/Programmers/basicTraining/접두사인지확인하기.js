// 시도1
// 이게 틀렸던 이유는 i는 0부터 시작하는데 prefix에도 0,0이 되기 때문이다
function solution(my_string, is_prefix) {
  if (my_string.length < is_prefix.length) {
    return 0;
  } else {
    for (let i = 0; i < my_string.length; i = i + is_prefix.length) {
      const prefix = my_string.slice(0, i);
      if (prefix === is_prefix) {
        return 1;
      } else {
        return 0;
      }
    }
  }
}
// 정확성: 73.9
// 합계: 73.9 / 100.0

function solution(my_string, is_prefix) {
  if (my_string.length < is_prefix.length) {
    return 0;
  } else {
    for (let i = 0; i < my_string.length; i += is_prefix.length) {
      if (i === 0) {
        continue;
      } else {
        let prefix = my_string.slice(0, i);
        return prefix === is_prefix ? 1 : 0;
      }
    }
  }
}

// sol2)

function solution(my_string, is_prefix) {
  return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0;
}

// sol3)
// my_string 길이가 is_prefix보다 작을경우, 같거나 클경우로 나눈다
// 같거나 클 경우 하나하나의 letter가 다르면 다른거쥬..
function solution(my_string, is_prefix) {
  if (my_string.length < is_prefix.length) {
    return 0;
  }
  for (let i = 0; i < is_prefix.length; i++) {
    if (my_string[i] !== is_prefix[i]) {
      return 0;
    }
  }
  return 1;
}

// sol4)

// is_prefix 글자로 시작하면은 true를 return 아니면 false를 return
function solution(my_string, is_prefix) {
  return my_string.startsWith(is_prefix) ? 1 : 0;
}

// sol5)
// is_prefix를 구분자로 나눠서, is_prefix가 my_string의 첫 글자로 시작하면은 첫 글자가 "" 이 된다
function solution(my_string, is_prefix) {
  return my_string.split(is_prefix)[0] === "" ? 1 : 0;
}

//sol6)
function solution(my_string, is_prefix) {
  // const regexExp = /^is_prefix/ >> 이렇게 하면은 안됨 (is_prefix가 동적으로 변하기 떄문에)
  const regexExp = new RegExp(`^${is_prefix}`);
  return regexExp.test(my_string) ? 1 : 0;
}
