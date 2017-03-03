
angular.module("meals").directive('homeAni', function() {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {

      totHeight = window.screen.availHeight;
      totWidth = window.screen.availWidth;

      $('.home-container').mousemove(function(event){
        $("span").text(event.pageX + ", " + event.pageY+","+totWidth+".");

        $('.counter').css({
          'transform':'translateX(' + (event.pageX-totWidth/2) / 8 + 'px) translateY(' + (event.pageY-totHeight/2) / 6.5 + 'px)'
        });

        $('.chandelier').css({
          'transform':'translateX(' + (event.pageX-totWidth/2) / 8.5 + 'px) translateY(' + (event.pageY-totHeight/2) / 4.5 + 'px)'
        });

        $('.fridge').css({
          'transform':'translateX(' + (event.pageX-totWidth/2) / 10.5 + 'px) translateY(' + (event.pageY-totHeight/2) / 10.5 + 'px)'
        });

        $('.grass').css({
          'transform':'translateX(' + (event.pageX-totWidth/2) / 11.5 + 'px) translateY(' + (event.pageY-totHeight/2) / 11.5 + 'px)'
        });

        $('.blurred').css({
          'transform':'translateX(' + (event.pageX-totWidth/2) / 9.5 + 'px) translateY(' + (event.pageY-totHeight/2) / 9.5 + 'px)'
        });

      });

    }
  };
});
