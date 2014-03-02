
$boxes = $('.box');

$boxes.on('click', function(e) {
  $current_box = $(e.currentTarget);
  $boxes.find('.flag').removeClass('active');
  $current_box.find('.flag').addClass('active');
});

$body = $('body');

$body.on('click', '.header, .to-top', function(e) {
  $boxes.find('.flag').removeClass('active');
});



$(window).scroll(function () {
  $('.navbar').css('position','fixed');
});

