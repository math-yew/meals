angular.module('meals')
.service('mainService', function ($http) {

  this.test = function () {
    return $http.get('/api/test');
  }

  this.getRecipes = function () {
    return $http.get('/api/recipes');
  }

  this.certainRecipe = "starting";
  this.getRecipe = function (id) {
    // var recId = {};
    // recId.id = id;
    console.log('get the recipe: ', id);
    return $http.get('/api/recipe/' + id)
    .then(function(response) {
      this.certainRecipe = response;
      // console.log('this.certainRecipe: ', this.certainRecipe);
      return response.data[0];
    });
  }

console.log('this.certainRecipe: ', this.certainRecipe);

  var ingredients = [];
  this.addIngredient = function (ingredient) {
    var ingredientArr = [];
    ingredientArr.push(ingredient.qty);
    ingredientArr.push(ingredient.measurement);
    ingredientArr.push(ingredient.name);
    ingredients.push(ingredientArr);
    console.log('ingredients: ', ingredients);
  }
  this.ingredients = ingredients;

  this.submitRecipe = function (newRecipe) {
    var ingr = {};
    ingr.ingredients = ingredients;
    newRecipe.ingredients = ingredients;
    console.log('newRecipe: ', newRecipe);
    return $http.post('/api/recipes', newRecipe)
    .then(function (res) {
      ingr.recipeId = res.data[0].recipe_id;
      console.log('res: ', ingr);
      if(ingr.recipeId > 0){
        $http.post('/api/ingredients', ingr);
      }
      else {
        return res;
      }
    });
  }


})
