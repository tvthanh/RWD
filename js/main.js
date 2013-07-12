// Script Dropdown Menu

window.onload = function() {

	var lis = document.getElementsByTagName('li');

	for( i=0; i<lis.lenght; i++ ) {

		var li = lis[i];

		if(li.className == 'portfolio') {

			li.onmouseover = function() {

				this.getElementsByTagName('ul').item(0).style.display = 'block';
			}

			li.onmouseout = function() {

				this.getElementsByTagName('ul').item(0).style.display = 'none';
			}
		}
	}
}

$(document).ready(function() {

	$('li.portfolio').hover(

		// function() { $('ul', this).css('display', 'block'); },
		function() { $('ul', this).fadeIn(500); },

		// function() { $('ul', this).css('display', 'none'); }

		function() { $('ul', this).fadeOut(500); }
	);

	$('.slideshow').bxSlider({
		mode: 'fade',
		speed: 2000,
		captions: true
	});
});