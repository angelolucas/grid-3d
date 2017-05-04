
var block = {
  length: 3
}

var FizzyText = function() {
  this.rotateX = 0;
  this.rotateY = 0;
  this.rotateZ = 0;
  this.layers = 10;
};

var text = new FizzyText();
var gui = new dat.GUI({width: 300});

gui.remember(text);

var rotateX = gui.add(text, 'rotateX', -180, 180);
var rotateY = gui.add(text, 'rotateY', -180, 180);
var rotateZ = gui.add(text, 'rotateZ', -180, 180);
var layers = gui.add(text, 'layers', 0, 100);

rotateX.onChange(function(){transformGrid()});
rotateY.onChange(function(){transformGrid()});
rotateZ.onChange(function(){transformGrid()});
layers.onChange(function(){create()})

// Create
var create = function() {
  $('.grid-3d').find('> .b').remove();

  var blocks = '';

  for(var i = 1; i < layers.object.layers -1; i++) {
    blocks += '<div class="b">';
  }
  blocks += '<div class="b b--last">';

  $('.grid-3d').append(blocks);
}

create();

transformGrid();

function transformGrid() {
  $('.grid-3d div').css( 'transform',
    'translateX(' + 100 + '%)' +
    'rotateX(' + rotateX.object.rotateX + 'deg)' +
    'rotateY(' + rotateX.object.rotateY + 'deg)' +
    'rotateZ(' + rotateX.object.rotateZ + 'deg)'
  );
}
