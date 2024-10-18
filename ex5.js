// Problem: Count Numbers Greater than a Given Value
// Description: Write a function that takes an array of numbers and a target number as input. 
//              The function should return the count of numbers in the array that are greater than the target number.

// Example
// Input:
// Array: [1, 3, 5, 7, 9]
// Target: 4
// Output: 3
// Explanation: The numbers greater than 4 are 5, 7, and 9.

//สร้าง for วนลูป ใน Array

//algorithm step
// 1. loop
// 2. if
// 3. ดำเนินการทางตรรกะ
// 4. การเปรียบเทียบ
// 5. การแสดงผลลัพท์

let targetNum = 4;
function numGreaterThanTarget (numbers){
    let count = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > targetNum){
            count++;
        }
    }
    return count;
}

let arrNum = [1, 3, 5, 7, 9]
let result = numGreaterThanTarget(arrNum)
console.log(result);

