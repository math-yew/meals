angular.module('meals')
.component('singleRecipe', {
    bindings: {
        certainRecipe: '='
    },
    templateUrl:'./app/components/recipe_Temp.html',
    controller: function (mainService, $rootScope){

      this.deleteRecipe = function(id) {
        mainService.deleteRecipe(id)
        .then(function(response) {
          console.log('deleted?: ', response);
        });
      }
    }
});
