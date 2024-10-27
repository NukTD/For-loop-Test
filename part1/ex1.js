// Problem: Count Vowels in a String
// Description: Write a function that takes a string as input and returns the count of vowels (a, e, i, o, u) in that string.

// Example
// Input: "Hello, World!"
// Output: 3
// Explanation: The vowels in the string are 'e', 'o', and 'o'.

function findVowels(words) {
  let vowels = "aeiou";
  let countVowel = [];
  for (let i = 0; i < words.length; i++) {
    if (vowels.includes(words[i])) {
      countVowel.push(words[i]);
    }
  }
  return countVowel.length;
}

let result = findVowels("Hello World");
console.log(result);
let result2 = findVowels("Nook");
console.log(result2);
