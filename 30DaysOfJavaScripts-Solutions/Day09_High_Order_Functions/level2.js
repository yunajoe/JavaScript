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
// filter로 price만 뽑는당
//

// 1.Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
// sol1)
const one = products
  .filter((item) => {
    if (typeof item.price === "number") {
      return item;
    }
  })
  .reduce((accumulator, currentvalue) => {
    return (accumulator = accumulator + currentvalue.price);
  }, 0);

const oneTwo = products
  .filter((item) => typeof item.price === "number")
  .reduce((acc, cur) => (acc += cur.price), 0);

// 2.Find the sum of price of products using only reduce reduce(callback))
const two = products.reduce((acc, cur) => {
  return typeof cur.price !== "string" ? (acc += cur.price) : acc;
}, 0);

// 3.Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const categorizeCountrie = countries.filter((item) => {
  if (item.slice(-4) === "land" || item.slice(-4) === "Land") {
    return item;
  }
});

const categorizeCountreis2 = (arr) => {
  return arr.filter((item) => item.endsWith("en"));
};

console.log(categorizeCountreis2(countries));

// 4.Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

// 5.Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// 6.Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// 7.Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
