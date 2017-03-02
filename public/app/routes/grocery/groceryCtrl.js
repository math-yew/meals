angular.module('meals')
.controller('groceryCtrl', function ($scope, mainService) {

$scope.groceryList = mainService.groceryList;
console.log('$scope.groceryList: ', $scope.groceryList);
$scope.meatList = [];
$scope.produceList = [];
$scope.dairyList = [];
$scope.cannedList = [];
$scope.bakingList = [];

$scope.choose = function (item, list) {
  $scope.choosen = item;
  $scope.list = eval("$scope."+list);
  $scope.listName = list;
  console.log('$scope.choosen: ', $scope.choosen);
  console.log('$scope.list: ', $scope.list);
  console.log('$scope.listName: ', $scope.listName);
}

$scope.dropHere = function (arr, list) {
  if($scope.choosen){
    console.log('$scope.listName: ', $scope.listName);
    console.log('list: ', list);
    if($scope.listName === list) {
      console.log('already dropped here');
    }
    else {
      arr.push($scope.choosen);
      console.log('arr', arr);
      $scope.list = $scope.list.filter(function( obj ) {
        return obj.qty !== $scope.choosen.qty || obj.measure !== $scope.choosen.measure || obj.name !== $scope.choosen.name;
      });
      if($scope.listName === 'groceryList'){
        $scope.groceryList = $scope.list;
      }
      if($scope.listName === 'meatList'){
        $scope.meatList = $scope.list;
      }
      if($scope.listName === 'produceList'){
        $scope.produceList = $scope.list;
      }
      if($scope.listName === 'dairyList'){
        $scope.dairyList = $scope.list;
      }
      if($scope.listName === 'bakingList'){
        $scope.bakingList = $scope.list;
      }
      if($scope.listName === 'cannedList'){
        $scope.cannedList = $scope.list;
      }




      $scope.choosen = "";
      $scope.listName = list;
    }
  }
}


/////////end///////////
})
