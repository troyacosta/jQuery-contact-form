'use strict';
$(document).ready(function() {

var validate = function() {
	var count = 0;
	if ($('#nameInput').val() === '') {
		$('#nameError').show();
		$('#nameInput').css({'border-left': '.25em solid red'})
	} 
	else {
		count++
	}
	if ($('#emailInput').val().indexOf('@') === -1) {
		$('#emailError').show();
		$('#emailInput').css({'border-left': '.25em solid red'})
	}
	else {
		count++
	}
	if ($('#websiteInput').val().substr(0, 7) !== 'http://') {
		$('#websiteError').show();
		$('#websiteInput').css({'border-left': '.25em solid red'})
	}
	else {
		count++
	}
	if ($('#textareaInput').val() === '') {
		$('#textareaError').show();
		$('#textareaInput').css({'border-left': '.25em solid red'})
	}
	else {
		count++
	}
	if (count === 4) {
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