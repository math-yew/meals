
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

      $('.book-cover').on('click', function () {
        $('.book-cover').css({'transform':'rotateY(180deg) rotateZ(-15deg) skew(-15deg,-15deg)'});
        $('.book-cover').css('background-color','grey');
        $('.book-cover').css('border-style','thick');
      });

      $('#go-back').on('click', function () {
          $('.get').css({'transform':'rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)'});
          $('.get').css('background-color','blue');
          $('.select-recipe').show();
          flipped = false;
      });

      var moveLeft = 350;
      var triMove = moveLeft+50;

      $('.tri-b').on('click', function () {
        $('.tri-b').css({'transform':'rotateZ(180deg) translateY(150px) translateX('+triMove+'px)'}).hide();
        $('.tri-a').css({'transform':'rotateZ(180deg) translateY(150px) translateX('+triMove+'px)'}).show();
        $('.book').css({'transform':'translateX(-'+moveLeft+'px)'});
        $('.right-side').css({'transform':'translateX(-'+moveLeft+'px)'});
      });

      $('.tri-a').on('click', function () {
        $('.tri-b').css({'transform':'rotateZ(0deg) translateY(-150px) translateX(0px)'}).show();
        $('.tri-a').css({'transform':'rotateZ(0deg) translateY(-150px) translateX(0px)'}).hide();
        $('.book').css({'transform':'translateX(0px)'});
        $('.right-side').css({'transform':'translateX(0px)'});
      });

    }
  };
});
