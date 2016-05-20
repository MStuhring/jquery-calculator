var $screen = $('#screen');
var $buttons = $('span');
var divide = $('.operator').eq(1).text();
var multiply = $('.operator').eq(2).text();
var subtract = $('operator').eq(3).text();
var addition = $('operator').eq(4).text();
var result = '';

$buttons.click(function(event) {

  if ($(event.target).text() === 'C') {
    return $screen.text('');
  } else if ($(event.target).text() === divide) {
    return $screen.append('/');
  } else if ($(event.target).text() === multiply) {
    return $screen.append('*');
  } else if ($(event.target).text() === '=') {
      try {
        result = eval($screen.text());
      }
      catch(e) {
        return $screen.text('Error');
      }

     if (result === Infinity) {
       return $screen.text('Error');
     }
    return $screen.text(result);
  }
  var $addToScreen = $(event.target).text();
  $screen.append($addToScreen);
});
