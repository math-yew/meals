angular.module('meals')
.controller('recipesCtrl', function ($scope, mainService, $rootScope) {

  $scope.flipped = true;

  $scope.userId = mainService.userId;
  $scope.userName = mainService.userName;

  $rootScope.$watch("certainRecipe", function (value) {
    $scope.certainRecipe = value;
  });
  $rootScope.$watch("mealList", function (value) {
    $scope.mealList = value;
  });
  // $rootScope.$watch("ingredients", function (value) {
  //   $scope.ingredients = value;
  // });

  $scope.getRecipes = function () {
    mainService.getRecipes()
    .then(function(response) {
      $scope.allRecipes = response.data;
    });
  }

  $scope.rec = "recipe working";

  $scope.mealList = mainService.mealList;





})
