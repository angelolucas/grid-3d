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

      Translate.x += Rotate.hx * Translate.speed;
      Translate.y += Rotate.hy * Translate.speed;

    } else if (Translate.direction.back === e.which) {

      Translate.x += reverse(Rotate.hx) * Translate.speed;
      Translate.y += reverse(Rotate.hy) * Translate.speed;

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
