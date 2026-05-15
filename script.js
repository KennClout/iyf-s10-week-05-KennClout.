// ==========================================
// VARIABLES
// ==========================================

const myName = "Kenneth";
const myAge = 20;
const isStudent = true;
const favoriteColors = ["Black", "Blue", "White"];
const todayDate = new Date();

console.log(myName);
console.log(myAge);
console.log(isStudent);
console.log(favoriteColors);
console.log(todayDate);


// ==========================================
// OPERATORS
// ==========================================

const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);


// ==========================================
// STRINGS
// ==========================================

const firstName = "John";
const lastName = "Doe";

const fullName = `${firstName} ${lastName}`;

console.log(fullName);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("John"));


// ==========================================
// FUNCTIONS
// ==========================================

function greet(name) {
  return `Hello, ${name}`;
}

const add = (x, y) => x + y;

const multiply = (x, y) => x * y;

function divide(x, y) {
  if (y === 0) {
    return "Cannot divide by zero";
  }

  return x / y;
}

console.log(greet("Kenneth"));
console.log(add(5, 10));
console.log(multiply(4, 5));
console.log(divide(10, 2));


// ==========================================
// PRACTICE FUNCTIONS
// ==========================================

function calculateArea(width, height) {
  return width * height;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function isEven(number) {
  return number % 2 === 0;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(calculateArea(5, 6));
console.log(celsiusToFahrenheit(30));
console.log(isEven(8));
console.log(reverseString("hello"));


// ==========================================
// CONTROL FLOW
// ==========================================

function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";

  return "F";
}

console.log(getGrade(85));


// ==========================================
// LOOPS
// ==========================================

// Numbers 1 - 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Even Numbers
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// ==========================================
// FIZZBUZZ
// ==========================================

for (let i = 1; i <= 20; i++) {

  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");

  } else if (i % 3 === 0) {
    console.log("Fizz");

  } else if (i % 5 === 0) {
    console.log("Buzz");

  } else {
    console.log(i);
  }
}


// ==========================================
// ARRAYS
// ==========================================

const fruits = ["apple", "banana", "orange"];

fruits.push("grape");

console.log(fruits);

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log(doubled);

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);

const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total);


// ==========================================
// OBJECTS
// ==========================================

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person.name);

person.email = "john@gmail.com";

console.log(person);


// ==========================================
// ARRAY OF OBJECTS
// ==========================================

const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 72 },
  { name: "Charlie", grade: 90 }
];

const topStudents = students.filter(student => student.grade > 80);

console.log(topStudents);


// ==========================================
// MINI CALCULATOR
// ==========================================

function calculate(num1, operator, num2) {

  switch(operator) {

    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      return num2 === 0
        ? "Cannot divide by zero"
        : num1 / num2;

    default:
      return "Invalid operator";
  }
}

console.log(calculate(10, "+", 5));
console.log(calculate(10, "/", 2));


// ==========================================
// DAILY CHALLENGES
// ==========================================

// Largest Number
function findLargest(arr) {
  return Math.max(...arr);
}

console.log(findLargest([3, 8, 2, 15, 6]));

// Remove Duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1,2,2,3,4,4,5]));

// Palindrome Checker
function isPalindrome(str) {

  const clean =
    str.toLowerCase().replace(/\s/g, "");

  return clean ===
    clean.split("").reverse().join("");
}

console.log(isPalindrome("racecar"));
