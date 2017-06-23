$(document).ready(function() {

  var speed = 9;
  var front = 119; // W key
  var back = 115; // S key
  var left = 97; // D key
  var right = 100; // A key

  var values = {
    x: 0,
    y: 0
  }

  $(document).keypress(function(e) {
    var quadrant = 1;
    var quadrantDegree = rotation.z;

    // Find Quadrant Based on Rotation
    if (rotation.z > 90 && rotation.z <= 180) {
      quadrant = 2;
      quadrantDegree -= 90;
    } else if (rotation.z > 180 && rotation.z <= 270) {
      quadrant = 3;
      quadrantDegree -= 180;
    } else if (rotation.z > 270) {
      quadrant = 4;
      quadrantDegree -= 270;
    }

    // Find Quadrant Based on Direction
    if (e.which === left) {
      quadrant += 1;
    } else if (e.which === back) {
      quadrant += 2;
    } else if (e.which === right) {
      quadrant += 3;
    }

    // Corrects second round of the quadrant
    if (quadrant > 4) {
      quadrant -= 4;
    }

    var rotationPercent = (quadrantDegree * 100 / 90) / 100;
    var translateBasedOnRotation = rotationPercent * speed;
    var restTranslateBasedOnRotation = (1 - rotationPercent) * speed;

    // Apply values
    if (quadrant === 1) {
      values.y += restTranslateBasedOnRotation;
      values.x += translateBasedOnRotation;
    } else if (quadrant === 2) {
      values.y -= translateBasedOnRotation;
      values.x += restTranslateBasedOnRotation;
    } else if (quadrant === 3) {
      values.y -= restTranslateBasedOnRotation;
      values.x -= translateBasedOnRotation;
    } else {
      values.y += translateBasedOnRotation;
      values.x -= restTranslateBasedOnRotation;
    }

    translate();
  })

  var translate = function() {
    $('.grid-3d').css({
      'transform': 'translate3d(' + values.x + 'px, ' + values.y + 'px, 0px)'
    })
  }

});
