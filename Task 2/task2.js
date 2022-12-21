// Joen Tai
// UOW ID: 7432100

$(document).ready(function(){
    $("img").click(function(){
        $("img").fadeOut(1000);
        $("h3").fadeOut(1000);
    });
    $("button").click(function(){
        $("button").slideUp(1000);
    });
    $("p").click(function(){
        $("p").hide(1000);
    });
    $("a").click(function(){
        $("img").show(1000);
        $("h3").show(500);
        $("button").slideDown(500);
        $("p").show(500);
    })
})