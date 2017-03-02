
angular.module('meals').directive('dragDir', function() {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {

      var testing = function () {
        console.log('scope.outCrowd: ', scope.outCrowd);
      }

      $('.small').on('click', function () {
        $(this).css('background-color','blue');
        testing();
        scope.myMessage();
      });

      $('.big').mousemove(function(event){
        $("span").text(event.pageX + ", " + event.pageY);
      });

      $('.big').on('mouseover', function () {
        console.log('mouse uped');
      });

    }
  };
});
