nums = [2, 7, 11, 15]
const target = 9
let res = [];

const twoSum = function ( target,...nums) {
     for (let i = 0; i < nums.length; i++){
          let sum = 0;
          for (let j = i+1; j < nums.length; j++) {
               sum = nums[i] + nums[j];
               if (sum === target) {
                    res = [i,j]
                    return res;
                    // console.log(res[i,j]);
               }
          }
     }
     return res;
}

console.log(twoSum(target,nums));