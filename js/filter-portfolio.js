$(function() {
   $(".btn-filter").on("click", function() {
       var value =$(this).attr("data-filter");
       if(value=="all") {
           $(".filter").show("100");
       }
       else {
           $(".filter").not("." + value).hide("1000");
           $(".filter").filter("." + value).show("1000");
       }
       $("div .btn-filter").on("click",function() {
        $(this).addClass("active").siblings().removeClass("active");
       })
   })
});

