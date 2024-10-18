// Problem: Sum of Even Numbers
// Description: Write a function that takes a positive integer n as input and returns the sum of all even numbers from 1 to n.

// Example
// Input: n = 10
// Output: 30
// Explanation: The even numbers from 1 to 10 are 2, 4, 6, 8, and 10. Their sum is 2 + 4 + 6 + 8 + 10 = 30.

//algorithm step
// 1. loop
// 2. if
// 3. ดำเนินการทางตรรกะ
// 4. การแสดงผลลัพท์

let n = 10;
let sum = 0;
function evenNumbers (numbers){
    for (let i = 0; i <= numbers; i++){
        if(i % 2 === 0){
            sum += i
        }
    }
    return sum
}

let result = evenNumbers(n)
console.log(result);
