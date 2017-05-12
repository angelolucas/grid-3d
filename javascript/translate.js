$(document).ready(function() {

  var front = 119; // W key
  var back = 115; // S key
  var left = 97; // D key
  var right = 100; // A key

  var values = {
    x: 0,
    y: 0
  }

  $(document).keypress(function( e ) {
    if(e.which === front) {
      values.x += 5;
    }
    if(e.which === back) {
      values.x -= 5;
    }
    if(e.which === right) {
      values.y += 5;
    }
    if(e.which === left) {
      values.y -= 5;
    }

    translate();
  })

  var translate = function() {
    $('.grid-3d').css({
      'transform': 'translate3d(' + values.x + 'px, ' + values.y + 'px, 0px)'
    })
  }

});
