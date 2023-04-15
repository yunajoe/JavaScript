const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "Mon"]; // 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let cleanText = text.replace(/[^\w\s]/gi, "");
let str = cleanText.split(" ");

let answer = {};
for (let s of str) {
  if (answer[s]) {
    answer[s] += 1;
  } else {
    answer[s] = 1;
  }
}

// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat");
// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar");
// remove 'Honey' if you are allergic to honey
const honeyIdx = shoppingCart.indexOf("Honey");
shoppingCart.splice(honeyIdx, 1);

// modify Tea to 'Green Tea'
const TeaIndx = shoppingCart.indexOf("Tea");
shoppingCart.splice(TeaIndx, 1, "GreenTea");

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes("Ethiopia")) {
  console.log("Ethiopia");
} else {
  countries.push("Ethiopia");
}

//5 . In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes("Sass")) {
  console.log("Sass");
} else {
  webTechs.push("Sass");
}

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const six = [...frontEnd, ...backEnd];
// 다른풀이
const sixTwo = frontEnd.concat(backEnd);
