$(function () {

    // 滑動至指定位置
    $("nav a").click(function () {
        var btn = $(this).attr("href"); //返回取得屬性與值
        var pos = $(btn).offset(); //抓取相對的座標位置
        $("html,body").animate({ scrollTop: pos.top }, 1000); //變數pos的top(y軸)
    });
});

/* 淡出淡入 */
/* $(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $('#gotop').stop().fadeTo('fast',7);
    }else{
        $('#gotop').stop().fadeOut('fast');
    }
}); */

$(window).scroll (function(){
    if($(this).scrollTop() > 200){
    
        $('#gotop').stop().fadeTo('fast',1);
    } else {
    
        $('#gotop').stop().fadeOut('fast');
    }
    });

    
    $('.box').smoove({
        offset  : '40%',
        });