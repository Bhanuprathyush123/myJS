// #1: Print numbers from 1 to 10
let num = 1
for (num; num <= 10; num++){
     // console.log(num)
}

console.log("-------------------------------------------------------------")

// 2 printing Even Numbers
for (let num = 0; num <= 100; num++) {
     if (num == 0) {
          console.log(`Nither Even Nor Odd : ${num}`);
     }
     else if (num % 2 == 0) {
          console.log(`Even Number :         ${num}`)
     }
     else {
          console.log(`Odd Number  :         ${num}`)
     }
}