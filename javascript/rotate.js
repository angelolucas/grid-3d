var selector = {
  general: $('.general'),
  container: $('.object-container')
};

var rotation = {
  x: 45,
  z: 225,
  prevX: 0,
  prevY: 0
};

selector.general.on('mousedown ', function(e) {
  rotation.prevX = e.pageX;
  rotation.prevY = e.pageY;

  selector.general.on('mousemove', function(e) {
    var deltaX = rotation.prevX - e.pageX;
    var deltaY = rotation.prevY - e.pageY;

    rotation.prevX = e.pageX;
    rotation.prevY = e.pageY;

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

    selector.container.css('transform', 'rotateX(' + rotation.x + 'deg) rotateZ(' + rotation.z + 'deg)');
  });

  selector.general.on('mouseup', function(e) {
    $(this).off('mousemove');
  });
});
