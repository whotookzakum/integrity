$(function(){
    $(".nav-item").mouseover(function(){
        $("#overlay").css("display","block");
    });
    $(".nav-item").mouseout(function(){
        $("#overlay").css("display","none");
    });
});