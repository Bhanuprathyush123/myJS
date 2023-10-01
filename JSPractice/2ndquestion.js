// for (let i = 0; i < 11; i++) {
//      if (i == 0) {
//           console.log(`7X${i}=0`);
//      }
//      else {
//           let table = "7 " +"X " + i + "=  " + 7 * i;
//           console.log(table);
//      }
// }

function table(number) {
     for (let i = 0; i < 11; i++) {
          if (i ==0) {
               console.log(`${number} X ${i} = 0`);
          }
          else {
               let table = number +"X " + i + "=  " + number * i;
               console.log(table)
          }
     }
     
}

let res = table(1);
