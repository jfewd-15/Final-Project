$(document).ready(function(){
  $('.photo-thumbnails .thumbnail').click(function() {
	$('.photo-thumbnails .thumbnail').removeClass('current');
	$(this).addClass('current');
	var path = jQuery(this).find('img').attr('src');
	$('#big-photo img').attr('src', path);
});
});
