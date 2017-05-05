var control = {
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  layers: 10
};

var gui = new dat.GUI({width: 400});

gui.remember(control);

gui.add(control, 'rotateX', -180, 180).onChange(function(){
  if(control.rotateX > -1 && control.rotateX < 1)
    control.rotateX = 0;

  transform();
});
gui.add(control, 'rotateY', -180, 180).onChange(function(){
  if(control.rotateY > -1 && control.rotateY < 1)
    control.rotateY = 0;

  transform();
});
gui.add(control, 'rotateZ', -180, 180).onChange(function(){
  if(control.rotateZ > -1 && control.rotateZ < 1)
    control.rotateZ = 0;

  transform();
});
gui.add(control, 'layers', 0, 100).step(1).onChange(function(){
  create();
});

// Create
var create = function() {
  $('.grid-3d').find('> .b').remove();

  var blocks = '';

  for(var i = 1; i < control.layers -1; i++) {
    blocks += '<div class="b">';
  }
  blocks += '<div class="b b--last">';

  $('.grid-3d').append(blocks);

  transform();
};

var transform = function() {
  $('.grid-3d div').css( 'transform',
    'translateX(' + 100 + '%)' +
    'rotateX(' + control.rotateX + 'deg)' +
    'rotateY(' + control.rotateY + 'deg)' +
    'rotateZ(' + control.rotateZ + 'deg)'
  );
};

$( window ).ready(function() {
  create();
  transform();
})
