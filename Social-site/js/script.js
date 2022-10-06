$(document).ready(function(){
    $("header").addClass("animate__animated animate__slideInDown");
    setTimeout(function(){
        $(".left_content").addClass("animate__animated animate__slideInLeft opacity");
    }, 500);
    
    
    
    $("#like").click(function(){
        if ($(this).hasClass("fa fa-heart-o")){
            $(this).removeClass("fa fa-heart-o");
            $(this).addClass("fa fa-heart");
        }
        else {
            $(this).removeClass("fa fa-heart");
            $(this).addClass("fa fa-heart-o");
        }
        
    });
    
    $("#like2").click(function(){
        if ($(this).hasClass("fa fa-heart-o")){
            $(this).removeClass("fa fa-heart-o");
            $(this).addClass("fa fa-heart");
        }
        else {
            $(this).removeClass("fa fa-heart");
            $(this).addClass("fa fa-heart-o");
        }
        
    });
    
    
    
    
    
});