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
  var startX = e.pageX;
  var startY = e.pageY;

  settings.selector.general.on('mousemove', function(e) {
    var deltaX = 0;
    var deltaY = 0;

    if (!settings.firstMove) {
      deltaX = settings.prevX - e.pageX;
      deltaY = settings.prevY - e.pageY;
    }

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

    settings.firstMove = false;

    settings.selector.container.css('transform', 'rotateX(' + rotation.x + 'deg) rotateZ(' + rotation.z + 'deg)');
  });

  settings.selector.general.on('mouseup', function(e) {
    $(this).off('mousemove');
    $(this).off('mouseup');
    settings.firstMove = true;
    settings.prevX = 0;
    settings.prevY = 0;
  });
});
