'use strict';
$(document).ready(function() {

var validate = function() {
	if ($('#nameInput').val() === '') {
		$('#nameError').show();
		$('#nameInput').css({'border-left': '.25em solid red'})
	} 
	if ($('#emailInput').val().indexOf('@') === -1) {
		$('#emailError').show();
		$('#nameInput').css({'border-left': '.25em solid red'})
	}
	if ($('#websiteInput').val().substr(0, 7) !== 'http://') {
		$('#websiteError').show();
		$('#nameInput').css({'border-left': '.25em solid red'})
	}
	if ($('#textareaInput').val() === '') {
		$('#textareaError').show();
		$('#nameInput').css({'border-left': '.25em solid red'})
	}
	else {
		$('form').hide();
		$('#success').show();
		$('#success').html('<h2>Thanks for contacting us ' + $('#nameInput').val() + '. We have received your message and will be in touch shortly.</h2>')
	}
}

$('form').on('submit', function(e) {
	e.preventDefault();
	validate();
})

});