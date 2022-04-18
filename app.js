console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log('Add: ${add}, Minus: ${minus}, Multiply: ${multiply}, Divide: ${divide}, Exp: ${exp}, Mod: ${mod})'
let a = 20;
let b = 4;
let add = a + b;
let minus = a - b;
let multiply = a * b;
let dividing = a / b;

// Exercise 2
console.log("EXERCISE 2:\n==========\n");
let a = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie"; 
let lastName = "Chan"; 

// What is the value of: a + str?
// 1111
// What is the value of: a + str2?
// 11eleven 
// What is the value of: a + isPresent?
// 12 
// What is the value of: a + firstName?
// 11Jackie 
// What is the value of: a + lastName? 
// 11Chan 

// Exercise 3
console.log("EXERCISE 3:\n==========\n"); 
let d = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;
let firstName2 = "Robin";
let lastName2 = "Williams"; 

// What is the value of: d == str3?
console.log(d == str3)  // true
// What is the value of: d === str3?
console.log(d === str3) // false 
// What is the value of: !isPresent2?
console.log(!isPresent2) // true
// What is the value of: ("eleven" == str4 && d >= str3)?
console.log("eleven" == str4 && d >= str3) // false 
// What is the value of: (!isPresent2 || isPresent2)?
console.log(!isPresent2 || isPresent2) // true 
// What is the value of: 0 == false?
console.log(0 == false) // true
// What is the value of: 0 === false?
console.log(0 === false) // false 
// What is the value of: 0 != false?
console.log(0 != false) // false
// What is the value of: 0 !== false? 
console.log(0 !== false) // true 