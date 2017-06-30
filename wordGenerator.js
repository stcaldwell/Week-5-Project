// const fs = require('fs');
// const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
//
//
// let guessesLeft = 8;
// const selections = [];
// let guess;
// let letterGuess = [];
// var wordChoices = words.filter(function(word) {return word.length <= 8; });
// var randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
// var randomWordList = randomWord.split('');
// var arrLength = randomWordList.length;
//
// let correct = false
// let wrongGuess = 0;
//
// console.log(randomWordList);
//
// // creates underscores where the letters will appear for how long the word is.
// for (var i = 0; i < randomWord.length; i++) {
//   letterGuess.push('_');
// }
//
// // Checks the guess of the user to each letter in the random word. If guess by the user is correct it will then replace the underscore with the letter.
//
// let alreadyGuessed = false;
// function checkGuess (req, res) {
//   for(i = 0; i < randomWord.length; i++){
//     if (guess === randomWord[i]) {
//       letterGuess[i] = guess
//       console.log(letterGuess);
//     }
//   }
//
//   // let alreadyGuessed = false;
//   for (var i=0; i < selections.length; i++) {
//     if(guess === selections[i]) {
//       alreadyGuessed = true;
//     }
//   }
//   if (alreadyGuessed === false && randomWord.indexOf(guess) === -1) {
//     selections.push(guess);
//     guessesLeft--;
//   }
//
//   return letterGuess;
//
// }
//
// module.exports = {
//   find: checkGuess;
// }
