var rotation = {
  x: 45,
  z: 225
};

var settings = {
  selector: {
    general: $('.general'),
    container: $('.object-container')
  },
  firstMove: true,
  prevX: 0,
  prevY: 0
};


settings.selector.general.on('mousedown ', function(e) {
  settings.prevX = e.pageX;
  settings.prevY = e.pageY;

  settings.selector.general.on('mousemove', function(e) {
    var deltaX = settings.prevX - e.pageX;
    var deltaY = settings.prevY - e.pageY;

    settings.prevX = e.pageX;
    settings.prevY = e.pageY;

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

    settings.selector.container.css('transform', 'rotateX(' + rotation.x + 'deg) rotateZ(' + rotation.z + 'deg)');
  });

  settings.selector.general.on('mouseup', function(e) {
    $(this).off('mousemove');
  });
});
