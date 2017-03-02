
angular.module("meals").directive('homeAni', function() {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {

      $('.home-container').mousemove(function(event){
        $("span").text(event.pageX + ", " + event.pageY);

        $('.counter').css({
          'transform':'translateX(' + (event.pageX-800) / 6.5 + 'px)'
        });

        $('.chandelier').css({
          'transform':'translateX(' + (event.pageX-800) / 8.5 + 'px)'
        });

        $('.fridge').css({
          'transform':'translateX(' + (event.pageX-800) / 10.5 + 'px)'
        });

        $('.grass').css({
          'transform':'translateX(' + (event.pageX-800) / 11.5 + 'px)'
        });

        $('.blurred').css({
          'transform':'translateX(' + (event.pageX-800) / 9.5 + 'px)'
        });

      });

      // $(window).on('scroll', function() {
      //   var magic = $(this).scrollTop();
      //   console.log(magic);
      //
      //   var shooting = .1*Math.abs(500-magic);
      //

      //
      //   $('.headline').css({
      //   'transform': 'translate(+' + magic / 8 + '%) rotateY('+magic+'deg)'
      //   });
      // });





      $('.center').on('click', function () {
        console.log('clicked with jquery');
        $('.center').css('background-color','red');
      });




    }
  };
});
