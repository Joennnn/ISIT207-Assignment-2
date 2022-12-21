// Joen Tai
// UOW ID: 7432100

$(document).ready(function() {
    var image = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
    $(".die").hide();
    $("button").click(function() {
        var num = Math.floor(Math.random() * 6) + 1
        if (num == 1) {
            $(".die").attr("src", image[0]).show();
        }
        else if (num == 2) {
            $(".die").attr("src", image[1]).show();
        }
        else if (num == 3) {
            $(".die").attr("src", image[2]).show();
        }
        else if (num == 4) {
            $(".die").attr("src", image[3]).show();
        }
        else if (num == 5) {
            $(".die").attr("src", image[4]).show();
        }
        else {
            $(".die").attr("src", image[5]).show();
        }
    });
});