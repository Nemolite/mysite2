$(window).on("load", function () {
    var sum=0;
    $('.banner-container li img').each(function(){ 
        sum += $(this).width();
    });
    $('.banner-container ul').width(sum);
});
$(function(){
    var winWidth = $(".banner-container").width();
    var ulWidthCount = 0;
    ulWidthCount = $('.banner-container li').length;
    $(".banner-container li").width(winWidth/ulWidthCount);
    $(".banner-container li").hover(function(){            
        ulWidthCount = $('.banner-container li').length;
        var imgWidth = $(this).find("img").width();
        var bannerLi = winWidth - imgWidth;
        var remWidth = ulWidthCount - 1;
        var appWidth = bannerLi/remWidth;
        $(".banner-container li").stop(true, false).animate({width: appWidth},700);
        $(this).stop(true, false).animate({width: imgWidth},700);
        $(this).find("span.overlay").stop(true, false).fadeOut();
        }, function(){
        $(this).animate({width: winWidth/ulWidthCount},700);
        $(".banner-container li").animate({width:winWidth/ulWidthCount},700);
        $(this).find("span.overlay").fadeIn();
    });    
}); 




$(".fon-header").vegas({
    delay: 10000,
    transition: 'zoomOut',
    transitionDuration: 3000,
    slides: [
        { src: "img/fon1.jpg" },
        { src: "img/fon2.jpg" },
        { src: "img/fon3.jpg" },
        { src: "img/fon4.jpg" },
        { src: "img/fon5.jpg" }        
           
    ]
});


$(document).ready(function(){

   $(".mobile-menu-inner")
       .click(
          function()
          {
            $(".items").toggle(600);
           }
        );
 
});