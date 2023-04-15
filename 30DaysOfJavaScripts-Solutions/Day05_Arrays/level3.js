// 1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age

// 방법1 sort
ages.sort(function (a, b) {
  return a - b;
});

const minNum = ages[0];
const maxNum = ages[ages.length - 1];

// 방법2 reduce
const maxNum2 = ages.reduce((previous, current) => {
  return previous > current ? previous : current;
});

const minNum2 = ages.reduce((previous, current) => {
  return previous > current ? current : previous;
});

// 2. Find the median age(one middle item or two middle items divided by two)
const midNum = ages.length / 2;
if (ages.length % 2 === 0) {
  ages.slice(midNum, midNum + 2);
} else {
  console.log(ages.slice(midNum, midNum + 1));
}

// 3. Find the average age(all items divided by number of items)
let sumAges = ages.reduce((acc, cur) => {
  return (acc += cur);
});
const three = sumAges / ages.length;

// 4. Find the range of the ages(max minus min)
const fourMax = ages.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
const fourMin = ages.reduce((prev, curr) => {
  return prev > curr ? curr : prev;
});
const four = fourMax - fourMin;
// 5. Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
console.log(Math.abs(fourMin - three));
console.log(Math.abs(fourMax - three));
