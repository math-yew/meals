angular.module('meals')
.component('mealPlan', {
    bindings: {
        mealList: '='
    },
    templateUrl:'./app/components/planTemp.html',
    controller: function (mainService, $rootScope, $state){

      this.removeMeal = function (meal) {
        console.log('removeMeal contrl: ', meal);
        mainService.removeMeal(meal);
      }


    this.makeList = function (meals) {
      console.log('make list controller: ', meals);
      mainService.makeList(meals);
      $state.go('grocery');
    }
  }
});
