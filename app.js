const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mustacheExpress = require('mustache-express');
const expressValidator = require('express-validator');
const fs = require('fs');
// const randomWordGen = require('./wordGenerator')

const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
const app = express();

// Needed to have mustache work. Connects the app engine and mustacheexpress. Also links the views folder to mustache express.
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

//Use body-parser module for json files.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// use express-validator for validation purposes.
app.use(expressValidator());

//use express-session to set up the session data.
app.use(session({
  secret: 'marcus lepidus',
  resave: false,
  saveUninitialized: true
}));

const selections = [];
let guess;
let letterGuess = [];
var wordChoices = words.filter(function(word) {return word.length <= 5; });
var randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
var randomWordList = randomWord.split('');
var arrLength = randomWordList.length;

const winMessage = "Winner, Winner, Chicken dinner.......or whatever.";
let correct = false
let wrongGuess = 0;

console.log(randomWordList);

// creates underscores where the letters will appear for how long the word is.
for (var i = 0; i < randomWord.length; i++) {
  letterGuess.push('_');
}

// Checks the guess of the user to each letter in the random word. If guess by the user is correct it will then replace the underscore with the letter.
function checkGuess (req, res) {
  for(i = 0; i < randomWord.length; i++){
    if (guess === randomWord[i]) {
      letterGuess[i] = guess;
      console.log(letterGuess);
    }
  }
  return letterGuess;
  selections.push(guess)
}
console.log(letterGuess);
console.log(selections);


// var randomWord = function(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };


// use router.get instead of app.get to make it link together.


app.get('/', function (req, res){
  res.render('index', {letterGuess: letterGuess, selections: selections})
});

app.post('/', function(req, res){
  var guesses = req.body.letters.toLowerCase();
  guess = guesses;
  checkGuess(guess);
  selections.push(guess);
  res.render('index', {letterGuess: letterGuess, selections: selections})
  console.log(selections)
})


app.listen(3000, function(){
  console.log('It has begun!')
})
