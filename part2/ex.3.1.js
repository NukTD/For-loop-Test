//ใช้ for..in

function sumDigit(numbers) {
  let numArr = String(numbers).split("");
  let sum = 0;

  for (let i in numArr) {
    sum += Number(numArr[i]);
  }
  return sum;
}

let num = 12345;
let result = sumDigit(num);
console.log(result);
