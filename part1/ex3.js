// Problem: Find the Maximum Number in an Array
// Description: Write a function that takes an array of numbers and returns the maximum number in the array.

// Example
// Input: [3, 5, 7, 2, 8]
// Output: 8

//algorithm step
// 1. loop
// 2. if
// 3. ดำเนินการทางตรรกะ
// 4. การเปรียบเทียบ
// 5. การแสดงผลลัพท์

let inputArray = [3, 5, 7, 2, 8];
function findMaxNumber (numbers){
    let maxNum = numbers[0];
    for(let i =0; i < numbers.length; i++){
        if(numbers[i] > maxNum){
            maxNum = numbers[i]
        }
    }
    return maxNum

}

let result = findMaxNumber(inputArray)
console.log(result);
console.log(findMaxNumber([1, 2]));

