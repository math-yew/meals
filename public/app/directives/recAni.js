
angular.module("meals").directive('recAni', function() {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      // elem.on('click', function () {
      //   alert("alert works")
      // });
      var flipped = false;
      $('.select-recipe').on('click', function () {
        // $('.get').css('overflow':'hidden');
        $('.get').css('border-radius','0 0 50% 50%');
        $('.get').css({'transform':'rotateY(180deg) rotateZ(-10deg) skew(-10deg,-10deg)'});
        $('.get').css('background-color','black');
        flipped = true;
      });


      $('#go-back').on('click', function () {
          console.log('if jquery');
          $('.get').css({'transform':'rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)'});
          $('.get').css('background-color','blue');

          flipped = false;
      });


      $('.meal-plan').on('click', function () {
        console.log('clicked with jquery');
        $('.meal-plan').css('background-color','red');
      });

    }
  };
});
