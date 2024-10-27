//ใช้ for..in

function countOdd(numbers) {
  let count = 0;

  for (let i in numbers) {
    if (numbers[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
}

let arr = [1, 2, 3, 4, 5];
let result = countOdd(arr);
console.log(result);
