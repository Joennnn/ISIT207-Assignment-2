// Joen Tai
// UOW ID: 7432100

$(document).ready(function() {
  $(document).on('mouseover', 'th,td', function () {
    var offset = $(this).offset();
    var html = '<div class="popup">' + $(this).text() + '</div>';
    $('.popup').remove();
    $(html).insertAfter('table');
    $('.popup').css({ 'top': offset.top, 'left': offset.left }).fadeIn();
    $("th, td").hover(
      function () {
        $(this).css("background","pink");
      },
      function () {
        $(this).css("background","");
      });
  });
});