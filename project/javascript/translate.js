var Translate = {
  direction: {
    front: 119, // W key
    left: 97, // S key
    back: 115, // D key
    right: 100 // A key
  },
  speed: 12,
  x: null,
  y: null,
  z: null,
  function: null
};

Translate.function = function() {
  var selector = {
    doc: $(document),
    object: $(".object")
  };

  selector.doc.keypress(function(e) {
    var speedH = (Rotate.speedRatio * Translate.speed) / 1;
    var speedV = (Rotate.speedRatio * Translate.speed) / 1;

    var translateX = Rotate.ratio.x * speedH;
    var translateY = Rotate.ratio.y * speedH;
    var translateZ = Rotate.ratio.z * speedV;

    if (Translate.direction.front === e.which) {
      Translate.x += translateX;
      Translate.y += translateY;
      Translate.z += translateZ;
    } else if (Translate.direction.left === e.which) {
      Translate.x += translateY;
      Translate.y -= translateX;
    } else if (Translate.direction.back === e.which) {
      Translate.x -= translateX;
      Translate.y -= translateY;
      Translate.z -= translateZ;
    } else if (Translate.direction.right === e.which) {
      Translate.x -= translateY;
      Translate.y += translateX;
    }

    console.log(Translate.x, Translate.y, Translate.z);

    // Apply values
    selector.object.css({
      transform:
        "translate3d(" +
        Translate.x +
        "px, " +
        Translate.y +
        "px, " +
        Translate.z +
        "px)"
    });
  });
};

$(document).ready(function() {
  Translate.function();
});
