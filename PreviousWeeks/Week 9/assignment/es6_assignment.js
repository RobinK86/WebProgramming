// es6_assignment.js
// Robin Kelley
// Web Programming - ES6 Assignment

// -----------------------------
// Task 1 – Variables (let vs const)
// -----------------------------
const course = "Web Programming";
let students = 30;
students = students + 5;

console.log("Task 1:");
console.log("Course:", course);
console.log("Students:", students);

// -----------------------------
// Task 2 – Arrow Functions
// -----------------------------
const square = (number) => number * number;

console.log("\nTask 2:");
console.log(square(5));

// -----------------------------
// Task 3 – Template Literals
// -----------------------------
let name = "Alice";
let age = 21;
let city = "Dallas";

console.log("\nTask 3:");
console.log(`My name is ${name}, I am ${age} years old, and I live in ${city}.`);

// -----------------------------
// Task 4 – Array Destructuring
// -----------------------------
let fruits = ["Apple", "Banana", "Cherry"];
let [firstFruit, secondFruit, thirdFruit] = fruits;

console.log("\nTask 4:");
console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);

// -----------------------------
// Task 5 – Object Destructuring
// -----------------------------
let student = {
    name2: "Alice",
    major: "Computer Science",
    year: "Senior"
};

let { name2, major, year } = student;

console.log("\nTask 5:");
console.log(name2);
console.log(major);
console.log(year);

// -----------------------------
// Task 6 – Spread Operator
// -----------------------------
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = [...arr1, ...arr2];

console.log("\nTask 6:");
console.log(combinedArray);

// -----------------------------
// Task 7 – Array Method (map)
// -----------------------------
let numbers1 = [1, 2, 3, 4];
let multipliedNumbers = numbers1.map((num) => num * 3);

console.log("\nTask 7:");
console.log(multipliedNumbers);

// -----------------------------
// Task 8 – Array Method (filter)
// -----------------------------
let numbers2 = [5, 10, 15, 20, 25];
let filteredNumbers = numbers2.filter((num) => num > 15);

console.log("\nTask 8:");
console.log(filteredNumbers);

// -----------------------------
// Task 9 – Array Method (forEach)
// -----------------------------
let colors = ["Red", "Green", "Blue"];

console.log("\nTask 9:");
colors.forEach((color) => {
    console.log(color);
});