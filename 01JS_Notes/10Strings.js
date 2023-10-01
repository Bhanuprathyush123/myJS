// Declaring Strings Normal Declaration
const userName = `UserName`;
// console.log(userName);

//Declaring Strings as Object
const stateName = new String("Andhara Pradesh");
// console.log(stateName.length)

// 34 String Methods in JavaScript
let str = "Varrey.Shiva.Ganesh.Bhanu.Prathyush";
// 1. charAt()  Method => stringName.charAt(IndexNumber)

// console.log(str.charAt(1));

/*******  *********/

// 2,3. indexOf() & lastIndexOf() => stringName.indexOf(IndexNumber) & stringName.lastIndexOf(IndexNumber)
// console.log(`First Index Of Varrey : ${str.indexOf("Varrey")}`);
// console.log(`Last Index Of Varrey : ${str.lastIndexOf("Prathyush")}`);

/*******  *********/

// 4,5. slice() Substring() Method
// slice => stringName.slice(startIndex, endIndex)

// console.log(`The Slice Metod Eleminats the String and Starts form the Given Index Here Is The Example : ${str.slice(7)}`); //We Can also start it from negative index

// substring => stringName.substring(startIndex, endIndex)
// slice and substring does the same thing but the difference is substring will not allow you to have negitive Indexing. But if u use it SubString encouters it as a 0

/*******  *********/

// 6. Split() Method
// we can divide the string into two part using split method
// Split => stringName.split("String", limit(Number))
// let nameOfUser = "Prathyush"

let supp = str.toUpperCase().split('')
// console.log(supp);

/*******  *********/

// 7. includes() method => stringName.includes("Search-String") returns ~ `true`boolean value - It is case sensitive
let searchString = str.includes("Prathyush")
// console.log(searchString);

/*******  *********/

// 8,9. startsWith() & endsWith()
// startsWith => stringName.startsWith("Searchsting") returns ~ "Boolean" true/false - it's case snesitive
// console.log(str.startsWith(`Varrey`))

// console.log(str.endsWithsWith(`Varrey`));

/*******  *********/

// 10. concat() => Used to add two STRINGS => stringName.concat(stringName).
let userGivenName = 'Bhanu Prathyush'
const userFamilyName = 'Varrey'
let userFullName = userFamilyName.concat(" "+userGivenName)
// console.log(`User's Full Name is : ${userFullName}`);//User's Full Name is : Varrey Bhanu Prathyush
// other way to concatnate string
// console.log(userFamilyName + " " + userGivenName);//Both gives You the same Output here we use "+" to concatnate output : Varrey Bhanu Prathyush

// Using Sperad Operator (...) to concatnate String
// console.log(...userFamilyName,...userGivenName);//V a r r e y B h a n u   P r a t h y u s h

/*******  *********/

// 11. repeat() Method => to do more copies of a String => stringName.repeat(count)
let recursiveString = "DSA "
// console.log(recursiveString.repeat(5));

/*******  *********/

// 12,13,14. trim(), trimStart() and trimEnd() methods
let str1 = "   'DSA'     "
// console.log(str1.trim());
// console.log(str1.trimStart());
// console.log(str1.trimEnd()); // Difference B/W trimStart & trimEnd OutPut =>
//'DSA'
//   'DSA'

/*******  *********/

// 15,16. padStart() & padEnd() => stringName.padStart(targetLenght) & stringName.padEnd(targetLenght)
// This method Give Padding To your String For example : .stringName.padStart() => gives padding at starting of the Sting it follow the Given Lenght 
// string.padEnd() => add Padding at the End Of the String of a Given length (We can also give a String to cover the Padding)=> padStart(lenght,"String to cover the Padding Lenght")
let str2 = 'ABC'
// console.log(str2.padStart(12, 'Atlassian'));//OutPut : AtlassianABC
// console.log(str2.padEnd(12, 'Atlassian'));//OutPut : ABCAtlassian

/*******  *********/

// 17 localeCompare() => stringName.localeCompare() Example : referenceString.localeCompare(comapreString)
let referenceString = 'Varrey'
let comapreString = 'Varrey.Shiva.Ganesh.Bhanu.Prathyush'
console.log(referenceString.localeCompare(comapreString));
// if referenceString comes before comapreString ---> Negative Number (-1)
// if referenceString comes after comapreString ---> Positive Number (+1)
// if referenceString == comapreString ---> 0

/*******  *********/
