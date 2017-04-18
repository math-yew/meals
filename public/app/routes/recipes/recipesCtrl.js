angular.module('meals')
.controller('recipesCtrl', function ($scope, mainService, $rootScope) {
  mainService.refreshUserInfo();
  var userInfo = JSON.parse(localStorage.getItem('recipe-login')) || [];
  $scope.flipped = true;
  $scope.userId = userInfo.id
  $scope.userName = userInfo.name

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
