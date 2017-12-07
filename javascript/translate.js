$(document).ready(function() {

  var speed = 15;
  var speedRatio;
  var speedPercente = 0;
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

    // Find Quadrant Based on Z Rotation
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

    // Calcula relação de velocidade XY ou Z
    if (rotation.x < 90) {
      speedRatio = rotation.x * 1 / 90;
    } else if (rotation.x > 90 && rotation.x <= 180) {
      speedRatio = 1 - (rotation.x - 90) * 1 / 90;
    } else if (rotation.x > 180 && rotation.x <= 270) {
      speedRatio = - ( (rotation.x - 180) * 1 / 90);
    } else if (rotation.x > 270) {
      speedRatio = - (1 - (rotation.x - 270) * 1 / 90);
    }
    speedPercente = speedRatio * speed / 1;

    var rotationPercent = (quadrantDegree * 100 / 90) / 100;
    var translateBasedOnRotation = rotationPercent * speedPercente;
    var restTranslateBasedOnRotation = (1 - rotationPercent) * speedPercente;

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
    $('.object').css({
      'transform': 'translate3d(' + values.x + 'px, ' + values.y + 'px, 0px)'
    });
  };

});
