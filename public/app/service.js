angular.module('meals')
.service('mainService', function ($http, $state) {

  var self = this;

  this.login = function () {
    var info = {};
    console.log('log in attemped');
    return $http.get('/auth/me').then(function (response) {
      console.log('auth0 in service: ', response);
      self.userId = info.id =  response.data.id;
      self.userName = info.name = response.data._json.name;
      info.email = response.data._json.email;
      return response;
    })
    .then(function(response) {
      console.log('info: ', info);
      $http.post('/api/users', info)
      .then(function(response) {
        console.log('list of users: ', response);
      });
    });
  }

  this.getRecipes = function () {
    return $http.get('/api/recipes');
  }


  this.getRecipe = function (id) {
    console.log('get the recipe: ', id);
    return $http.get('/api/recipe/' + id)
    .then(function(response) {
      return response.data;
    });
  }
  // this.certainRecipe = "";

  var mealList = [];
  this.addToList = function (id, name) {
    var arr = [];
    arr.push(id);
    arr.push(name);
    mealList.push(arr);
    console.log('mealList: ', mealList);
    return mealList;
  }

  this.removeMeal = function (meal) {
    console.log('removeMeal service: ', meal);
    for (var i = 0; i < mealList.length; i++) {
      console.log('forloop', mealList[i][0], meal[0]);
      if(mealList[i][0] === meal[0] &&
        mealList[i][1] === meal[1]){
          mealList.splice(i,1);
          break;
        }
    }
  }

  var ingredients = [];
  this.addIngredient = function (ingredient) {
    var ingredientArr = [];
    ingredientArr.push(ingredient.qty);
    ingredientArr.push(ingredient.measurement);
    ingredientArr.push(ingredient.name);
    ingredients.push(ingredientArr);
    console.log('ingredients: ', ingredients);
  }

  this.removeIngredient = function (ingredient) {
    for (var i = 0; i < ingredients.length; i++) {
      if(ingredients[i][0] === ingredient[0] &&
        ingredients[i][1] === ingredient[1] &&
        ingredients[i][2] === ingredient[2]){
          ingredients.splice(i,1);
          break;
        }
    }
  }

  this.refreshIngredients = function (ing) {
    ingredients = [];
    for (var i = 0; i < ing.length; i++) {
      var ingredientArr = [];
      ingredientArr.push(ing[i].qty);
      ingredientArr.push(ing[i].measure);
      ingredientArr.push(ing[i].name);
      ingredients.push(ingredientArr);
    }
    console.log('refreshed ingredients: ', ingredients);
    return ingredients;
  }

  this.ingredients = ingredients;

  this.submitRecipe = function (newRecipe) {
    var ingr = {};
    ingr.ingredients = ingredients;
    newRecipe.ingredients = ingredients;
    console.log('newRecipe: ', newRecipe);
    return $http.post('/api/recipes', newRecipe)
    .then(function (res) {
      console.log('res: ', res);
      ingr.recipeId = res.data[0].recipe_id;
      console.log('res: ', ingr);
      if(ingr.recipeId > 0){
        $http.post('/api/ingredients/' + ingr.recipeId, ingr);
      }
      else {
        return res;
      }
    });
  }

  this.updateRecipe = function (newRecipe) {
    newRecipe.ingredients = ingredients;
    console.log('newRecipe: ', newRecipe);
    return $http.put('/api/recipe/' + newRecipe.recipe_id, newRecipe);
  }

  this.deleteRecipe = function (id) {
    return $http.delete('/api/recipe/' + id)
    .then(function(response) {
      return response.data;
    });
  }

  self.groceryList;
  var groceryList = []
  this.makeList = function () {
    return $http.get('/api/gather/')
    // return $http.get('/api/gather/', {mealList})
    .then(function(response) {
      console.log('gathered: ', response);
      var tempArr = [];
      for (var i = 0; i < mealList.length; i++) {
        tempArr.push(mealList[i][0]);
      }
      for (var i = 0; i < response.data.length; i++) {
        for (var j = 0; j < tempArr.length; j++) {
          if(tempArr[j] === response.data[i].recipe_id){
            groceryList.push(response.data[i]);
          }
        }
      }
      self.groceryList = groceryList;
    }).then(function(response) {
      $state.go('grocery');
    });
  }

})
