// Joen Tai
// UOW ID: 7432100

$(document).on("scroll", function(){
    var pixels = $(document).scrollTop();
    var pageHeight = $(document).height() - $(window).height();
    var progress = 100 * pixels / pageHeight;
    
    $("div.progressbar").css("width", progress + "%");
});

//Function 2
$(document).ready(function(){
    $('.inputslider').on('change', function () {
        var v = $(this).val();
        $('.textsize').css('font-size', v + 'px')
        $('.tspan').html(v);
    });

    // Price filter
    function showProducts(minPrice, maxPrice) {
        $(".products li").hide().filter(function() {
            var price = parseInt($(this).data("price"), 10);
            return price >= minPrice && price <= maxPrice;
        }).show();
    }
    
    $(function() {
        var options = {
            range: true,
            min: 0,
            max: 500,
            values: [0, 500],
            slide: function(event, ui) {
                var min = ui.values[0],
                    max = ui.values[1];
                $(".amount").val("$" + min + " - $" + max);
                showProducts(min, max);
            }
        }, min, max;

        $(".slider-range").slider(options);
        min = $(".slider-range").slider("values", 0);
        max = $(".slider-range").slider("values", 1);
        $(".amount").val("$" + min + " - $" + max);
        showProducts(min, max);
    });
});

//Function 3
$(document).ready(function(){
    $(".accordion").accordion({collapsible : true, active : 'none'});
});

//Function 4
$(document).ready(function(){
    $( function() {
        $( "#tabs" ).tabs();
      } );
});

//Function 5
$(document).ready(function(){
    $( function(){
        $(".input").tooltip({
          track: true,
          position: {
            my: "center bottom",
            at: "center top",
        }
        });
    });
});

//Function 6
$(document).ready(function(){
    $(function() {
        $( ".sortable_list" ).sortable({   
        }).disableSelection();
    });
});