function isPalindrome(word) {
if (word === reverseWord(word)) {
  return true
} else return false
}

function reverseWord(word) {
  let string = word
  let array = string.split(``)
  array.reverse()
  return array.join(``)
}

/* 
  Add your pseudocode here

  function isPalindrome(word){

  if word === reverseWord(word) {
    return true
  } else return false
  }

  reverseWord(word) {
    segment word by character and put into array
    reverse array
    convert array to word
  }

 
*/

/*
  Add written explanation of your solution here
   isPalindrome will take a word. Word will be called into a function "reverseWord"
   and tested against the original word. If they are equal it will return true, if not
   it will return false. Function reverseWord() will create an array with the characters
   from the word, reverse, and then convert back to a word.
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
