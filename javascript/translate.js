var Translate = {
  keys: {
    front: 119, // W key
    left: 97, // S key
    back: 115, // D key
    right: 100 // A key
  },
  speed: 5,
  function: null
}

Translate.function = function() {

  var selector = {
    doc: $(document),
    object: $('.object')
  };

  selector.doc.keypress(function(e) {

    console.log(Rotate.hx, Translate.speed);

    //translate();
  })

  var translate = function() {
    selector.object.css({
      'transform': 'translate3d(' + values.x + 'px, ' + values.y + 'px, 0px)'
    });
  };

};

$( document ).ready( function() {
  Translate.function();
} );
