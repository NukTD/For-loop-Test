// 3. Problem: Sum of Digits
// Description: Write a function that takes a positive integer as input and returns the sum of its digits.

// Example

// Input: 12345
// Output: 15
// Explanation: The sum of the digits 1 + 2 + 3 + 4 + 5 = 15.

function sumDigit(numbers) {
  let numArr = String(numbers).split("");
  let sum = 0;
  for (let i = 0; i <= Number(numArr.length); i++) {
    sum += i;
  }
  return sum;
}

let num = 12345;
let result = sumDigit(num);
console.log(result);
