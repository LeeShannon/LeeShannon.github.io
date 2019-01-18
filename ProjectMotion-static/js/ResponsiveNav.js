var handle = document.getElementsByClassName('.handle');
handle.on('click', function(){
	document.getElementsByTagName('nav ul').toggleClass('showing');
});
