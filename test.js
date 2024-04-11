/* The FIZZBUZZ challenge is a common interview question for junior developers.
   To complete the challenge you must:
   
- Loop through nums.
- Print 'FIZZ' when the number is divisible by 3
- Print 'BUZZ' when the number is divisible by 5
- Print 'FIZZBUZZ' when the number is divisible by both 3 and 5

Bonus challenge:
- Print 'BAZZ' when the number is divisible by 7

*/

// List of numbers from 1 - 100
const nums = [...Array(100).keys()].map((x) => ++x);

// Loop over the nums list
// nums.forEach((number) => {
    
//   if (number % 3 === 0 && number % 5 === 0) {
//     console.error("FIZZBUZZ");
//   } else if (number % 5 === 0) {
//     console.error("BUZZ");
//   } else if (number % 3 === 0) {
//     console.error("FIZZ");
//   } 
// });

const conditions = {
    3: "FIZZ",
  5: "BUZZ",
    7: "BAZZ",
    9: "BIZZ",
    12: "FAZZ",
  };
  
  console.log(Object.keys(conditions));
  
  // Loop over the nums list
  nums.forEach((number) => {
    let isDiv = false;
    Object.keys(conditions).forEach((condition) => {
      if (number % condition === 0) {
        isDiv = true;
        console.log(conditions[condition]);
      }
    });
    if (!isDiv) console.log(number);
  });
  // let isDiv = false;
  // if (number % 3 === 0) {
  //   isDiv = true;
  //   console.log("FIZZ");
  // }
  // if (number % 5 === 0) {
  //   isDiv = true;
  //   console.log("BUZZ");
  // }
  // if (number % 7 === 0) {
  //   isDiv = true;
  //   console.log("BAZZ");
  // }
  // if (isDiv) return;
  // console.log(number);
