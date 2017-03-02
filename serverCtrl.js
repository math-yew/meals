var app = require('./server.js');
var db = app.get('db');
var userArr = [];
module.exports = {

  getUsers: function (req, res, next) {
    db.get_users([], function (err, results) {
      if(err){
        console.error(err);
        return res.send(err);
      }
      for (var i = 0; i < results.length; i++) {
        userArr.push(results[i].auth0_id);
      }
      console.log('userArr: ', userArr);
      next();
    })
  },

  addUser: function (req, res) {
    console.log('req.body.id: ', req.body.id);
    if(userArr.indexOf(req.body.id) === -1){
      db.add_user([req.body.name, req.body.email, req.body.id], function (err, results) {
        if(err){
          console.error(err);
          return res.send(err);
        }
        console.log('new user added');
        return res.send(results);
      })
    }
        return res.send("Existing User");
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
      console.log('get recipe fired', results);
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
    console.log('add ingredients initiated',req.body);
    // console.log('req.body: ', req.body);
    for (var i = 0; i < req.body.ingredients.length; i++) {
      db.add_ingredient([req.params.id, req.body.ingredients[i][0], req.body.ingredients[i][1], req.body.ingredients[i][2]], function (err, results) {
        if(err){
          console.error(err);
          return res.send(err);
        }
        return res.send(results);
      })
    }
  },

  deleteIngredients: function (req, res, next) {
    console.log('delete initiated', req.params);
    db.delete_ingredients([req.params.id], function (err, results) {
      if(err){
        console.error('err: ',err);
        return res.send(err);
      }
      // return res.send(results);
      next();
    })
  },

  deleteRecipe: function (req, res, next) {
    db.delete_recipe([req.params.id], function (err, results) {
      if(err){
        console.error('err: ',err);
        return res.send(err);
      }
      return res.send(results);
    })
  },

  changeRecipe: function (req, res, next) {
    console.log('change initiated');
    db.change_recipe([req.body.recipe_id, req.body.name, req.body.directions, req.body.rating, req.body.source], function (err, results) {
      if(err){
        console.error(err);
        return res.send(err);
      }
      // return res.send(results);
      next();
    })
  },


  gather: function (req, res) {
    // var arr = [];
    // for (var i = 0; i < req.body.mealList.length; i++) {
    //   var recId = req.body.mealList[i][0];
    //   arr.push(recId);
    // }
    // console.log('arr: ', arr);
    db.gather([], function (err, results) {
         if(err){
           console.error('err: ',err);
           return res.send(err);
         }
           return res.send(results);
       })
  },

  finished: function (req, res) {
    return res.send(req);
  }

}
