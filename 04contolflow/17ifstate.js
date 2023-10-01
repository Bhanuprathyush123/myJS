// if (true) {
//      console.log("Statement IS True");
// }

// let userLoogedIn = false
// if (userLoogedIn != true) {
//      console.log("You'r  Logged In")
// } else {
//      console.log("You'r Not Logged In")
// }

// let userIsNewOrNot = false;
// if (userIsNewOrNot == true) console.log(`Please Enter Your Deatils`);
// if (userIsNewOrNot != false ) {
//      // console.log("Please Fill Details");
//      let detailsEnter = true
//      if (detailsEnter) {
//           let checkEmail = false;
//           if (checkEmail != false) {
//                console.log("Please Check Your Mail");
//           } else {
//                console.log("Verify Your Mail");
//           }
//      }
// }else {
//      console.log("You Need To log In");
// }

/* ************************************************************************ */

/* Switch Statements */
// Syntax => switch (key) {
//      case value:
          
//           break;

//      default:
//           break;
// }

// let month = 1 ;

// switch (month) {
//      case 1:
//           console.log("Jan");
//           break;
     
//      case 2:
//                    console.log("Feb");
//           break;
     
//      case 3:
//                    console.log("Mar");
//           break;
     
//      case 4:
//                    console.log("April");
//           break;
     
//      case 5:
//                    console.log("May");
//           break;
     
//      case 6:
//                    console.log("Jun");
//           break;
     
//      case 7:
//                    console.log("Jul");
//           break;
     
//      case 8:
//                    console.log("Aug");
//           break;
     
//      case 9:
//                    console.log("Sept");
//           break;
     
//      case 10:
//                    console.log("Oct");
//           break;
     
//      case 11:
//                    console.log("Nov");
//           break;
     
//      case 12:
//                    console.log("Dec");
//           break;

//      default:
//           console.log("Please Enter A Number");
//           break;
// }

// ternary Operator

// Syntax => condition ? true : false

let sum = 20;

// sum >= 20 ? console.log('Yes Sum Is less than/Equal to 20') : console.log("No");

/* ************************************************************************ */

// iterations
// for loop

// for (let index = 0; index < 10; index++) {
//      const element = index;
//      console.log(element);
// }

let arr = ["Flash", "IronMan", "BatMan", "SpiderMan"]

for (let index = 0; index < arr.length; index++) {
     const element = arr[index];
     // console.log(element)
}

// Break and Countinue

// for (let index = 0; index <= 10; index++) {
//      if (index == 1) {
//           console.log(`Detected : ${index}`)
//           break;
//      }
//      console.log(`Index Number is : ${index}`);
// }
// for (let index = 0; index <= 10; index++) {
//      if (index == 1) {
//           console.log(`Detected : ${index}`)
//           continue;
//      }
//      console.log(`Index Number is : ${index}`);
// }
