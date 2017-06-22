$(document).ready(function() {

  var speed = 1;
  var front = 119; // W key
  var back = 115; // S key
  var left = 97; // D key
  var right = 100; // A key

  var values = {
    x: 0,
    y: 0
  }
  var rotationPercent;

  $(document).keypress(function(e) {
    rotationPercent = (rotation.z * 100 / 90) / 100;

    var quadrant;

    // Find Quadrant Based on Rotation
    if (rotation.z <= 90) {
      quadrant = 1;
    } else if (rotation.z <= 180) {
      quadrant = 2;
    } else if (rotation.z <= 270) {
      quadrant = 3;
    } else {
      quadrant = 4;
    }

    /*console.log(
      "rotate.z: " + rotation.z,
      "rotationPercent: ", rotationPercent,
      "restante rotationPercent: ", 1 - rotationPercent
    );*/

    // Find Quadrant Based on Direction
    if (e.which === back) {
      quadrant += 2;
    } else if (e.which === right) {
      quadrant += 3;
    } else if (e.which === left) {
      quadrant += 1;
    }

    // Corrige segunda volta do quadrante
    if (quadrant > 4) {
      quadrant -= 4;
    }

    if (quadrant === 1) {
      values.y += 1 - rotationPercent;
      values.x += rotationPercent;
    } else if (quadrant === 2) {
      values.y -= rotationPercent;
      values.x += 1 - rotationPercent;
    } else if (quadrant === 3) {
      values.y -= 1 - rotationPercent;
      values.x -= rotationPercent;
    } else {
      values.y += rotationPercent;
      values.x -= 1 - rotationPercent;
    }

    //values.y += 1 - rotationPercent;
    //values.x += rotationPercent;

      console.log(quadrant);

    translate();
  })

  var translate = function() {
    $('.grid-3d').css({
      'transform': 'translate3d(' + values.x + 'px, ' + values.y + 'px, 0px)'
    })
  }

});
