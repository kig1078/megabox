$(function(){
  $('#ticket_btn,#alarm_btn,#login_txt').click(function(){
    var conFirm=confirm('로그인후 이용가능 합니다.\n로그인 하시겠습니까?');
    if(conFirm){
      $('.static_menu,.wrap,.burger_menu').hide();
      $('.login_form').show();
    }
  });
  
  $('#static_bottom_btn01').click(function(){
    $('#static_bottom_btn01').parent().children().children().children('img:nth-child(1)').hide();
    $('#static_bottom_btn01').children().children('img:nth-child(2)').show();
  });
  $('#static_bottom_btn02').click(function(){
    $('#static_bottom_btn02').children().children('img:nth-child(1)').hide();
    $('#static_bottom_btn02').children().children('img:nth-child(2)').show();
  });


  $(window).scroll(function(){
    var scrTop=$(window).scrollTop();
    if(scrTop>30){
      $('.static_top').css('background-color','rgba(0,0,0,0.8)');
    }else{
      $('.static_top').css('background-color','rgba(0,0,0,0)');
    }
  });

  $('#close_btn,#burger_close').click(function(){
    $('.login_form').hide();
    $('.burger_menu').hide();
    $('.static_menu,.wrap').show();
  });

  // sub_member_toggle
  $('#member_btn').click(function(){
    $('.member_sub').toggle();
    var tmp=$('.member_sub').css('display');
    if(tmp=='block'){
      $('.center').addClass('active_padding');
    }else{
      $('.center').removeClass('active_padding');
    }
  });

  // menu_btn
  $('#toggle_btn').click(function(){
    $('.burger_menu').css('display','flex');
  });

  // main_menu_swiper
  var swiper = new Swiper('.swiper-container.main_menu', {
    slidesPerView:'auto',
    spaceBetween: 30,
    freeMode:true,
  });

  // main_menu_click_event
  $('.main_menu .swiper-slide a').click(function(){
    $('.main_menu .swiper-slide a').removeClass('active');
    $(this).addClass('active');
  });

  // mobile_poster_swiper
  var swiper = new Swiper('.swiper-container.mobile_poster', {
    slidesPerView:'auto',
    spaceBetween:30,
  });

  // random_movie_play
  $('.movie_clip').removeClass('active');
  var ranNum=Math.random();
  if(ranNum<=0.2){
    $('.movie_clip').eq(0).addClass('active');
  }else if(ranNum<=0.4){
    $('.movie_clip').eq(1).addClass('active');
  }else if(ranNum<=0.6){
    $('.movie_clip').eq(2).addClass('active');
  }else if(ranNum<=0.8){
    $('.movie_clip').eq(3).addClass('active');
  }else{
    $('.movie_clip').eq(4).addClass('active');
  };

  // video_play
  var video=document.querySelector('video');
  $('.play_btn').click(function(){
    video.play();
    $(this).removeClass('active');
    $('.stop_btn').toggleClass('active');
  });
  $('.stop_btn').click(function(){
    video.pause();
    $(this).removeClass('active');
    $('.play_btn').toggleClass('active');
  });

  // small_movie_clip_play
  $('#play01').click(function(){
    location.href="media/video_01.mp4"
  });
  $('#play02').click(function(){
    location.href="media/video_02.mp4"
  });
  $('#play03').click(function(){
    location.href="media/video_03.mp4"
  });
  $('#play04').click(function(){
    location.href="media/video_04.mp4"
  });
  $('#play05').click(function(){
    location.href="media/video_05.mp4"
  });

  // small_movie_clip_swiper
  var swiper = new Swiper('.swiper-container.swiper-container03',{
    slidesPerView:'auto',
    spaceBetween:10,
  });

  // movie_event_swiper
  var swiper = new Swiper('.swiper-container.swiper-container04',{
    slidePerView:'auto',
    spaceBetween:16,
    freeMode:true,
  });

  // movie_post_swiper
  var swiper = new Swiper('.swiper-container.swiper-container05',{
    slidePerView:'auto',
    spaceBetween:8,
    freeMode:true,
  });
})
