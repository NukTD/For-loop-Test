//ใช้ for..in

function findLongestWord(words) {
  let longestWord = "";
  let word = words.split(" ");

  for (let i in word) {
    if (word[i].length > longestWord.length) {
      longestWord = word[i];
    }
  }
  return longestWord;
}

let message = "The quick brown fox jumps over the lazy dog";
let result = findLongestWord(message);
console.log(result);
