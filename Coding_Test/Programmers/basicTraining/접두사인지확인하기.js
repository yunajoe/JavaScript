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
