$(function(){
	var htmlWidth = $('html').width();
	var iframeMargin = htmlWidth / 10 + 80;
	
	$('iframe.desktop').width(htmlWidth);
	$('.img-frame').width(htmlWidth);
	$('iframe.desktop').css({'margin-left':iframeMargin*-1});
	$('.img-frame').css({'margin-left':iframeMargin*-1});
});