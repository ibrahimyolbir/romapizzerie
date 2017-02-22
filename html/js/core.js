$(document).ready(function(){
  $('.bxslider').bxSlider();
});

//Menu Slider
$( ".menu_list_header_a" ).click(function() {
  var indexNo = $(this).attr("list-index");
  var links = $( ".bx-pager-link");
  for(var i=0; i<links.length; i++){
    if(links[i].getAttribute("data-slide-index") == indexNo){
        links[i].click();
      }
  }
  $(".menu_list_header_a").removeClass("menu_list_header_active_a");
  $(this).addClass( "menu_list_header_active_a" );
});

//Gallery Metod
$(function(){
		var $gallery = $('.gallery a').simpleLightbox();

		$gallery.on('show.simplelightbox', function(){
			console.log('Requested for showing');
		})
		.on('shown.simplelightbox', function(){
			console.log('Shown');
		})
		.on('close.simplelightbox', function(){
			console.log('Requested for closing');
		})
		.on('closed.simplelightbox', function(){
			console.log('Closed');
		})
		.on('change.simplelightbox', function(){
			console.log('Requested for change');
		})
		.on('next.simplelightbox', function(){
			console.log('Requested for next');
		})
		.on('prev.simplelightbox', function(){
			console.log('Requested for prev');
		})
		.on('nextImageLoaded.simplelightbox', function(){
			console.log('Next image loaded');
		})
		.on('prevImageLoaded.simplelightbox', function(){
			console.log('Prev image loaded');
		})
		.on('changed.simplelightbox', function(){
			console.log('Image changed');
		})
		.on('nextDone.simplelightbox', function(){
			console.log('Image changed to next');
		})
		.on('prevDone.simplelightbox', function(){
			console.log('Image changed to prev');
		})
		.on('error.simplelightbox', function(e){
			console.log('No image found, go to the next/prev');
			console.log(e);
		});
	});
