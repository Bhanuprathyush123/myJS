// Arrays

//1 Array Ceation
let arr = [1, 2, 4, ,] // By using Array literals
// console.log(arr)

// Using Array constructor
let vehical = ["Bike", "Car", [1, 2, 3, 4,]];
// console.log(vehical)

//2 Finding Array Lenght
let Lenght = vehical.length
// console.log(Lenght)

//3 Accessing Array
let arr1 = [1, 2, 3, 4, 5, 6]
// console.log(arr1)
// console.log(arr1[0])//output is 1
/* let arr1 = [1, 2, 3, 4, 5, 6] this are place values =>
              (0  1  2  3  4  5). In arrays the place/index value starts form 0 end with N(number of elements in an array) */

//4 Modifying Array
arr1[2] = 2;
// console.log(arr1)

//5 Array Methods
/* 
     Arrays have numerous built-in methods to perform common operations such as adding/removing elements, searching for elements, and more.
     Adding and Removing Elements:
                              push(element): Adds an element to the end of the array.
                              pop(): Removes the last element from the array.
                              unshift(element): Adds an element to the beginning of the array.
                              shift(): Removes the first element from the array.
     Concatenation and Slicing:
                              concat(array1, array2, ...): Concatenates two or more arrays.
                              slice(startIndex, endIndex): Extracts a portion of the array and returns a new array.
     Searching and Filtering:
                         indexOf(element, startIndex): Returns the index of the first occurrence of the specified element.
                         lastIndexOf(element, startIndex): Returns the index of the last occurrence of the specified element.
                         find(callback): Returns the first element that satisfies the callback function's condition.
                         filter(callback): Returns a new array containing elements that satisfy the callback function's condition.
     Iteration:
               forEach(callback): Executes a provided function once for each array element.
               map(callback): Creates a new array with the results of calling a provided function on every element.
               reduce(callback, initialValue): Applies a function against an accumulator and each element to reduce the array to a single value.
     Array Conversion:
               toString(): Converts the array to a comma-separated string.
               join(separator): Joins all array elements into a string using the specified separator.
*/


//6 Array Iteration 
let numbers = [1, 2, 3, 4, 5, 6]
// using for loop
for (let start = 0; start < numbers.length; start++){
     // console.log(numbers[start]);
}

numbers.forEach((start) => {
     // console.log(start)
})

//7 Multidimensional Array
let matrix = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]]
// console.log(matrix)

//8 Array Destructing 
const [first, second, third] = numbers;
// console.log(first, second, third); // Output: 1 2 3

//9 Array Sperad Operator
let array1 = [0, 1, 2, 3, 4];
let array2 = [5, 6, 7, 8, 9];
// console.log(array1 + array2) // Output For this 0,1,2,3,45,6,7,8,9
// console.log(...array1, ...array2) // Output for this 0 1 2 3 4 5 6 7 8 9
