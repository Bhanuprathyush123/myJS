// Arrays
let newArray = [0, 1, 2, 3, 4, 5]
// let redeclareArray = String(newArray)
// console.log(newArray[1]);

// Declaring Arrays with new KeyWord
let arr1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9)
// console.log(arr1[0]);

// ###### Array Methods ##### 
// arr1.push(0)
// arr1.pop()

// arr1.unshift(0)
// console.log(arr1);

// let strArr = newArray.join()

// console.log(newArray);
// console.log(strArr);

let newArray1 = newArray.slice(1, 3)
// console.log(`Original Array : ${newArray}`);
// console.log(`Sliced Array : ${newArray1}`);
// OutPut => Original Array : 0,1,2,3,4,5 ~ Sliced Array : 1,2

// console.log(`Original Array : ${newArray}`);

let newArray2 = newArray.splice(1, 3)
// console.log(`Original Array After Splice: ${newArray}`);
// console.log(`Spliced Array : ${newArray2}`);
// OutPut => Original Array : 0,1,2,3,4,5 ~ Original Array After Splice: 0,4,5 ~ Spliced Array : 1,2,3
// Slice will not change the values of Original Array but Splice Does it.

let sunny = []

for (let index = 0; index < 10; index++) {
     
     console.log(sunny.push(index))
   
}
console.log("----------");
console.log(sunny)