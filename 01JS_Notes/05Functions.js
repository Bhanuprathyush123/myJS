// Functions
 
// 1 Fuction Declaration
function greet() {
     return "Hello User"
}
// console.log(greet())

// Passsing a Argument in Function 
function wish(name) {
     return `Whish You Many More Happy Returns Of The Day, ${name}! `;
          // return `Hello, ${name}!`;
        
}
// let readline = require('readline');
// console.log(wish("Prathyush"))

// function expression
let add = function (a, b) {
     return a+b
}
// console.log(add(5,3))

// Arrow Function
let multiply = (a, b) => a * b;
// console.log(multiply(10, 2))

// function Invoking
let result = add(5, 2)
// console.log(result)


// Retunr Statement
function subtract(a,b){ return a-b}
// console.log(subtract(10, 90))

// Default Parameters
function greetings(name = "Guest") {
     return `HELLO ${name}!`
}
// console.log(greetings())

// Higher-Order Functions
/* Functions that operate on other functions by taking them as arguments or returning them are called higher-order functions. */
function doTwice(func, value) {
     return func(func(value));
}
   
function addOne(x) {
     return x + 1;
}
   
const results= doTwice(addOne, 5); // Output: 7 (addOne(addOne(5)))
// console.log(results)

// Closures
/*
Closures are functions that remember the environment in which they were created, even after the outer function has finished executing.
 */
function createCounter() {
     let count = 0;
     return function () {
       return ++count;
     };
}
   
const counter = createCounter();
// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2
   

// IIFE (Immediately Invoked Function Expression)
/* An IIFE is a function that is executed immediately after it's defined. 
It is enclosed in parentheses to prevent polluting the global scope. */
(function () {
     // IIFE code here
     return 'Hello'
})();
   

// Recursion
/* A function can call itself during its execution. This technique is called recursion and is useful for solving problems that can be broken down into smaller, similar subproblems. */
function factorial(n) {
     if (n === 0 || n === 1) {
       return 1;
     } else {
       return n * factorial(n - 1);
     }
}
// console.log(factorial(20)) //output 2432902008176640000


// Hoisting 
// console.log(sayHello()); // Output: "Hello!"

function sayHello() {
  return "Hello!";
}