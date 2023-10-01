// Syntax to create a Promis

// const { reject } = require("async");

// const newPromise = new Promise(function (resolve,reject) {
     
// })

// new Promise((resolve,reject) => {
     
// })

// const prmise = new Promise(function (resolve, reject){
//      setTimeout(() => {
//           console.log('Promise 1'); 
//           resolve()  
//      },1000);
// });

// prmise.then(() => {
//      console.log('Promise Completed');
// })

const promise = new Promise(function (res, rej) {
     setTimeout(() => {
          console.log("Worked");
          res()
     }, 1000)
});

promise.then(() => {
     console.log('retired');
})