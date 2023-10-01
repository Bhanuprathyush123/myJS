
          /***** Genral Comparision Operators *****/
// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2<=1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log(1 + "2") // o/p 12
// console.log(2 + "1") // o/p 21
// In the above One value is Given As String  and want to add the value with number JS considers the Number as a String and Concatinates those values

// console.log(1 - "2")
// console.log(2 - "1")
// In the above example the string "1"/"2" is forcable is changed to the number type so it gets following output
// -1 1

// Equality check to check whether the tow values are equal or not => returns t/f
// 1 Strict Chcek (===) => checks the values data types if both are same DT'S => true if not => false
// console.log(5 === 5);       // Output: true
// console.log("hello" === "hello"); // Output: true
// console.log(5 === "5");     // Output: false (different data types)
// console.log(true === 1);    // Output: false (different data types)


// 2 loose equality(==) check only the values or equal or not but will not check DT's
// console.log(5 == 5);       // Output: true
// console.log("hello" == "hello"); // Output: true
// console.log(5 == "5");     // Output: true (loose equality performs type coercion)
// console.log(true == 1);    // Output: true (loose equality performs type coercion)

let userData = function () {
     return `userData`;
}
// console.log(typeof userData);

let usersData = {
     userName: "ABC",
     userAge: 30,
     userMail: "",
     userPhoneNumber :null
}
console.log(typeof userData.userName);
console.log(typeof userData.userAge);
console.log(typeof userData.userMail);
console.log(typeof userData.userPhoneNumber);