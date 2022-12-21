// Joen Tai
// UOW ID: 7432100

$(document).ready(function(){
    var currentPosition = 0;
    var currentDirection = "right";
    var maxDistance = $(window).width();
    
    $("button").click(function() {
        move();
    });
    $("a").click(function() {
        stop();
    });
    
    function move()
    {
        if(currentDirection == "right") {
            moveRight();
        }
        else {
            moveLeft();
        }
    }
    
    function moveRight() {
        currentPosition = $(".pandaimg").position().left;
        currentDirection ="right";
        var travel = maxDistance - currentPosition;
        $(".pandaimg").animate({left: "+="+travel}, 2000, "swing", moveLeft);
    }
    
    function moveLeft() {
        currentPosition = $(".pandaimg").position().left;
        currentDirection ="left";
        var travel = currentPosition;
        $(".pandaimg").animate({left: "-="+travel}, 2000, "swing", moveRight);
    }
    
    function stop() {
        $(".pandaimg").stop(true, false);
    }
});
