$(document).ready(function(){
    $(".full_info_wrap .tabs ul li").click(function(){
        $(".full_info_wrap .tabs ul li").removeClass("active");
        $(this).addClass("active");

        var datali = $(this).attr("data-li");

        $(".full_info_item").hide();

        if(datali == "experience"){
            $(".experience").show();
        }
        else if(datali == "education"){
            $(".education").show();
        }
        else if(datali == "contact"){
            $(".contact").show();
        }
        else{
            console.log("Loding...");
        }
    })
})