console.log("Hello");

$(document).ready(function() {
  $('.card-content.about').hide();
  $('.indicator').hide();
})

$('.tab').on('click', function() {
  $('.card-content').show();
  $('.indicator').show();
})
