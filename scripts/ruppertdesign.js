(function() {
  var init = function() {
    registerPositionSplash();
    initSliders();
    if (!$('html.lt-ie9').length) {
      registerScrolling();
    }
    registerContactSubmit(!$('html.lt-ie10').length);
    registerExternalLinks();
    registerBurgerMenu();
    registerCookieWarningButton();
    checkCookie('acceptsCookies');
    fetchRatings();
    updateYear();
  };

  var registerPositionSplash = function() {
    var positionSplash = function() {
      var offset = $('.splash-container').offset();
      $('.landing-wrapper').css({
        'margin-top': (offset.top + offset.height) + 'px'
      });
    };
    positionSplash();
    $(window).on('resize', positionSplash);
  }

  var initSliders = function() {
    $('.slider').each(function(idx, el) {
      var dots = $('.slider-dots li a', el);
      var slider = $('.pgwSlider', el).pgwSlider({
        displayList: false,
        displayControls: false,
        touchControls: true,
        transitionDuration: 500,
        intervalDuration: 3000,
        beforeSlide: function(idx) {
          $(dots, '.active').removeClass('active');
          $(dots[idx - 1]).addClass('active');
        }
      });
      $(dots).on('click', function(e) {
        e.preventDefault();
        slider.stopSlide();
        slider.displaySlide(e.target.text);
      });
    });
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
    $(
      'input[type=text], input[type=email], input[type=tel], textarea',
      form
    ).each(function() {
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
        $(this)
          .removeClass('error')
          .next('.error-msg')
          .fadeOut(150);
      } else {
        $(this)
          .addClass('error')
          .next('.error-msg')
          .removeAttr('hidden')
          .fadeIn(150);
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
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
      success: function(data) {
        $(form).fadeOut(150, function() {
          $('#submitSuccess')
            .fadeIn(250)
            .show(); // HACK: without show it will disapear after fadeIn if there was an error before
          scrollTo('#footer-head', 250);
        });
      },
      error: function(xhr, type) {
        $('#submitError')
          .fadeIn(250)
          .removeAttr('hidden');
        scrollTo('#footer-head', 250);
      }
    });
  };

  var validate = function(field) {
    var val = $.trim(field.val());
    return (
      (field.attr('required') ? val != '' : true) &&
      (field.attr('minlength')
        ? val.length >= field.attr('minlength')
        : true) &&
      (field.attr('maxlength')
        ? val.length <= field.attr('maxlength')
        : true) &&
      (field.attr('pattern')
        ? new RegExp('^(?:' + field.attr('pattern') + ')$').test(val)
        : true)
    );
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
      ? smoothScroll.animateScroll(null, selector, {
          speed: time,
          easing: 'easeInOutQuad',
          offset: 60
        })
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
      menu.animate(
        {
          translateY:
            -menu.offset().top + nav.height() + $('body').scrollTop() + 'px'
        },
        500,
        'ease-out'
      );
      nav.toggleClass('opened');
    });
  };

  var updateYear = function() {
    $('.js_year').text(new Date().getFullYear());
  };

  var setCookie = function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  };

  var getCookie = function(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };

  var checkCookie = function(cname) {
    var cookie = getCookie(cname);
    if (cookie != 'true') {
      $('.cookie-warning').removeClass('hideme');
    }
  };

  var registerCookieWarningButton = function() {
    $('#accept-cookies').on('click', function() {
      setCookie('acceptsCookies', 'true', 90);
      $('.cookie-warning').fadeOut(150);
    });
  };

  var fetchRatings = function() {
    $.getJSON(
      'https://vmothkzl6e.execute-api.eu-central-1.amazonaws.com/prod/ruppertdesign-ratings',
      function(data) {
        const list = $('<ul />').append(
          new Array(++data.rating).join('<li>⭐️</li>')
        );
        const votes = $('<span/>').append('(' + data.votes + ') Bewertungen');
        $('.dawanda-rating a')
          .html(list)
          .append(votes);
      }
    );
  };

  $(document).ready(init);
})();
