$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#can').show();
  }  else if (age === 18) {
    alert("Have fun!")
    $('#can').show();
  }  else {
    $('#cannot').show();
  }
});
