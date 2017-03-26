$(document).ready(function(){
	
	$('img[src*="lorempixel.com"], div').each(function(){
		if ($(this).attr('src')) $(this).attr('src', $(this).attr('src') + '&' + Math.random());
		if ($(this).css('background-image').indexOf('lorempixel.com')>=0) $(this).css('background-image', $($('.news-block__item-img')[0]).css('background-image').replace('random', 'random&' + Math.random()));
	});

	$('.welcome-block__items .row').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true
	});

});