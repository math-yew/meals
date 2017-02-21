angular.module('meals')
.component('allRecipes', {
    bindings: {
        eachRecipe: '=',
        certainRecipe: '='
    },
    templateUrl:'./app/components/recipesTemp.html',
    controller: function (mainService){

      // this.getRecipe = function (id) {
      //   this.message = "id is: " + id;
      // }

      this.getRecipe = function(id) {
        mainService.getRecipe(id)
        .then(function(response) {
          console.log('the response is: ', response);
          // this.certainRecipe = response.data;
        });
      }

    }
});
