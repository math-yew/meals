
angular.module('meals').directive('dragDir', function() {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {

      $('.print').on('click', function () {
        $('.cat').css('background-color','white');
        $('p').css('background-color','white');
        $('.grocery').css('width','800px');
      });

    }
  };
});
