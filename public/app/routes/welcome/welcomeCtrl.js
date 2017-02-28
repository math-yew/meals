angular.module('meals')
.controller('welcomeCtrl', function ($scope, mainService, $state) {

  $scope.login  = function () {
    mainService.login().then(function (response) {
      $scope.logInfo = response;
      console.log('auth0 in ctrl: ', response);
    }).then(function(response) {
      $state.go('recipes');
    });
  }

})
