let inputArray = [3, 5, 7, 2, 8];

function findMaxNumber(numbers) {
  let maxNum = numbers[0];
  for (let num of numbers) {
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}

let result = findMaxNumber(inputArray);
console.log(result);
