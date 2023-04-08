const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1. Explain the difference between forEach, map, filter, and reduce.

// 2. Define a callback function before you use it in forEach, map, filter or reduce.
/*
>>> Array.prototype.forEach()
forEach(callbackFn) (element, index, array)
forEach(callbackFn, thisArg)

Return value 
undefined

>>> Array.prototype.map()
map(callbackFn)  (element, index, array)
map(callbackFn, thisArg)

Return value
A new array with each element being the result of the callback function.

>>> Array.prototype.filter()
filter(callbackFn)  (element, index, array)
filter(callbackFn, thisArg)

Return value
A shallow copy of a portion of the given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. If no elements pass the test, an empty array will be returned.

>>> Array.prototype.reduce()
reduce(callbackFn)
reduce(callbackFn, initialValue) (accumulator, currentvalue, currentIndex, array)

Return value
The value that results from running the "reducer" callback function to completion over the entire array.


*/

// 3. Use forEach to console.log each country in the countries array.
countries.forEach((country) => {
  console.log(country);
});

// 4. Use forEach to console.log each name in the names array.
names.forEach((name) => {
  console.log(name);
});

// 5. Use forEach to console.log each number in the numbers array.
nubmers.forEach((number) => {
  console.log(number);
});

// 6. Use map to create a new array by changing each country to uppercase in the countries array.
const six = countries.map((country) => {
  return country.toUpperCase();
});

// 7. Use map to create an array of countries length from countries array.
const seven = countries.map((country) => {
  return country.length;
});

// 8. Use map to create a new array by changing each number to square in the numbers array
const eight = countries.map((number) => {
  return number ** 2;
});

// 9. Use map to change to each name to uppercase in the names array
const nine = names.map((name) => name.toUpperCase());

// 10. Use map to map the products array to its corresponding prices.
const ten = products.map((data) => {
  return data.price;
});

// 11. Use filter to filter out countries containing land.
const eleven = countries.filter((item) => {
  return item.includes("land");
});

// 12. Use filter to filter out countries having six character.
const twelven = countries.filter((item) => {
  return item.length === 6;
});

// 13. Use filter to filter out countries containing six letters and more in the country array.
const thirteen = countries.filter((country) => {
  return country.length > 6;
});

// 14. Use filter to filter out country start with 'E';
const fourteen = countries.filter((country) => {
  console.log(country.startsWith("E"));
});

// 15. Use filter to filter out only prices with values.
const fifteen = products.filter((item) => {
  return Object.values(item);
});

// 16.Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(value) {
  return typeof value === "string";
}

const sixteen = itemArr.filter(getStringLists);

// 17. Use reduce to sum all the numbers in the numbers array.
const seventeen = numbers.reduce((acc, number) => {
  return (acc += number);
});

// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const eighteen = countries.reduce((acc, country) => {
  return (acc += country + ", ");
});

// 19. Explain the difference between some and every
// every()는 배열의 모든 요소가 어떤 조건을 충족하는지 확인 ==>  배열의 모든 요소가 어떤 조건을 충족하는지 확인
// some()은  배열의 1개 요소라도 특정 조건을 충족하는지 확인하는데 사용
// every()는 모든 요소에 대해서 조건을 충족해야 true 리턴
// some()은 1개 요소만 충족해도 true를 리턴
// some의 경우, 어떤 요소가 조건을 충족하면 남아있는 요소들을 체크하지 않고 true 리턴 및 함수 종료. 남은 요소와 관계 없이 true를 리턴하기 때문에 남은 요소들을 확인할 필요 없음.
// every의 경우, 어떤 요소가 조건을 충족하지 못하면 남은 요소들을 체크하지 않고 false를 리턴. 남은 요소들이 조건을 충족해도 false가 리턴되기 때문에 체크할 필요 없음.
// Use some to check if some names' length greater than seven in names array

// 20. Use some to check if some names' length greater than seven in names array
function isCheckLength(element, index, arr) {
  return element.length > 7;
}
console.log(names.some(isCheckLength));

// 21. Use every to check if all the countries contain the word land
function Checktheword(element) {
  return element.includes("land");
}
// 22. Explain the difference between find and findIndex.

/*
The findIndex() method returns the index of the first element
in an array that satisfies the provided testing function.
If no elements satisfy the testing function, -1 is returned.

The find() method returns the first element
in the provided array that satisfies the provided testing function.
If no values satisfy the testing function, undefined is returned.   
*/

// 23. Use find to find the first country containing only six letters in the countries array
const twentythree = countries.find((country) => {
  return country.length === 6;
});

// 24 Use findIndex to find the position of the first country containing only six letters in the countries array
const twentyfour = countries.findIndex((country) => {
  return country.length === 6;
});

// 25 Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const twentyfive = countries.findIndex((country) => {
  return country === "Norway";
});

// 26 Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const twentysix = countries.findIndex((country) => {
  return country === "Russia";
});
