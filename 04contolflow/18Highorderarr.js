// for of

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// for (const iterator of arr) {
//      console.log(arr)
// }

let userName = "Varrey Shiva Ganesh Bhanu  Prathyush"
for (const name of userName) {
     if (name == " ") {
          continue;
     }
     // console.log(`For Each : ${name}`);

}


// iteration in objects => for in loop
// let userDetails = {
//      userName: "Prathyush",
//      userAge: 22,
//      userDOB: '19/11/2001',
//      userEducation: {
//           userHighEd: "Under-Graduation",
//           userYOPO: "2023/06/1",
//           userGrade : "6.57 / 10"
//      }
// }

// for (const key in userDetails) {
//    console.log(`This is Key : ${key} , And the value is : ${userDetails[key]}`);
    // // if (userDetails.hasOwnProperty(key)) {
     // No need
    // // }
// }

// Map 
let map = new Map()

// setting the Keys and Values in Map

map.set('IN', "India")
map.set('UN', "United-Nations")
map.set('CH', "China")
map.set('UK', "United-KingDom")

// console.log(map);

let lang = ['JS', 'C++', 'Python', 'Java', 'Ruby']
for (const key in lang) {
//     console.log(`Key of Array : ${key},Value Of Arrar : ${lang[key]}`);
}

// foreach 
let coding = ['JS', 'C++', 'Python', 'Java', 'Ruby']

// coding.forEach(function (arrayValues) {
//      console.log(arrayValues);
// });

/* this is by using arrow function */
// coding.forEach(element => {
      // console.log(element);
// });