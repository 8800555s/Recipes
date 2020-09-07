var open_menu = document.querySelector('.header_hamburger');
open_menu.addEventListener('click', function(e) {
	open_menu.classList.toggle('header_hamburger_active');
	let menu = document.querySelector('.menu');
	menu.classList.toggle('menu_open');
	let shaddow = document.querySelector('.overlay');
	shaddow.classList.toggle('overlay_active');
	open_menu.style.zIndex = '10000';
});
$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('header').addClass("header_fixed");
}
else{
$('header').removeClass("header_fixed");
}
});
$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.type_selection').addClass("type_selection_fixed");
}
else{
$('.type_selection').removeClass("type_selection_fixed");
}
});

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var list = this.el.find('.menu_name_category');
		// Evento
		list.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.item_list').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#menu_wrapper'), false);
});

