// 2) Reference  => $Object , $Array , $Function
// object
const userData = {
     userName: "Prathyush",
     userAge: 22,
     userId : "19MD1A0547"
}
console.log(userData) 
/* output { userName: 'Prathyush', userAge: 2 2, userId: '19MD1A0547' } */

// 1 Accessing the Objects
console.log(userData.userName);
/* here we get only constraint that we want from the Object userData */

// 2 Adding/Modifying Properties
userData.userState = "Andhara"
userData.userAge = 21;
console.log(userData)
/* We are now including a new property to the previously declared object. 
Not only that we can modify the property of the object example userData.age = 21;
If we use 'console.log' on the object 'userData,' the output will be as follows: 
{ userName: 'Prathyush', userAge: 22, userId: '19MD1A0547', userState: 'Andhara'}*/


// 3 Nested Object
let school = {
     schoolName: "AB School",
     schoolEstablished : 2001 ,
      student : {
          studentName: "Srii",
          studentAge: 15,
          studentid: 19
     },
}
console.log(school)
/* In the context of objects, a nested object is regarded as a property of the main object. 
In this specific case, 'student' is an object nested within the 'School' object, and the output is as follows: \
 {
  schoolName: 'AB School',
  schoolEstablished: 2001,
  student: { studentName: 'Srii', studentAge: 15, studentid: 19 }
}*/

// 4 Object Methods
const calculator = {
     add: function (a, b) {
       return a + b;
     },
     subtract: function (a, b) {
       return a - b;
     },
     multiply: function (a, b) {
          return a * b;
     }
   };
   
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2
console.log(calculator.multiply(9, 10))
console.log(calculator)
// Objects can also have methods, which are functions stored as properties.

// Object Iteration
// var person;
// for (const key in person) {
//      console.log(`${key}: ${person[key]}`);
//    }
   
   // Using Object.keys()
//    const keys = Object.keys(person);
//    for (const key of keys) {
//      console.log(`${key}: ${person[key]}`);
//    }
// You can loop through an object's properties using various methods, such as for...in loop or Object.keys().

// Object property Deletion
delete calculator.subtract;
console.log(calculator)

// Object Reference and Comparison
const obj1 = { value: 10 };
const obj2 = obj1; // obj2 now references the same object as obj1
obj2.value = 20;
console.log(obj1.value); // Output: 20 (modified via obj2)
/*
Objects are reference types in JavaScript. 
When you assign an object to a variable or pass it as a function argument, you are working with a reference to the original object, not a copy. 
This means that changing a property of an object will affect all references to that object.
 */

// Object Constructors and Prototypes
// Constructor function
function Person(name, age) {
     this.name = name;
     this.age = age;
   }
   
   Person.prototype.greet = function () {
     console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
   };
   
   const person1 = new Person("John Doe", 30);
   person1.greet();
/* JavaScript allows you to create object blueprints (classes) using constructor functions and prototypes. 
ES6 introduced class syntax for this purpose. */

// Object Serialization and Deserialization
const person = { name: "John Doe", age: 30 };
const jsonString = JSON.stringify(person);
console.log(jsonString); // Output: '{"name":"John Doe","age":30}'

const parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson.name); // Output: "John Doe"

/* You can convert objects to strings (serialization) using JSON.stringify() and parse strings back to objects (deserialization) using JSON.parse(). */

