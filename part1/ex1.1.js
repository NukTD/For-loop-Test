//ใช้ for..in

function findVowels(words) {
  let vowels = "aeiou";
  let countVowel = [];

  for (let i in words) {
    if (vowels.includes(words[i].toLowerCase())) {
      countVowel.push(words[i]);
    }
  }
  return countVowel.length;
}

let result = findVowels("Hello World");
console.log(result); // ผลลัพธ์: 3
