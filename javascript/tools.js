
var block = {
  length: 3
}

var FizzyText = function() {
  this.rotateX = 0;
  this.rotateY = 0;
  this.rotateZ = 0;
};

var text = new FizzyText();
var gui = new dat.GUI();

var rotateX = gui.add(text, 'rotateX', -180, 180);
var rotateY = gui.add(text, 'rotateY', -180, 180);
var rotateZ = gui.add(text, 'rotateZ', -180, 180);

rotateX.onChange(function(value){transformGrid()});
rotateY.onChange(function(value){transformGrid()});
rotateZ.onChange(function(value){transformGrid()});

// Create
var create = function() {
  var blocks = '';

  for(var i = 1; i < block.length -1; i++) {
    blocks += '<div class="b">';
  }
  blocks += '<div class="b b--last">';

  $('.grid-3d').append(blocks);
}

// Add
$('.tool__add').on('click', function() {
  var elem = $('.grid-3d .b--last');

  if( elem.length ) {
    var $last = $('.grid-3d .b--last');
  } else {
    var $last = $('.grid-3d');
  }

  $last.append('<div class="b b--last">');
  $last.removeClass('b--last');

  transformGrid();
});

// Remove
$('.tool__remove').on('click', function() {
  var $last = $('.grid-3d .b--last');

  $last.parent('.b').addClass('b--last');
  $last.remove();
})

create();

transformGrid();

function transformGrid() {
  //console.log(rotateX.initialValue);
  $('.grid-3d div').css( 'transform',
    'translateX(' + 100 + '%)' +
    'rotateX(' + rotateX.object.rotateX + 'deg)' +
    'rotateY(' + rotateX.object.rotateY + 'deg)' +
    'rotateZ(' + rotateX.object.rotateZ + 'deg)'
  );
}
