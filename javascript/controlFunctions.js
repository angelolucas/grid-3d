var control = {
  perspective: 800,
  width: 40,
  height: 40,
  gridX: {
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    length: 10,
  },
  gridY: {
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    length: 10,
  }
};

var perspective = function() {
  $('.platform-3d').css('perspective', control.perspective);
};

// layers X
var Xlength = function() {
  $('.grid-3d').find('> .b').remove();

  var blocks = '';

  for(var i = 0; i < control.gridX.length; i++) {
    blocks += '<div class="b b--x" data-b="' + i + '">';
  }

  $('.grid-3d').append(blocks);

  Ylength();
};

// layers Y
var Ylength = function() {
  for(var x = 0; x < control.gridX.length; x++) {
    var position = $('.grid-3d').find('.b[data-b="' + x + '"]');
    position.find('> .b--y').remove();
    var blocks = '';

    for(var y = 1; y < control.gridY.length; y++) {
      blocks += '<div class="b b--y">';
    }
    position.append(blocks);
  }
};

var styleGridY = function() {
  var styleTag = $('style[data-type="grid-y"]');

  styleTag.empty();

  styleTag.append(
    '.grid-3d .b--y {' +
      'transform:' +
        'translateY(' + 100 + '%)' +
        'rotateX(' + control.gridY.rotateX + 'deg)' +
        'rotateY(' + control.gridY.rotateY + 'deg)' +
        'rotateZ(' + control.gridY.rotateZ + 'deg);' +
    '};'
  );
};

var styleGridX = function() {
  var styleTag = $('style[data-type="grid-x"]');

  styleTag.empty();

  styleTag.append(
    '.grid-3d .b--x {' +
      'transform:' +
        'translateX(' + 100 + '%)' +
        'rotateX(' + control.gridX.rotateX + 'deg)' +
        'rotateY(' + control.gridX.rotateY + 'deg)' +
        'rotateZ(' + control.gridX.rotateZ + 'deg);' +
      'width:' + control.width + 'px;' +
      'height:' + control.height + 'px;' +
    '};'
  );
};


$( window ).ready(function() {
  perspective();
  Xlength();
  styleGridX();
  styleGridY();
});
