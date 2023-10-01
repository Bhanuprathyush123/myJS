//We utilize variables to store data, and these variables can be redefined.
// For instance, when we have 'number = 20,' the term 'number' represents the variable, and '20' signifies the value stored within that variable.
// Types of variable declaration

// Atuomatic Declaration
number = 20;
// In this context, there is no need to use explicit keywords like 'let,' 'var,' or 'const' to declare variables.
// The variables and their corresponding values are automatically declared without requiring explicit keyword usage.Will Not give any ERRORS
 console.log(number); // by executing we get 20 as a output

// Declaring with Var KeyWord
 var userName = "Prathyush";
// In this context, we need to use 'var'since we want to use it
console.log(userName);   //Execution
     
// Note we Need to know there are So Many Cons in the KeyWord Var
// => Block Scope vs Function Scope , => Hoisting Brhavior (Asking the O/p Even before it is Declared), =>ReDeclaration And => Encouragoing Immutability

/*Block Scope vs Function Scope = Block scope refers to the area within curly braces {} where variables are accessible and have their own scope. 
 Variables declared using let and const within a block are limited to that block and are not accessible outside of it.
 On the other hand, function scope refers to the visibility of variables within a function and its nested functions.
 Variables declared using var have function scope and are accessible throughout the entire function in which they are defined, regardless of block boundaries. */
//  Example
if (true) {
     var x = 20;
     console.log(x)
}
console.log(x) 

/*
Hoisting Behavior:
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope during the compilation phase, even before they are executed. 
However, only the declarations are hoisted, not the assignments. 
So, when you try to access a variable before its actual declaration in the code, it won't throw an error, but the value will be undefined.
 */
// Example
console.log(x);
var x = 10; //O/P Undefined can be seen in Functions too.

/*
Redeclaration:
In JavaScript, you can redeclare a variable within the same scope using different keywords (let, var, or const). 
However, if a variable is already declared using const or let, you cannot redeclare it using the same keyword within the same scope. 
Redeclaring a variable using var is possible, but it can lead to unexpected behaviors and is generally discouraged
 */
//(EXAMPLE) 
var x = 20;
var x = 10;

console.log(x);

/*
Encouraging Immutability:
Immutability is a concept in programming where once a value is assigned to a variable, it cannot be changed or mutated. 
Encouraging immutability can lead to more predictable code and reduce the risk of unintended side effects. 
In JavaScript, you can achieve immutability by using const to declare variables and ensuring that objects and arrays are not modified directly but instead create new ones with the desired changes.
*/

// In order ECMA Intoduced "let" and " Const " in ES6


/* Var Summary
In JavaScript, `var` is the oldest way to declare variables. 
It allows variables to be function-scoped or globally scoped, enabling them to be accessed outside of the block in which they are defined.
Variables declared with `var` are hoisted to the top of their scope, but only the variable declaration, not the value assignment, is hoisted. 
Additionally, `var` permits variables to be redeclared within the same scope without any error.
 */

// Using Let
/*
`let` was introduced in ECMAScript 6 (ES6) to tackle certain problems associated with `var`.
When you declare variables with `let`, they have block scope, which means they are limited to the block they are defined in, like loops or if statements. 
Like `var`, `let` variables are hoisted to the top of their scope, but they stay uninitialized until the actual declaration statement is executed, resulting in what is known as the "temporal dead zone." 
However, unlike `var`, redeclaration of variables within the same block scope is not allowed with `let`.
 */

let con = "Corn";


function exampleFunction() {
     if (true) {
       let y = 20;
       console.log(y); // Output: 20
     }
     console.log(y); // Error: y is not defined (let is block-scoped)
}
console.log(exampleFunction());


// Using Const
/*
`const` is introduced in ES6 as a way to declare constants in JavaScript. 
Variables declared with `const` are block-scoped, just like `let`, meaning they are limited to the block where they are defined. 
Similar to `let`, `const` variables are hoisted to the top of their scope, but they stay uninitialized until the declaration statement is executed. 
Once defined, variables declared with `const` cannot be reassigned later, making them immutable. 
However, for complex data types like objects and arrays, the value itself can be modified even though the variable cannot be assigned a new reference.
*/

function exampleFunction() {
     const z = 30;
     console.log(z); // Output: 30
      z = 40; // Error: Assignment to constant variable
   }
// console.log(exampleFunction());   