var Translate = {
  direction: {
    front: 119, // W key
    left: 97, // S key
    back: 115, // D key
    right: 100 // A key
  },
  speed: 5,
  x: null,
  y: null,
  function: null
};

Translate.function = function() {
  var selector = {
    doc: $(document),
    object: $(".object")
  };

  selector.doc.keypress(function(e) {
    var translateX = Rotate.ratio.x * Translate.speed;
    var translateY = Rotate.ratio.y * Translate.speed;

    if (Translate.direction.front === e.which) {
      Translate.x += translateX;
      Translate.y += translateY;
    } else if (Translate.direction.left === e.which) {
      Translate.x += translateY;
      Translate.y -= translateX;
    } else if (Translate.direction.back === e.which) {
      Translate.x -= translateX;
      Translate.y -= translateY;
    } else if (Translate.direction.right === e.which) {
      Translate.x -= translateY;
      Translate.y += translateX;
    }

    // Apply values
    selector.object.css({
      transform:
        "translate3d(" + Translate.x + "px, " + Translate.y + "px, 0px)"
    });
  });
};

$(document).ready(function() {
  Translate.function();
});
