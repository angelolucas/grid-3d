// Default Values
var transform = {
  translateX: 100, // %
  rotateX: 0, // deg
  rotateY: 0, // deg
  rotateZ: 0, // deg
}

var block = {
  length: 3
}

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

// Define Default Values;
$('.tools__input-rotateX').val(transform.rotateX);
$('.tools__input-rotateY').val(transform.rotateX);
$('.tools__input-rotateZ').val(transform.rotateX);

$('.tools__input-rotateX').on('input', function(){
  $('.tools__input-rotateX').val($(this).val());
  transform.rotateX = $(this).val();
  transformGrid();
})

$('.tools__input-rotateY').on('input', function(){
  $('.tools__input-rotateY').val($(this).val());
  transform.rotateY = $(this).val();
  transformGrid();
})

$('.tools__input-rotateZ').on('input', function(){
  $('.tools__input-rotateZ').val($(this).val());
  transform.rotateZ = $(this).val();
  transformGrid();
})

transformGrid();

function transformGrid() {
  $('.grid-3d div').css( 'transform',
    'translateX(' + transform.translateX + '%)' +
    'rotateX(' + transform.rotateX + 'deg)' +
    'rotateY(' + transform.rotateY + 'deg)' +
    'rotateZ(' + transform.rotateZ + 'deg)'
  );
}
