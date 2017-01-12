$('document').ready(function() {
  var color = 'white';
  var $box = $('.box');
  $('.box').on('click', function() {
    $(this).addClass(color);
  });
  $('#red').on('click', function() {
    color = 'red';
  });
  $('#blue').on('click', function() {
    color = 'blue';
  });
  $('#white').on('click', function() {
    color = 'white';
  });
  $('#green').on('click', function() {
    color = 'green';
  });
  $('#yellow').on('click', function() {
    color = 'yellow';
  });
  $box.on('dblclick', function() {
    $(this).removeClass(color);
  });
  $('#reset').on('click', function() {
    $box.removeClass(color);
  });

})
