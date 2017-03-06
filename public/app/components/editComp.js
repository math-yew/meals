angular.module('meals')
.component('editRecipe', {
    bindings: {
      certainRecipe: '=',
      update: '@'
    },
    templateUrl:'./app/components/editTemp.html',
    controller: function (mainService, $rootScope){

      var $scope = this;

      $rootScope.certainRecipe = [];


      this.refreshIt = function () {
        if(this.update==='true'){
          console.log('update?');
          this.newRecipe=$rootScope.certainRecipe[0];
          this.ingredientsList=mainService.refreshIngredients($rootScope.certainRecipe);
          // this.ingredientsList = mainService.ingredients;
        }
      }

      // this.ingredients = $rootScope.ingredients;

      $rootScope.$watch('certainRecipe',function() {
        console.log('watched');
        $scope.refreshIt();
      });

      // mainService.$watch('ingredients', function (value) {
      //   $scope.ingredientsList = value;
      // });

      this.submitRecipe = function(newRecipe) {
            console.log("ctrl working - recipe");
        mainService.submitRecipe(newRecipe).then(function (res) {
          $scope.rec = res;
        })
      }

      this.updateRecipe = function(newRecipe) {
            console.log("ctrl working - recipe");
        mainService.updateRecipe(newRecipe).then(function (response) {
          console.log('updated response: ', response);
        })
      }

      this.addIngredient = function (ingredient) {
        mainService.addIngredient(ingredient);
        this.ingredientsList=mainService.ingredients;
      }

      this.ingredientsList = mainService.ingredients;

      this.removeIngredient = function (ingredients) {
        mainService.removeIngredient(ingredients);
      }

      this.deleteRecipe = function(id) {
        mainService.deleteRecipe(id)
        .then(function(response) {
          console.log('deleted?: ', response);
        });
      }

    }
});
