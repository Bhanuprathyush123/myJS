// Object Literals => Collection of Key-Value Inclosed with in Brackets{}
let newObj = {
     //key : "Value of Key" (It can be any type of Data => String,Number,Boolean etc)
     // lets take an instance
     property1: "ASDF",
     property2: 2,
     property3 : true
}

// logging the Object
// console.log(newObj);
// OutPut : { property1: 'ASDF', property2: 2, property3: true }

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// logging a value => We Can Log a Single value of OBJECT using DOT-Notation / Square-Bracket-Notation
// Dot Notation
// console.log(newObj.property1)

// Square-Bracket Notation => when using it declare property/Key as String  (Mostly use this Notation)
// console.log(newObj["property1"]);

let newObj2 = {
     userName: 'Prathyush',
     userDOB: "19-11-2001",
    "userMail" : "prathyush@google.com"
}

// console.log(newObj2.userDOB);

// console.log(newObj2.userName);

// console.log(newObj2["userMail"]);

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// console.log(`This a Example Object: ${newObj}`);
// In the above line we are trying to concatenate "This a Example Object" with newObj.
// So JS when we try any thing to concatenate with String The value/Object is converted to String
// So we get Out-Put as => This a Example Object: [object Object]

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// And If we want to do it we can convert it explicitly using `JSON.stringify` for instance we can know see it
// Object after explicitly converting
// console.log(`Object after explicitly converting `);
// console.log("This a Example Object: " + JSON.stringify(newObj));
// we can also declare this like
// let latestObj = "This is a Example Object: " + JSON.stringify(newObj);
// console.log(`This is a Explicitly Declared Object : ${latestObj}`);
/*
Oup-Put : This is a Explicitly Declared Object : 
                    This is a Example Object: {"property1":"ASDF","property2":2,"property3":true}
*/


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// adding a symbol to Object 
let newSym = Symbol("MYNAME");
let newObj3 = {
     userName: 'Prathyush',
     userDOB: "19-11-2001",
     [newSym] : "mySymbol",
     "userMail": "prathyush@google.com"
}

// console.log(newObj3[newSym])//OutPut => mySymbol
// console.log(typeof newObj3[newSym]) //OutPut => string
// console.log(newObj3)
// OutPut After adding Symbol
/*
{
  userName: 'Prathyush',
  userDOB: '19-11-2001',
  userMail: 'prathyush@google.com',
  [Symbol(MYNAME)]: 'mySymbol'
}
 */

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// String IntrerPolation => By Using BackStick (``)
let myName = "Shiva";
// console.log(`My Name is : ${myName}`); // OutPut => My Name is : Shiva it's a general thing to Know Not related to Object

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// Declaring Functions in OBJECTS
newObj3.welcomGreetngs = function () {
     console.log("Hello User, Welcome:" + " " +newObj3.userName)
}
// console.log(newObj3.welcomGreetngs());
// console.log("----------------------------------------");
// using Interploation

newObj3.welcomGreetngsToUser = function () {
     console.log(`Hello User, Welcome : ${newObj3.userName}`)
}
// console.log(newObj3.welcomGreetngsToUser());

newObj3.Class = "Middle-Class";
// console.log(newObj3);
// console.log("----------------------------------------");

newObj3.mobileNumber = 901234;
// console.log(newObj3);

// console.log("----------------------------------------");

// Object.freeze(newObj3);
newObj3.Class = 'Upper-Class';
// console.log(newObj3);

// console.log("----------------------------------------");

// Defining Objects Using Slingleton/ Object.
const myUsers = new Object();
myUsers.userName = "Prathyush"
myUsers.userId = '123'
myUsers.userPassword = "19Nov"
console.log(myUsers);

let newReg = {
     newUser: {
          userNames: "Prathyush",
          userPersanals: {
               userDateOfBirth: 'DOB',
               userAge: 19,
               userGender: 'M'
          },
          userEMail: 'salman@gmail.com',
          userLoginPassword: 'salman@Prathyush',
          registeredUser: {
               userEMail: 'salman@gmail.com',
               userLoginPassword: 'salman@Prathyush'
          }
     }
};
// console.log(newReg.newUser.registeredUser);