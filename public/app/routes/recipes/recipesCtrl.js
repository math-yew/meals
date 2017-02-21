angular.module('meals')
.controller('recipesCtrl', function ($scope, mainService) {

  $scope.submitRecipe = function(newRecipe) {
        console.log("ctrl working - recipe");
    mainService.submitRecipe(newRecipe).then(function (res) {
      $scope.rec = res;
    })
  }

  $scope.addIngredient = function (ingredient) {
    mainService.addIngredient(ingredient);
  }

  $scope.ingredientsList = mainService.ingredients;

  $scope.getRecipes = function () {
    mainService.getRecipes()
    .then(function(response) {
      $scope.allRecipes = response.data;
    });
  }

  $scope.rec = "recipe working";
  $scope.certainRecipe = mainService.certainRecipe;
})
