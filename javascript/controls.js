var control = {
  perspective: 800,
  width: 40,
  height: 40,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  layersX: 10,
  layersY: 10,
};

var gui = new dat.GUI({width: 400});

gui.add(control, 'width', 2, 100).onChange(function(){
  transform();
});
gui.add(control, 'height', 2, 100).onChange(function(){
  transform();
});
gui.add(control, 'perspective', 300, 1000).onChange(function(){
  perspective();
})

var gridX = gui.addFolder('Grid X');
gridX.open();

gridX.add(control, 'rotateX', -180, 180).onChange(function(){
  if(control.rotateX > -1 && control.rotateX < 1)
    control.rotateX = 0;

  transform();
});
gridX.add(control, 'rotateY', -180, 180).onChange(function(){
  if(control.rotateY > -1 && control.rotateY < 1)
    control.rotateY = 0;

  transform();
});
gridX.add(control, 'rotateZ', -180, 180).onChange(function(){
  if(control.rotateZ > -1 && control.rotateZ < 1)
    control.rotateZ = 0;

  transform();
});
gridX.add(control, 'layersX', 0, 40).step(1).onChange(function(){
  layersX();
});

var perspective = function() {
  $('.platform-3d').css('perspective', control.perspective);
}

var gridY = gui.addFolder('Grid Y');
gridY.add(control, 'layersY', 0, 40).step(1).onChange(function(){
  layersY();
});

gridY.open();

// layers X
var layersX = function() {
  $('.grid-3d').find('> .b').remove();

  var blocks = '';

  for(var i = 0; i < control.layersX; i++) {
    blocks += '<div class="b b--x" data-b="' + i + '">';
  }

  $('.grid-3d').append(blocks);

  layersY();
};

// layers Y
var layersY = function() {
  for(var x = 0; x < control.layersX; x++) {
    var position = $('.grid-3d').find('.b[data-b="' + x + '"]');
    position.find('> .b--y').remove();
    var blocks = '';

    for(var y = 1; y < control.layersY; y++) {
      blocks += '<div class="b b--y">';
    }
    position.append(blocks);
  }
  transform();
}

var transform = function() {
  $('.grid-3d .b--x').css({
    'transform':
      'translateX(' + 100 + '%)' +
      'rotateX(' + control.rotateX + 'deg)' +
      'rotateY(' + control.rotateY + 'deg)' +
      'rotateZ(' + control.rotateZ + 'deg)',
    'width': control.width,
    'height': control.height
  });
};

$( window ).ready(function() {
  perspective();
  layersX();
  transform();
})
