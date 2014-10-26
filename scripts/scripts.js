(function () {
    
	var init = function() {
		registerScrolling();
	};

	var registerScrolling = function() {
		document.querySelector('[href="#kontakt"]').onclick = function(e) {
			window.smoothScroll(document.querySelector('#kontakt'), 1500);
		};
	};

	window.onload = init;

})();