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

var perspective = function() {
  $('.platform-3d').css('perspective', control.perspective);
};

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
};

var transform = function() {
  var styleTag = $('style[data-type="UIControls"]');

  styleTag.empty();

  styleTag.append(
    '.grid-3d .b--x {' +
      'transform:' +
        'translateX(' + 100 + '%)' +
        'rotateX(' + control.rotateX + 'deg)' +
        'rotateY(' + control.rotateY + 'deg)' +
        'rotateZ(' + control.rotateZ + 'deg);' +
      'width:' + control.width + 'px;' +
      'height:' + control.height + 'px;' +
    '};'
  );
};

$( window ).ready(function() {
  perspective();
  layersX();
  transform();
});
