// "use strict" // treats all JS code as newer version

// Data Types In JavaScript
// 1) Primitive => $Numbers , $Strings , $Boolean , $Null , $Undefined , $Symbol

// Numbers 
// Integers
let number1 = 1234567890
console.log(number1)
console.log(typeof number1 + " is the type")
// Float
let number2 = 9.8;
console.log(number2)
console.log(typeof number2 + " is the type")
// Double
let number3 = 6.57;
console.log(number3)
console.log(typeof number3 + " is the type")
// Note In JS Script All Interger Flot Double etc are Considered As Numbers DataType.

// Strings 
let userName = 'UserName'
console.log(userName)
console.log(typeof userName + " is the type")
/* We have the option to declare a string value using either single quotes or double quotes (''/" "). 
However, when declaring with single quotes, there might be an issue. For example,*/

// Boolean
let isGraduate = 3 > 2;
console.log(isGraduate)
console.log(typeof isGraduate)
/* Boolean is a data type that evaluates whether a given value is true (where 1 represents true) or false (where 0 represents false). 
By default, the Boolean holds the value false.*/

// Null
let number = null;
console.log(number)
console.log(typeof number)
/* Null is a data type employed when a programmer wishes to declare a variable but does not assign any value to it. 
The type that null represents is an OBJECT. 
This stems from a bug present since the first version of JavaScript, and attempting to alter it might disrupt the entire programming language.*/

// Undefined 
let a;
console.log(a +" This is The Type Of Variable a " +typeof a)
/* Represents a variable that has been declared but not assigned a value.  */

// Symbol
let sY = Symbol("ABC")
console.log(sY +" This is The Type Of Variable a " +typeof sY)
// console.log(typeof sY)
/* Introduced in ECMAScript 6, represents a unique and immutable value, often used as object keys. */

