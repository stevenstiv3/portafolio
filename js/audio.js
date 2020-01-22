/* -----------------------------------
			  AUDIO DE FONDO
	----------------------------------- */
	$('body').append('<audio loop autoplay id="audio-player"><source src="musica/mp3/Runnin - Adam Lambert.mp3" type="audio/mpeg"></audio>');
    	var audio = document.getElementById("audio-player");
    	audio.volume = 1.0;
	
	if($(window).length) {
		$('.music-bg').css({'visibility':'visible'});
		$('body').addClass("audio-on");
		if ($('body').hasClass('audio-off')) {
        	$('body').removeClass('audio-on');
		} 
		$(".music-bg").on('click', function() {
			$('body').toggleClass("audio-on audio-off");         
			if ($('body').hasClass('audio-off')) {
				audio.pause();
			} 
			if ($('body').hasClass('audio-on')) {
				audio.play();
			}
		});
	}