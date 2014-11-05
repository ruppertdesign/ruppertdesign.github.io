(function () {
    
	var init = function() {
		registerScrolling();
		registerContactSubmit();
		registerExternalLinks();
	};

	var registerScrolling = function() {
		$('[href="#kontakt"]').on('click', function(e) {
			e.preventDefault();
			scrollTo('#kontakt', 2000);
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
				  	$('#submitError').fadeIn(250);
				    scrollTo('#submitError', 250);
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
		var val = field.val().trim();
		return (field.attr('required') ? val != '' : true)
						&& (field.attr('minlength') ? val >= field.attr('minlength') : true)
						&& (field.attr('maxlength') ? val >= field.attr('maxlength') : true)
						&& (field.attr('pattern') ? new RegExp('^(?:' + field.attr('pattern') + ')$').test(val) : true);
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

	var scrollTo = function(selector, time) {
		typeof smoothScroll != 'undefined'
			? smoothScroll.animateScroll(null, selector, { speed: time, easing: 'easeInOutQuad' } )
			: $(selector)[0].scrollIntoView();
	}

	$(document).ready(init);

})();