var $screen = $('#screen');

// Event listener to buttons
var pressButton = function() {

  var $buttons = $('span');

  //Guard clause for Error
  if ($screen.text() === 'Error') {
    return;

  } else {
    // Adds event listener to buttons
    $buttons.click(function(event) {
      if ($(event.target).text() === 'C') {
        return $screen.text('');
      }
      var $addToScreen = $(event.target).text();
      $screen.append($addToScreen);
    });
  }
};
pressButton();
