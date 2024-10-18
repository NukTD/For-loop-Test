// Problem: Calculate Factorial
// Description: Write a function that takes a positive integer n and returns its factorial.

// Example
// Input: 5
// Output: 120
// Explanation: 
// 5!=5×4×3×2×1=120

//algorithm step
// 1.loop
// 2.ดำเนินการทางตรรกะ
// 3.การแสดงผลลัพท์
function factorial (numbers){
    let sum = 1;
    for(let i = 1; i <= numbers; i++){
        sum *= i
    }
    return sum

}
let factorialNum = 5
let result = factorial(factorialNum)
console.log(result);
