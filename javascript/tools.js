
var translateX = 'translateX(100%)';

$('input').on('input', function(e){

  $('input').val($(this).val());

  var rotateX = "rotateX(" + $(this).val() + "deg";

  $('.grid-3d div').css( "transform", translateX + rotateX );

})
