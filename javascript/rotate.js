var Rotate = {
  x: 45,
  z: 225,
  hx: -0.5,
  hy: -0.5,
  function: null,
};

Rotate.function = function() {

  var selector = {
    general: $('.general'),
    container: $('.object-container')
  };

  selector.general.on('mousedown ', function(e) {
    var prevX = e.pageX;
    var prevY = e.pageY;

    selector.general.on('mousemove', function(e) {
      var deltaX = prevX - e.pageX;
      var deltaY = prevY - e.pageY;

      prevX = e.pageX;
      prevY = e.pageY;

      Rotate.x += deltaY * 100 / 360;
      Rotate.z += deltaX * 100 / 360;

      // Keep degrees from 0˚ to 360˚
      if (Rotate.x > 360) {
        Rotate.x -= 360;
      } else if (Rotate.x < 0) {
        Rotate.x += 360;
      }

      if (Rotate.z > 360) {
        Rotate.z -= 360;
      } else if (Rotate.z < 0) {
        Rotate.z += 360;
      }

      // Valores X e Y Horizontal
      if (Rotate.z <= 90) {
        Rotate.hx = Rotate.z * 1 / 90;
        Rotate.hy = 1 - Rotate.z * 1 / 90;

      } else if (Rotate.z > 90 && Rotate.z <= 180) {

        Rotate.hx = 1 - (Rotate.z - 90) * 1 / 90;
        Rotate.hy = - (Rotate.z - 90) * 1 / 90;

      } else if (Rotate.z > 180 && Rotate.z <= 270) {

        Rotate.hx = - (Rotate.z - 180) * 1 / 90;
        Rotate.hy = - (1 - (Rotate.z - 180) * 1 / 90);

      } else {

        Rotate.hx = - (1 - (Rotate.z - 270) * 1 / 90);
        Rotate.hy = (Rotate.z - 270) * 1 / 90;
      }

      Rotate.hx = (Rotate.hx).toFixed(3);
      Rotate.hy = (Rotate.hy).toFixed(3);

      //console.log(Rotate.hx, Rotate.hy);

      selector.container.css('transform', 'rotateX(' + Rotate.x + 'deg) rotateZ(' + Rotate.z + 'deg)');
    });

    selector.general.on('mouseup', function(e) {
      $(this).off('mousemove');
    });
  });
};

$( document ).ready( function() {
  Rotate.function();
} );
