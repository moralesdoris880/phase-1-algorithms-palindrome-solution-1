function isPalindrome(word) {
   const reversedWord = reverseString(word);
   return word === reversedWord;
}
function reverseString(word) {
  return word.split("").reverse().join("");
}
/* 
  Add your pseudocode here: 
  Make a function that split ups word into character
  Then reverses the word
  In the main function, you would call reverseWord and test it out with original word

*/

/*
  Add written explanation of your solution here:
  Reverse the word and test it with the original word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
