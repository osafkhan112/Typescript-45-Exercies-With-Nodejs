// Define Variables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["Banana", "Orange", "Apple"];

// Test for equality and inequality with strings
console.log("Apple is Equal to Apple");
console.log(apple == "apple");

console.log("\nApple is not equal to apple");
console.log(apple != "apple");

// Test Using Lowercase Funtion
console.log("\nAPPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nAPPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

// Numerical Tests
// Equal To
console.log("\nTen is equal to twenty?");
console.log(ten == twenty);

// Not Equal to
console.log("\nTen is not equal to twenty?");
console.log(ten != twenty);

// Greater Than
console.log("\nTen is greater than zero?");
console.log(ten > 0);

// Less Than
console.log("\nTwenty is less than ten?");
console.log(twenty < ten);

// Greater than or equal to
console.log("\nTen is greater than or equal to five?");
console.log(ten >= 5);

// Less than or equal to
console.log("\nTwenty is less than or equal to ten?");
console.log(twenty <= 10);

// Tests using "and" & "or" Operators

// Using &&
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

// Using || (OR)
console.log("\n 20 is Greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is Greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

// Test Whether an item is include in array
console.log("\nIs Orange include in my Fruits array");
console.log(fruits.includes("Orange"));

// Not Include
console.log("\nIs Orange not include in my Fruits array");
console.log(!fruits.includes("Orange"));