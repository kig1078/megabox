// skip menu
function skip(){
$('.skip>a').focus(function(){
  $(this).parent().css('top','0');
});
$('.skip>a').focusout(function(){
  $(this).parent().css('top','-50px');
});
}