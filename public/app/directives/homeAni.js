
angular.module("meals").directive('homeAni', function() {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {

      totHeight = window.screen.availHeight;
      totWidth = window.screen.availWidth;

      // $('.home-container').mousemove(function(event){
      //   $('.chandelier').css('imagewidth','100px');
      // });
      var fasterX = 2
      var fasterY = 2;
      $('.home-container').mousemove(function(event){
        // $("span").text(event.pageX + ", " + event.pageY+","+totWidth+".");

        $('.welcome-screen').css('background-size','150px')

        $('.counter').css({
          'transform':'translateX(' + (event.pageX-totWidth/2) / 8 * fasterX + 'px) translateY(' + (event.pageY-totHeight/2) / 6.5 * fasterY  + 'px)'
        });

        $('.chandelier').css({
          'transform':'translateX(' + (event.pageX-totWidth/2) / 8.5 * fasterX  + 'px) translateY(' + (event.pageY-totHeight/2) / 4.5 * fasterY + 'px)'
        });

        $('.fridge').css({
          'transform':'translateX(' + (event.pageX-totWidth/2) / 10.5 * fasterX  + 'px) translateY(' + (event.pageY-totHeight/2) / 10.5 * fasterY + 'px)'
        });

        $('.grass').css({
          'transform':'translateX(' + (event.pageX-totWidth/2) / 11.5 * fasterX  + 'px) translateY(' + (event.pageY-totHeight/2) / 11.5 * fasterY + 'px)'
        });

        $('.blurred').css({
          'transform':'translateX(' + (event.pageX-totWidth/2) / 9.5 * fasterX  + 'px) translateY(' + (event.pageY-totHeight/2) / 9.5 * fasterY + 'px)'
        });

      });

    }
  };
});
