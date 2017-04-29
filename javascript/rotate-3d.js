/*
JS used only for camera rotation, key click event's
*/
$(document).ready(function() {

  var $demo = $(".platform-3d__rotate");
  var rotation = {
    x: 70,
    z: 45
  };
  var prevValues = {
    x: 70,
    y: 45
  };
  var rotationActive = false;
  var startAnimTime = 5400;
  var timeout = setTimeout(function() {
    $demo.addClass("ready");
  }, 4400);

  $('.platform-3d').on("mousedown", function(e) {
    var startX = e.pageX;
    var startY = e.pageY;

    $('.platform-3d').on("mousemove", function(e) {
      var deltaX;
      var deltaY;
      if (!rotationActive) {
        deltaX = startX - e.pageX;
        deltaY = startY - e.pageY;
        rotationActive = true;
      } else {
        deltaX = prevValues.x - e.pageX;
        deltaY = prevValues.y - e.pageY;
      }
      prevValues.x = e.pageX;
      prevValues.y = e.pageY;

      var degX = deltaX * 100 / 360;
      var degY = deltaY * 100 / 360;

      rotation.x += degY;
      rotation.z += degX;

      $demo.css("transform", "rotateX("+rotation.x+"deg) rotateZ("+rotation.z+"deg)");
    });

    $('.platform-3d').on("mouseup", function(e) {
      $('.platform-3d').off("mousemove");
      $('.platform-3d').off("mouseup");
      rotationActive = false;
      prevValues.x = 0;
      prevValues.y = 0;
    });
  });

});
