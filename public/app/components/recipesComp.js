angular.module('meals')
.component('allRecipes', {
    bindings: {
        eachRecipe: '=',
        certainRecipe: '=',
        mealList: '='
    },
    templateUrl:'./app/components/recipesTemp.html',
    controller: function (mainService, $rootScope){

      var $scope = this;
      $scope.getRecipe = function(id) {
        mainService.getRecipe(id)
        .then(function(response) {
          console.log('the response is: ', response);
          $rootScope.certainRecipe = response;
          console.log('this.certainRecipe', $scope.certainRecipe);
        });
      }

      $scope.addToList = function(id, name) {
        console.log('add clicked');
        this.mealList = mainService.addToList(id, name);
        $rootScope.mealList = this.mealList;
      }

    }
});
