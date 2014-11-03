require(['jquery'], function () {
     var $view=$(".view");
     var $input_wrap=$view.find(".input_wrap");
     var $input=$input_wrap.find("input");

    $input.on("focus",function(){
       $(this).addClass("input_bg");
    });

    $input.on("blur",function(){
        $(this).removeClass("input_bg");
    });
})
