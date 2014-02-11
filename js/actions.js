// Generated by CoffeeScript 1.6.3
(function() {
  var setAndBindSizes;

  $(document).ready(function() {
    $.backstretch("img/preslawn.png");
    $(".backstretch").css({
      "position": "absolute"
    });
    $(".row").hide();
    return $(".backstretch img").load(function() {
      $("#header").fadeIn(700);
      setAndBindSizes();
      return $(".row").show();
    });
  });

  setAndBindSizes = function() {
    var setSizes;
    setSizes = function() {
      return $("#header").height($(".backstretch").height());
    };
    $(window).bind('resize', function() {
      return setSizes();
    });
    return setSizes();
  };

}).call(this);
