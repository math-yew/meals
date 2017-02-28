
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var massive = require('massive');
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var config = require('./config');

var app = module.exports = express();

app.use(session({secret: config.secret}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy(config.authConfig,
function (accessToken, refreshToken, extraParams, profile, done) {

  return done(null, profile);
}));

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

/////////////////////////////////////////////////

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
successRedirect: '/#!/welcome',
failureRedirect: '/auth/me'
}));

passport.serializeUser(function(user, done) {
done(null, user);
});

passport.deserializeUser(function(obj, done) {
done(null, obj);
});

app.get('/auth/me', function (req, res, next) {
if (!req.user){
  return res.status(404).send('User not found');
}
return res.status(200).send(req.user);
})

///////////////////////// API //////////////////////////

app.get('/api/test', serverCtrl.myTest);
app.get('/api/recipes', serverCtrl.getRecipes);
app.get('/api/recipe/:id', serverCtrl.getRecipe);
app.post('/api/recipes', serverCtrl.addRecipe);
app.post('/api/ingredients/:id', serverCtrl.addIngredients, serverCtrl.finished);
app.delete('/api/recipe/:id', serverCtrl.deleteIngredients, serverCtrl.deleteRecipe);
app.put('/api/recipe/:id', serverCtrl.changeRecipe, serverCtrl.deleteIngredients, serverCtrl.addIngredients, serverCtrl.finished);
app.get('/api/gather/', serverCtrl.gather);

var port = config.PORT;
app.listen(port, function() {
  console.log('listening on port ', port);
});
