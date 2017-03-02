angular.module('meals')
.controller('groceryCtrl', function ($scope, mainService) {

$scope.groceryList = mainService.groceryList;
console.log('$scope.groceryList: ', $scope.groceryList);
$scope.meatList = [];

$scope.choose = function (item, list) {
  $scope.choosen = item;
  $scope.list = eval("$scope."+list);
  $scope.listName = list;
  console.log('$scope.choosen: ', $scope.choosen);
  console.log('$scope.list: ', $scope.list);
  console.log('$scope.listName: ', $scope.listName);
}

$scope.dropHere = function (arr) {
  if($scope.list != arr){
  arr.push($scope.choosen);
  console.log('arr', arr);
  $scope.list = $scope.list.filter(function( obj ) {
    return obj.qty !== $scope.choosen.qty || obj.measure !== $scope.choosen.measure || obj.name !== $scope.choosen.name;
  });
  $scope.groceryList = $scope.list
    console.log('$scope.list22222: ', $scope.list);
  $scope.choosen = "";
  }
  else {console.log('already dropped here');}
}

})
