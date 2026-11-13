// 1) Even or Odd

// const check = (num) => {
//     if (num % 2 ===0) {
//         return "Even";
//     }
//     else {
//         return "Odd";
//     }
// }

 
// console.log(check(4));
// console.log(check(7));
// console.log(check(0));

// 2) Result Evaluator — Pass or Fail

// const evaluateresult = (marks) => {
//     if (marks < 0 || marks > 100) {
//         console.log("Invalid marks");
//         return null;
//     }
//     else if ( marks >= 50) {
//         return "Pass";
//         }
//     else {
//         return "Fail"
//     }    
// };

// console.log(evaluateresult(75));
// console.log(evaluateresult(40));
// console.log(evaluateresult(120));


// 3) Maximum Finder — Largest of Three Numbers

// const findmax = (a, b, c) => {
//     if (a >= b && a >= c) {
//         return a;
//     }
//     else if (b >= a && b >= c) {
//         return b;
//     }
//     else {
//         return c;
//     }
// };

// console.log(findmax(10, 25, 15));
// console.log(findmax(5, 3, 8));
// console.log(findmax(9, 9, 2));


// 4) Accumulator — Sum from 1 to N

// let sumToN = (n) => {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//     sum = sum + i;    
// }
// return sum;
// };

// console.log(sumToN(5));
// console.log(sumToN(10));

// 5) Multiplication Table Generator

// let printTable = (num) => {
//     for (let i = 1; i <= 10; i++) {
//         console.log(num + "x" + i + "=" + (num * i));
//     }
// };

// printTable(3);

// 6) Digit Counter — Number Length Finder

// const countDigits = (num) => {
//     if (num === 0) {
//         return 1;
//     }
//     let count = 0;
//     while (num > 0) {
//         count = count + 1;
//         num = Math.floor(num / 10);
//     }
//     return count;
// };

// console.log(countDigits(1234));
// console.log(countDigits(9));
// console.log(countDigits(10000));


// 7) Number Reverser

// const reverseNumber = (num) => {
//     let reversed = 0;
//     while (num > 0) {
//         let lastDigit = num % 10;
//         reversed = reversed * 10 + lastDigit;
//         num = Math.floor(num / 10);
//     }
//     return reversed;
// };

// console.log(reverseNumber(1234));
// console.log(reverseNumber(500));
// console.log(reverseNumber(91));


// 8) Factorial Engine

// const factorial = (n) => {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result = result * i;
//     }
//     return result;
// };


// console.log(factorial(5));
// console.log(factorial(3));
// console.log(factorial(1));


// 9) Prime Validator

// const isPrime = (num) => {
//     if (num <= 1) {
//         return false;
//     }

//     for (let i =2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
    
//     return true;
// };


// console.log(isPrime(7));
// console.log(isPrime(10));

// 10) Pattern Builder — Star Triangle

// const printPattern = (n) => {
//     for (let i = 1; i <= n; i++) {
//         let line = "";
//         for (let j = 1; j <= i; j++) {
//         line = line + "*";
//     }
//     console.log(line);
//   }
// };

//  printPattern(4);











