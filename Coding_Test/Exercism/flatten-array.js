const flatten = (arr) => {
  let depth = 1;
  for (let i in arr) {
    if (Array.isArray(arr[i])) {
      depth++;
    }
  }
  if (depth >= 2) {
    return arr
      .flat(Infinity)
      .filter((ele) => ele !== null && ele !== undefined);
  }
  return arr.filter((ele) => ele !== null && ele !== undefined);
};

// sol2)
const isValidValue = (value) => value == null;
const flatten2 = (arr) => {
  return arr.reduce((acc, ele) => {
    if (Array.isArray(ele)) {
      return [...acc, ...flatten2(ele)];
    } else if (!isValidValue(ele)) {
      return [...acc, ele];
    }
    return acc;
  }, []);
};

//  sol3)
const isNaNValue = (value) => value == null;
export const flatten3 = (arr) => {
  return arr.reduce((acc, ele) => {
    return [
      ...acc,
      ...(Array.isArray(ele) ? flatten3(ele) : !isNaNValue(ele) ? [ele] : []),
    ];
  }, []);
};
