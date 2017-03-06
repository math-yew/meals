angular.module('meals')
.component('singleRecipe', {
    bindings: {
        certainRecipe: '='
    },
    templateUrl:'./app/components/recipe_Temp.html',
    controller: function (mainService, $rootScope){


    }
});
