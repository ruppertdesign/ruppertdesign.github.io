(function () {
    
	var init = function() {
		if (!$('html.lt-ie9').length) {
			registerScrolling();
		}
		registerContactSubmit(!$('html.lt-ie10').length);
		registerExternalLinks();
		registerBurgerMenu();
		updateYear();
	};

	var registerScrolling = function() {
		$('.scroll-to').on('click', function(e) {
			e.preventDefault();
			var idx = e.target.href.indexOf('#');
			if (idx !== -1) {
				scrollTo(e.target.href.substring(idx), 1500);
			}			
		});
	};

	var registerContactSubmit = function(ajax) {
		var form = $('#contactForm');
		form.attr('novalidate', 'novalidate');
		form.on('submit', function(e) {
			if (!validateContactForm(form)) {
				return false;
			}
			if (ajax) {
				e.preventDefault();
				ajaxPost(form);
			}
		});
	};

	var validateContactForm = function(form) {
		$('#submitSuccess, #submitError').fadeOut(150);
		var valid = true;
		$('input[type=text], input[type=email], input[type=tel], textarea', form).each(function() {
			var field = $(this)[0];
			if (typeof field.willValidate !== 'undefined') {
        field.checkValidity();
      } else {
      	field.validity = field.validity || {};
			  field.validity.valid = validate($(this));
      }
      // minlength won't validate empty strings
      var enoughVal = !field['required'] || field.value.trim().length > 2;
      if (field.validity.valid && enoughVal) {
 				$(this).removeClass('error').next('.error-msg').fadeOut(150);
			} else {
 				$(this).addClass('error').next('.error-msg').removeAttr('hidden').fadeIn(150);
        valid = false;
      }
		});
		if (!valid) {
			var errors = $('.error-msg');
			for (var i = 0; i < errors.length; i++) {
				if (errors[i].offsetParent !== null) {
					errors[i].scrollIntoView(false);
					break;
				}
			}
		}
		return valid;
	};

	var ajaxPost = function(form) {
		$.ajax({
		    url: form.attr('action'), 
		    type: 'POST',
		    data: form.serialize(),
		    headers: { 'X-Requested-With' : 'XMLHttpRequest' },
		    success: function(data) {
		    	$(form).fadeOut(150, function() {
		    		$('#submitSuccess').fadeIn(250).show(); // HACK: without show it will disapear after fadeIn if there was an error before
		    		scrollTo('#footer-head', 250);	
		    	});
			  },
			  error: function(xhr, type) {				  	
			  	$('#submitError').fadeIn(250).removeAttr('hidden');
			    scrollTo('#footer-head', 250);
			  }
		});
	};

	var validate = function(field) {
		var val = $.trim(field.val());
		return (field.attr('required') ? val != '' : true)
						&& (field.attr('minlength') ? val.length >= field.attr('minlength') : true)
						&& (field.attr('maxlength') ? val.length <= field.attr('maxlength') : true)
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
			? smoothScroll.animateScroll(null, selector, { speed: time, easing: 'easeInOutQuad', offset: 60 } )
			: $(selector)[0].scrollIntoView();
	};

	var registerBurgerMenu = function() {
		var btn = $('.menu-button');
		var menu = btn.next('ul');
		btn.add($('a[href$="#kontakt"]', menu)).on('click', function(e) {
			// noop on accidental clicks after turning iPad
			if (btn.css('display') === 'none') {
				return;
			}
			e.preventDefault();	
			var nav = btn.parent();	
			menu.animate({
				translateY: (-menu.offset().top + nav.height() + $('body').scrollTop()) + 'px'
			}, 500, 'ease-out');	
			nav.toggleClass('opened');
		});
	};

	var updateYear = function() {
		$('.js_year').text(new Date().getFullYear());
	};

	$(document).ready(init);

})();