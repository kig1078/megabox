$(function(){
  $('#sitemap_btn').click(function(){
    $('.sitemap').toggle();
    var imgSrc=$('#sitemap_btn')
    if(imgSrc.attr('src')=='images/menu.png'){
      imgSrc.attr('src','images/close_btn.png');
    }else{
      imgSrc.attr('src','images/menu.png');
    }
  });
})