const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mustacheExpress = require('mustache-express');

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
  resave: false;
  saveUnitialized: true;
}));

















app.listen(3000, function(){
  console.log('It has begun!')
})
