(function () {
    
	var init = function() {
		registerScrolling();
		registerContactSubmit();
		registerExternalLinks();
	};

	var registerScrolling = function() {
		$('[href="#kontakt"]').on('click', function(e) {
			window.smoothScroll($('#kontakt')[0], 1500);
		});
	};

	var registerContactSubmit = function() {
		var form = $('#contactForm');
		form.attr('novalidate', 'novalidate');
		form.on('submit', function(e) {
			e.preventDefault();
			if (!validateContactForm(form)) {
				return false;
			}
			var data = {};
			form.serializeArray().map(function(o) {data[o.name] = o.value;}); 
			data['newsletter'] = $('#newsletter').is(':checked') ? 'Ja' : 'Nein';

			$.ajax({
			    url: form.attr('action'), 
			    type: 'POST',
			    data: data,
			    dataType: 'json',
			    success: function(data) {
			    	$(form).fadeOut(150, function() {
			    		$('#submitSuccess').fadeIn(250);	
			    	});
				  },
				  error: function(xhr, type) {
				  	var errorMsg = $('#submitError');
				    errorMsg.fadeIn(250);
				    window.smoothScroll(errorMsg[0], 250);
				  }
			});

		});
	};

	var validateContactForm = function(form) {
		$('#submitSuccess, #submitError').fadeOut(150);
		var valid = true;
		$('input[type=text], input[type=email], textarea', form).each(function() {
			var field = $(this)[0];
			if (typeof field.willValidate !== 'undefined') {
        field.checkValidity();
      } else {
      	field.validity = field.validity || {};
			  field.validity.valid = validate($(this));
      }
      if (field.validity.valid) {
 				$(this).removeClass('error').next('.error-msg').fadeOut(150);
			} else {
 				$(this).addClass('error').next('.error-msg').fadeIn(150);
        valid = false;
      }
		});
		return valid;
	};

	var validate = function(field) {
		var valid = true;
		var val = field.val().trim();
		valid = valid && field.attr('required') ? val != '' : true;
		valid = valid && field.attr('minlength') ? val >= field.attr('minlength') : true;
		valid = valid && field.attr('maxlength') ? val >= field.attr('maxlength') : true;
		valid = valid && field.attr('pattern') ? new RegExp('^(?:' + field.attr('pattern') + ')$').test(val) : true;
		return valid;
	};

	var registerExternalLinks = function() {
		var host = window.location.host;
		$('a').each(function() {
			var href = $(this).attr('href');
			if (href.indexOf('http') === 0 && href.indexOf(host) === -1) {
				$(this).attr('target', '_blank');
			}
		});
	};

	$(document).ready(init);

})();