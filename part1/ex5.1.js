let targetNum = 4;

function numGreaterThanTarget(numbers, target) {
  let count = 0;
  for (let num of numbers) {
    if (num > target) {
      count++;
    }
  }
  return count;
}

let arrNum = [1, 3, 5, 7, 9];
let result = numGreaterThanTarget(arrNum, 5);
console.log(result); // ผลลัพธ์: 2
