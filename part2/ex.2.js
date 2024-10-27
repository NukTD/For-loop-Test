// 2. Problem: Count Odd Numbers in an Array
// Description: Write a function that takes an array of numbers as input and returns the count of odd numbers in the array.

// Example

// Input: [1, 2, 3, 4, 5]
// Output: 3
// Explanation: The odd numbers in the array are 1, 3, and 5.

function countOdd(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
}

let arr = [1, 2, 3, 4, 5];
let result = countOdd(arr);
console.log(result);

//4นาที
