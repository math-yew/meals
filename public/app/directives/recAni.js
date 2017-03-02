
angular.module("meals").directive('recAni', function() {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      // elem.on('click', function () {
      //   alert("alert works")
      // });
      var flipped = false;
      $('.select-recipe').on('click', function () {
        $('.get').css({'transform':'rotateY(180deg) rotateZ(-15deg) skew(-15deg,-15deg)'});
        $('.get').css('background-color','black');
        $('.select-recipe').hide();
        flipped = true;
      });

      $('#go-back').on('click', function () {
          $('.get').css({'transform':'rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)'});
          $('.get').css('background-color','blue');
          $('.select-recipe').show();
          flipped = false;
      });

      $('.meal-plan').on('click', function () {
        console.log('clicked with jquery');
        $('.meal-plan').css('background-color','red');
      });

      var moveLeft = 300;
      var triMove = moveLeft-50;

      $('.triangle').on('click', function () {
        $('.triangle').css({'transform':'rotateZ(180deg) translateY(100px) translateX('+triMove+'px)'});
        $('.book').css({'transform':'translateX(-'+moveLeft+'px)'});
        $('.right-side').css({'transform':'translateX(-'+moveLeft+'px)'});
      });

    }
  };
});
