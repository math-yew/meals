angular.module('meals')
.component('editRecipe', {
    bindings: {
      certainRecipe: '=',
      update: '@'
    },
    templateUrl:'./app/components/editTemp.html',
    controller: function (mainService, $rootScope){

      var $scope = this;
      var self = this;

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
        mainService.submitRecipe(newRecipe)
        .then(function (res) {
          $scope.rec = res;
          console.log('then 1, clear: ', self.ingredientsList);
          $scope.newRecipe={};
          $scope.ingredient={};
          self.ingredientsList=[];
          mainService.clearIngredients();
          console.log('self.ingredientsList: ', self.ingredientsList);
        })
      }

      this.updateRecipe = function(newRecipe) {
        mainService.updateRecipe(newRecipe).then(function (response) {
          console.log('updated response: ', response);
        })
      }

      this.addIngredient = function (ingredient) {
        mainService.addIngredient(ingredient);
        self.ingredientsList=mainService.ingredients;
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

      this.getRecipes = function () {
        mainService.getRecipes()
        .then(function(response) {
          $scope.allRecipes = response.data;
        });
      }

    }
});
