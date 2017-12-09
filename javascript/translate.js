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
}

Translate.function = function() {

  var selector = {
    doc: $(document),
    object: $('.object')
  };

  var reverse = function(i) {
    return i - (i * 2);
  }

  selector.doc.keypress(function(e) {

    if (Translate.direction.front === e.which) {

      Translate.x += Rotate.ratio.x * Translate.speed;
      Translate.y += Rotate.ratio.y * Translate.speed;

    } else if (Translate.direction.left === e.which) {

      Translate.x += Rotate.ratio.y * Translate.speed;
      Translate.y -= Rotate.ratio.x * Translate.speed;

    } else if (Translate.direction.back === e.which) {

      Translate.x -= Rotate.ratio.x * Translate.speed;
      Translate.y -= Rotate.ratio.y * Translate.speed;

    } else if (Translate.direction.right === e.which) {

      Translate.x -= Rotate.ratio.y * Translate.speed;
      Translate.y += Rotate.ratio.x * Translate.speed;

    }

    // Apply values
    selector.object.css({
      'transform': 'translate3d(' + Translate.x + 'px, ' + Translate.y + 'px, 0px)'
    });
  })
};

$( document ).ready( function() {
  Translate.function();
} );
