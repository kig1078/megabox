
function subPosition(){
  var movie=$('a[title="영화"]').offset().left;
  var ticket=$('a[title="예매"]').offset().left;
  var cinema=$('a[title="극장"]').offset().left;
  var event=$('a[title="이벤트"]').offset().left;
  var benefit=$('a[title="혜택"]').offset().left;
  $('#movie_sub').css('padding-left',movie-130);
  $('#ticket_sub').css('padding-left',ticket-130);
  $('#cinema_sub').css('padding-left',cinema-130);
  $('#event_sub').css('padding-left',event-130);
  $('#benefit_sub').css('padding-left',benefit-130);
}