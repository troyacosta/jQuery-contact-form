(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
$(document).ready(function () {

	var validate = function validate() {
		if ($('#nameInput').val() === '') {
			$('#nameError').show();
			$('#nameInput').css({ 'border-left': '.25em solid red' });
		}
		if ($('#emailInput').val().indexOf('@') === -1) {
			$('#emailError').show();
			$('#nameInput').css({ 'border-left': '.25em solid red' });
		}
		if ($('#websiteInput').val().substr(0, 7) !== 'http://') {
			$('#websiteError').show();
			$('#nameInput').css({ 'border-left': '.25em solid red' });
		}
		if ($('#textareaInput').val() === '') {
			$('#textareaError').show();
			$('#nameInput').css({ 'border-left': '.25em solid red' });
		} else {
			$('form').hide();
			$('#success').show();
			$('#success').html('<h2>Thanks for contacting us ' + $('#nameInput').val() + '. We have received your message and will be in touch shortly.</h2>');
		}
	};

	$('form').on('submit', function (e) {
		e.preventDefault();
		validate();
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map