function myName(){
     console.log("Prathyush");
}

// myName()

/* ****************** */

function addtion(number1, number2) {
     if (number1 === number2){
          let updatedNumber = number1 + number2;
          return (`The Addtion Of Two Numbers : ${updatedNumber}`)
          // console.log(`The Addtion Of Two Numbers : ${updatedNumber}`);
     } else if (number1 == 0 || number2==0){
          let updatedNumber = number1 + number2;
          return (`The Addtion Of Two Numbers : ${updatedNumber}`)
          // console.log(`The Addtion Of Two Numbers : ${updatedNumber}`);
     }
     else {
          return (`You Need To Enter Number Not A String Or Null values`)
          // console.log (`You Need To Enter Number Not A String Or Null values`);
     }
     
}


let result = addtion(2,2)
// console.log(result , typeof(result))

function exampleFunction1(userName) {
     // console.log(`Hi, Welcome ${userName}:`);
     return `${userName},You Logged in `
}

let res = exampleFunction1('Pra')
// console.log(res); //Hi, Welcome Pra Pra, Logged in
// console.log( "You should consloe log when you use return In Your Function if Not It'll not get Printed " ,exampleFunction1('Prathyush'));

/* ****************** */

// Rest Op => ...
function cartProducts(num1) {
     return num1
}
// console.log(`Here We only have One Parameter: ${cartProducts(1)}`); 
/* Here We only have One Parameter: 1 */
console.log("----------------");
// console.log("What if We want to have More Parameters we can't pass 100's/1000's of parameter into a Function to avoid this we have REST Operator In JavaScript it is same as Sperad the only thing catchy is where do we use it");
// Let's use it 
console.log("----------------");
function productsInCart(...num) {
     return num
}
let res2 = productsInCart(200,300,400)
// console.log(`The Magic Is : ${res2}`);
/* The Magic Is : 200,300,400 */
console.log("----------------");
// console.log(res2)
/* rest Operator converts all the Parameters into Array => [ 200, 300, 400 ] */

/* ****************** */
// Passing Objects in Function

function school(anyObject) {
     return anyObject;
}

console.log(school({
     schoolName: "ASD",
     schoolAddres: 'QWDAEEDDASDQED',
     schoolNumber:"7892130234"
}))

/* ****************** */

// Passing Arrays
