
angular.module("meals").directive('homeAni', function() {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {

      totHeight = window.screen.availHeight;
      totWidth = window.screen.availWidth;

      // $('.home-container').mousemove(function(event){
      //   $('.chandelier').css('imagewidth','100px');
      // });
      var fasterX = 3
      var fasterY = 2;
      $('.home-container').mousemove(function(event){
        // $("span").text(event.pageX + ", " + event.pageY+","+totWidth+".");

        $('.welcome-screen').css({
          'transform':'rotate(-5deg) scale(.5, .5)'
        });

        $('.counter').css({
          'transform':'translateX(' + (event.pageX-totWidth/2) / 8 * fasterX + 'px) translateY(' + (event.pageY-totHeight/2) / 6.5 * fasterY  + 'px) scale(1.3, 1.3)'
        });

        $('.chandelier').css({
          'transform':'translateX(' + (event.pageX-totWidth/2) / 8.5 * fasterX  + 'px) translateY(' + (event.pageY-totHeight/2) / 2.5 * fasterY + 'px) scale(1.3, 1.3)'
        });

        $('.fridge').css({
          'transform':'translateX(' + (event.pageX-totWidth/2) / 10.5 * fasterX  + 'px) translateY(' + (event.pageY-totHeight/2) / 10.5 * fasterY + 'px) scale(1.3, 1.3)'
        });

        $('.grass').css({
          'transform':'translateX(' + (event.pageX-totWidth/2) / 11.5 * fasterX  + 'px) translateY(' + (event.pageY-totHeight/2) / 11.5 * fasterY + 'px) scale(1.3, 1.3)'
        });

        $('.blurred').css({
          'transform':'translateX(' + (event.pageX-totWidth/2) / 9.5 * fasterX  + 'px) translateY(' + (event.pageY-totHeight/2) / 9.5 * fasterY + 'px) scale(1.3, 1.3)'
        });

      });

    }
  };
});
