var rotation = {
  x: 45,
  z: 45
};

$(document).ready(function() {

  var $demo = $('.platform-3d__rotate');

  var prevValues = {
    x: 0,
    y: 0
  };
  var rotationActive = false;

  $('.platform-3d').on('mousedown ', function(e) {
    var startX = e.pageX;
    var startY = e.pageY;

    $('.platform-3d').on('mousemove', function(e) {
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

      rotation.x += deltaY * 100 / 360;
      rotation.z += deltaX * 100 / 360;

      // Keep degrees from 0˚ to 360˚
      if (rotation.x > 360) {
        rotation.x -= 360;
      } else if (rotation.x < 0) {
        rotation.x += 360;
      }

      if (rotation.z > 360) {
        rotation.z -= 360;
      } else if (rotation.z < 0) {
        rotation.z += 360;
      }

      $demo.css('transform', 'rotateX(' + rotation.x + 'deg) rotateZ(' + rotation.z + 'deg)');
    });

    $('.platform-3d').on('mouseup', function(e) {
      $('.platform-3d').off('mousemove');
      $('.platform-3d').off('mouseup');
      rotationActive = false;
      prevValues.x = 0;
      prevValues.y = 0;
    });
  });
});
