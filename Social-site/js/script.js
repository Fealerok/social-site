$(document).ready(function(){
    $("header").addClass("animate__animated animate__slideInDown");
    setTimeout(function(){
        $(".left_content").addClass("animate__animated animate__slideInLeft opacity");
    }, 500);
    
    
    
    $("#like").click(function(){
        if ($(this).hasClass("fa fa-heart-o")){
            $(this).removeClass("fa fa-heart-o");
            $(this).addClass("fa fa-heart");
            $(".iicons_news span").addClass("visible_num");
            $(".iicons_news span").text("1");
            
        }
        else {
            $(this).removeClass("fa fa-heart");
            $(this).addClass("fa fa-heart-o");
            $(".iicons_news span").removeClass("visible_num");
            $(".iicons_news span").text("0");
            
        }
        
        
        
    });
    
    $("#like2").click(function(){
        if ($(this).hasClass("fa fa-heart-o")){
            $(this).removeClass("fa fa-heart-o");
            $(this).addClass("fa fa-heart");
            $("#num_ico").addClass("visible_num");
            $("#num_ico").text("1");
        }
        else {
            $(this).removeClass("fa fa-heart");
            $(this).addClass("fa fa-heart-o");
            $("#num_ico").removeClass("visible_num");
            $("#num_ico").text("0");
            
        }
        
    });
    
    
    
    
    
    
});