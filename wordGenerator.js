// const fs = require('fs');
// const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
//
// var blanks = [];
// var mysteryWord = [];
// var word;
//
// var randomWord = function(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
//
// var randomWordGen = function(words) {
//   blanks = [];
//   word = words[randomWord(0, words.length - 1)];
//   var wordGenerated = word.split("");
//   var wordLength = wordGenerated.length;
//   if (wordLength >= 4 && wordLength <= 6) {
//     for(var i = 0; i < wordLength; i++) {
//       blanks.push(" ");
//       mysteryWord.push(wordGenerated[i]);
//     }
//   } else {
//     return randomWordGen(words);
//   }
//   return mysteryWord;
// }
