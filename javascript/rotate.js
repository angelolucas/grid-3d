var Rotate = {
  deg: {
    x: 45,
    z: 225
  },
  ratio: {
    x: -0.5,
    y: -0.5
  },
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

      Rotate.deg.x += deltaY * 100 / 360;
      Rotate.deg.z += deltaX * 100 / 360;

      // Keep degrees from 0˚ to 360˚
      if (Rotate.deg.x > 360) {
        Rotate.deg.x -= 360;
      } else if (Rotate.deg.x < 0) {
        Rotate.deg.x += 360;
      }

      if (Rotate.deg.z > 360) {
        Rotate.deg.z -= 360;
      } else if (Rotate.deg.z < 0) {
        Rotate.deg.z += 360;
      }

      // Valores X e Y Horizontal
      if (Rotate.deg.z <= 90) {
        Rotate.ratio.x = Rotate.deg.z * 1 / 90;
        Rotate.ratio.y = 1 - Rotate.deg.z * 1 / 90;

      } else if (Rotate.deg.z > 90 && Rotate.deg.z <= 180) {

        Rotate.ratio.x = 1 - (Rotate.deg.z - 90) * 1 / 90;
        Rotate.ratio.y = - (Rotate.deg.z - 90) * 1 / 90;

      } else if (Rotate.deg.z > 180 && Rotate.deg.z <= 270) {

        Rotate.ratio.x = - (Rotate.deg.z - 180) * 1 / 90;
        Rotate.ratio.y = - (1 - (Rotate.deg.z - 180) * 1 / 90);

      } else {

        Rotate.ratio.x = - (1 - (Rotate.deg.z - 270) * 1 / 90);
        Rotate.ratio.y = (Rotate.deg.z - 270) * 1 / 90;
      }

      Rotate.ratio.x = (Rotate.ratio.x).toFixed(3);
      Rotate.ratio.y = (Rotate.ratio.y).toFixed(3);

      //console.log(Rotate.ratio.x, Rotate.ratio.y);

      selector.container.css('transform', 'rotateX(' + Rotate.deg.x + 'deg) rotateZ(' + Rotate.deg.z + 'deg)');
    });

    selector.general.on('mouseup', function(e) {
      $(this).off('mousemove');
    });
  });
};

$( document ).ready( function() {
  Rotate.function();
} );
