// 1. Problem: Find the Longest Word in a Sentence
// Description: Write a function that takes a sentence as input and returns the longest word in that sentence. If there are multiple words with the same length, return the first one.

// Example

// Input: "The quick brown fox jumps over the lazy dog"
// Output: "jumps"
// Explanation: "jumps" is the longest word with 5 characters.

function findLongestWord(words) {
  let longestWord = "";
  let word = words.split(" ");

  for (let i = 0; i < word.length; i++) {
    if (word[i].length > longestWord.length) {
      longestWord = word[i];
    }
  }
  return longestWord;
}

let message = "The quick brown fox jumps over the lazy dog";
let result = findLongestWord(message);
console.log(result);

//7นาที
