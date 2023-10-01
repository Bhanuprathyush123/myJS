// if Statement
let con 
/*if (condition) {
     Syntax lets seen an example
}*/

if (con == true) {
     // console.log(`It is in IF Loop => ${con} : ${typeof con}`);
}

// else 
if (con == false) {
     // console.log(`It is in IF Loop => ${con} : ${typeof con}`);
} else {
     // console.log(`It is in ELSE Loop`);
}

// elseif 
if (con == false) {
     // console.log(`Your In If Loop => ${con} : ${typeof con}`);
} else if(con == true) {
     // console.log(`Your In Else If Loop`)
}
else {
     // console.log(`Your In Else loop`);
}


// for loop 
let arr = [1, 2, 3, 4, 5, 6]
for (let index = 0; index < arr.length; index++) {
     const element = arr[index];
     // console.log(element);
}

// foreach
arr.forEach(element => {
     // console.log(element);
});


// while
let a = 0
while (a < 1) {
     // console.log(`Hello JavaScript : ${a}`);
     a++;
}

do {
     // console.log("Hello World");
} while (a < 1);