angular.module('meals')
.controller('groceryCtrl', function ($scope, mainService) {

$scope.groceryList = mainService.groceryList;

// mainService.$watch("groceryList", function (value) {
//   $scope.groceryList = value;
// });

console.log('$scope.groceryList: ', $scope.groceryList);

})
