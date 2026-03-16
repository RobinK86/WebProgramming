// Before ES6
var name = "John";
var age = 20;

age = 21

console.log(name);
console.log(age);  

// After ES6
const name = "John";
let age = 20;

age = 21

console.log(name);
console.log(age);

// Arrow Function
const calc = (a, b) =>  a + b;

console.log(calc(5, 3));  // Output: 8

// Template Literals
let product = "laptop";
let price = 1100;

// Old way
console.log("The "+ product + " costs $" + price + ".");

// New way
console.log(`The ${product} costs $${price}.`);

// Write Hello Programmers using arrow function and template literals
const greet = (name) => `Hello ${name}!`;
console.log(greet("Programmers"));