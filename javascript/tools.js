// Default Values
var transform = {
  translateX: 100, // %
  rotateX: 0, // deg
  rotateY: 0, // deg
  rotateZ: 0, // deg
}

var block = {
  length: 10
}

// Create
var create = function() {
  var blocks = '<div>';

  for(var i = 0; i < block.length; i++) {
    blocks += '<div>';
  }

  $('.grid-3d').append(blocks);
}

create();

// Define Default Values;
$('.tools__input-rotateX').val(transform.rotateX);
$('.tools__input-rotateY').val(transform.rotateX);
$('.tools__input-rotateZ').val(transform.rotateX);

$('.tools__input-rotateX').on('input', function(){
  $('.tools__input-rotateX').val($(this).val());
  transform.rotateX = $(this).val();
  changeGrid();
})

$('.tools__input-rotateY').on('input', function(){
  $('.tools__input-rotateY').val($(this).val());
  transform.rotateY = $(this).val();
  changeGrid();
})

$('.tools__input-rotateZ').on('input', function(){
  $('.tools__input-rotateZ').val($(this).val());
  transform.rotateZ = $(this).val();
  changeGrid();
})


changeGrid();

function changeGrid() {
  $('.grid-3d div').css( 'transform',
    'translateX(' + transform.translateX + '%)' +
    'rotateX(' + transform.rotateX + 'deg)' +
    'rotateY(' + transform.rotateY + 'deg)' +
    'rotateZ(' + transform.rotateZ + 'deg)'
  );
}
