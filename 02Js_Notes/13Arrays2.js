let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 0]
let arr3 = ["A", "B", "C", "D"]

let concatArray = arr1.concat(arr2,arr3)
// console.log(concatArray)

let new_Style_To_Declare_Array = [...arr1,...arr2,...arr3]
// console.log(new_Style_To_Declare_Array)
/* In summary, the "concat" method is a built-in method of arrays used for merging arrays, 
while the "spread" operator is a language feature introduced in ES6 that can be used for merging
 arrays, creating shallow copies, and adding elements to an array in a more concise and readable way. 
 Shallow Copy => a shallow copy only copies references to those nested objects/arrays, rather than creating new copies of them.*/
