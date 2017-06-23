$(document).ready(function() {

  var speed = 4;
  var front = 119; // W key
  var back = 115; // S key
  var left = 97; // D key
  var right = 100; // A key

  var values = {
    x: 0,
    y: 0
  }

  $(document).keypress(function(e) {



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

    // Find Quadrant Based on Direction
    if (e.which === left) {
      quadrant += 1;
    } else if (e.which === back) {
      quadrant += 2;
    } else if (e.which === right) {
      quadrant += 3;
    }

    // Corrige segunda volta do quadrante
    if (quadrant > 4) {
      quadrant -= 4;
    }

    var rotationPercent = (rotation.z * 100 / 90) / 100;
    var translateBasedOnRotation = rotationPercent * speed;
    var restTranslateBasedOnRotation = (1 - rotationPercent) * speed;

    // Aplica valores
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

    console.log(quadrant);

    translate();
  })

  var translate = function() {
    $('.grid-3d').css({
      'transform': 'translate3d(' + values.x + 'px, ' + values.y + 'px, 0px)'
    })
  }

});
