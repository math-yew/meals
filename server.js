
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var massive = require('massive');

var config = require('./config');

var app = module.exports = express();

// app.use(express.static(__dirname + './../public'));
app.use(express.static('public'));
app.use(bodyParser.json());

var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
  connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');

var serverCtrl = require('./serverCtrl');
db.create_user(function (err, response) {
  console.log(response, err);
});
db.create_recipe(function (err, response) {
  console.log(response, err);
});
db.create_ingredient(function (err, response) {
  console.log(response, err);
});

///////////////////////// API //////////////////////////

app.get('/api/test', serverCtrl.myTest);
app.get('/api/recipes', serverCtrl.getRecipes);
app.get('/api/recipe/:id', serverCtrl.getRecipe);
app.post('/api/recipes', serverCtrl.addRecipe);
app.post('/api/ingredients', serverCtrl.addIngredients);



var port = config.PORT;
app.listen(port, function() {
  console.log('listening on port ', port);
});
