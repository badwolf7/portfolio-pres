$(function(){
	var htmlWidth = $('html').width() + 50;
	var iframeMargin = htmlWidth / 10 + 64;
	
	$('iframe.desktop').width(htmlWidth);
	$('.img-frame').width(htmlWidth);
	$('iframe.desktop').css({'margin-left':iframeMargin*-1});
	$('.img-frame').css({'margin-left':iframeMargin*-1});
});