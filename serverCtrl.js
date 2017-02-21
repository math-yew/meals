var app = require('./server.js');
var db = app.get('db');
module.exports = {

  myTest: function (req, res) {
    db.database_call([], function (err, results) {
      if(err){
        console.error(err);
        return res.send(err);
      }
      return res.send(results);
    })
  },

  getRecipes: function (req, res) {
    db.get_recipes([], function (err, results) {
      if(err){
        console.error(err);
        return res.send(err);
      }
      return res.send(results);
    })
  },

  getRecipe: function (req, res) {
    console.log('object received by server: ', req.params.id);
    db.get_recipe([req.params.id], function (err, results) {
      if(err){
        console.error(err);
        return res.send(err);
      }
      console.log('returned results: ', results);
      // if(results.length === 0){
      //   return res.status(404).send("Can't Find Recipe");
      // }
      // return res.send(results);
      return res.send(results);
    })
  },

  addRecipe: function (req, res) {
    db.add_recipe([req.body.name, req.body.directions, req.body.rating, req.body.source], function (err, results) {
      if(err){
        console.error(err);
        return res.send(err);
      }
      return res.send(results);
    })
  },

  addIngredients: function (req, res) {
    console.log('req.body: ', req.body);
    for (var i = 0; i < req.body.ingredients.length; i++) {
      db.add_ingredient([req.body.recipeId, req.body.ingredients[i][0], req.body.ingredients[i][1], req.body.ingredients[i][2]], function (err, results) {
        if(err){
          console.error(err);
          return res.send(err);
        }
        return res.send(results);
      })
    }
  }

}
