var songs = ["Aquí estaré - Sebastián Yatra.mp3",
			"A esa - Daniela Darcourt.mp3",
			"Adiós amor - Daniela Darcourt.mp3",
			"Cristina - Sebastián Yatra.mp3",
			"Con mi amiga - Daniela Darcourt.mp3",
			"Blizzard - Daichi Miura.mp3",
			"Sé que te amaré - Amy Gutierrez.mp3",
			"70cm - Rottengraffty.mp3",
			"All hope is gone - Slipknot.mp3",
			"Carita bonita - Erre XI.mp3",
			"Amiga - Joseph.mp3",
			"Back from the dead - Skillet.mp3",
			"Burn it down - Linkin Park.mp3",
			"Atrévete - Calle 13.mp3",
			"Burn it to the ground - Nickelback.mp3",
			"Señor mentira - Daniela Darcourt.mp3",
			"Centuries - Fall Out Boy.mp3",
			"Chop suey - System of Down.mp3",
			"Chouzetsu dynamic - Kazuya Yoshii.mp3",
			"A esa - Daniela Darcourt.mp3",
			"Comatose - Skillet.mp3",
			"Despacito - Luis Fonsi ft Daddy Yanke.mp3",
			"Dime que te paso - Wissin & Yandel ft Dj Tony.mp3",
			"Down with the sickness - Disturbed.mp3",
			"Last resort - Papa Roach.mp3",
			"Dragon ball rap - Porta.mp3",
			"Duality - Slipknot.mp3",
			"Échame la culpa - Luis Fonsi ft Demi Lovato.mp3",
			"Hero - Christopher Wilde.mp3",
			"El amor - Tito el Bambino.mp3",
			"F - Maximum The Hormone.mp3",
			"Fallido intento - Don Tetto.mp3",
			"Cambio mi corazon - Grupo 5.mp3",
			"Cambio y fuera - Marco Antonio y su Orquesta.mp3",
			"Feel invincible - Skillet.mp3",
			"First date - Blink 182.mp3",
			"Fuck it - Eamon.mp3",
			"Go - Fandub.mp3",
			"Grandale - Captain Jack.mp3",
			"Haruka kanata - Asian Kung Fu Generation.mp3",
			"Hello hello - Lacco Tower.mp3",
			"Usubeni - Lacco Tower.mp3",
			"Hero - Fandub.mp3",
			"Hero - Skillet.mp3",
			"Hey soul sister - Train.mp3",
			"Boulevard of broken dreams - Green Day.mp3",
			"I am king - Impossible.mp3",
			"In the end - Link Park.mp3",
			"Indestructible - Disturbed.mp3",
			"Inside the fire - Disturbed.mp3",
			"La bella y la bestia - Porta.mp3",
			"La luz del poder - Adrián Barba.mp3",
			"The end is where we begin - Thousand Foot Krutch.mp3",
			"Light my fire - Kotoko.mp3",
			"Dragon ball Super - Porta.mp3",
			"Limit break x survivor - David Delgado.mp3",
			"Molinos de viento - Mago de Oz.mp3",
			"Adiós - David Delgado.mp3",
			"No te creas tan importante - Deyvis Orozco.mp3",
			"Monster - Skillet.mp3",
			"Moves like jagger - Maroon 5 ft Christina Aguilera.mp3",
			"My demons - Starset.mp3",
			"No digas lo siento - Don Tetto.mp3",
			"Zun da da - Zion y Lennox.mp3",
			"No me acuerdo - Thalía ft Natti Natasha.mp3",
			"For the glory - Epic Rock.mp3",
			"Courtsey call - Thousand Foot krutch.mp3",
			"The rock show - Blink 182.mp3",
			"No soy el hombre perfecto - Arthur ft Miguel Ángel.mp3",
			"Not gonna die - Skillet.mp3",
			"Falling inside the black - Skillet.mp3",
			"Not listening - Papa Roach.mp3",
			"One breath away - Itachi.mp3",
			"One step closer - Link Park.mp3",
			"You're beautiful - James Blunt.mp3",
			"I want to live - Skillet.mp3",
			"Por Perro - Sebastián Yatra.mp3",
			"Rap de Goku vs Jiren - Porta.mp3",
			"Reggaeton Lento - Cnco.mp3",
			"Rise - Skillet.mp3",
			"Runnin - Adam Lambert.mp3",
			"Sexy and I know it  - Lmfao.mp3",
			"Pegasus fantasy - Adrián Barba.mp3",
			"Silhouette - Omar Yuri.mp3",
			"Sing - Omar Yuri.mp3",
			"Sola nunca estarás - Cesar Franco.mp3",
			"Suena el Dembow - Joey Montana y Sebastián Yatra.mp3",
			"Take me - Papa Roach.mp3",
			"Tecnolife - Omar Yuri.mp3",
			"The reason - Hoobastank.mp3",
			"Till I collapse - Eminem.mp3",
			"Time of dying - Three Days Grace.mp3",
			"Ultimate battle - Akira Kushida.mp3",
			"Love the way you lie - Eminem ft Rihanna.mp3",
			"Un nuevo mundo sin ti - Kalimba.mp3",
			"Untraveled road - Thousand Foot Krutch.mp3",
			"Romance te puedo dar - Adrián Barba.mp3",
			"Shining collection - Iceman.mp3",
			"Uptown funk - Mark Ronson ft Bruno Mars.mp3",
			"Wake and alive - Skillet.mp3",
			"Wake me up Inside - Evanescence.mp3",
			"War of change - Thousand Foot Krutch.mp3",
			"Whats up people - Maximum The Hormone.mp3",
			"Whispers in the dark -Skillet.mp3",
			"White america - Eminem.mp3",
			"Nightmare - Omar Yuri.mp3"];

var songTitle = document.getElementById('songTitle');
var songSlider = document.getElementById('songSlider');
var currentTime = document.getElementById('currentTime');
var duration = document.getElementById('duration');
var volumeSlider = document.getElementById('volumeSlider');
var nextSongTitle = document.getElementById('nextSongTitle');

var song = new Audio();
var currentSong = 0;

window.onload = loadSong;

function loadSong () {
	song.src = "musica/mp3/" + songs[currentSong];
	songTitle.textContent = (currentSong + 1) + ") " + songs[currentSong];
	nextSongTitle.innerHTML = "Siguiente: " + songs[currentSong + 1 % songs.length];
	song.playbackRate = 1;
	song.volume = volumeSlider.value;
	song.play();
	setTimeout(showDuration, 1000);
}

setInterval(updateSongSlider, 1000);

function updateSongSlider () {
	var c = Math.round(song.currentTime);
	songSlider.value = c;
	currentTime.textContent = convertTime(c);
	if (song.ended) {
		next();
	}
}

function convertTime (secs) {
	var min = Math.floor(secs/60);
	var sec = secs % 60;
	min = (min < 10) ? "0" + min : min;
	sec = (sec < 10) ? "0" + sec : sec;
	return (min + ":" + sec);
}

function showDuration () {
	var d = Math.floor(song.duration);
	songSlider.setAttribute("max", d);
	duration.textContent = convertTime(d);
}

function playOrPauseSong (img) {
	song.playbackRate = 1;
	if (song.paused) {
		song.play();
		img.src = "musica/iconos/pause.png"
	} else {
		song.pause();
		img.src = "musica/iconos/play.png"
	}
}

function next () {
	currentSong = currentSong + 1 % songs.length;
	loadSong();
}

function previous () {
	currentSong --;
	currentSong = (currentSong < 0) ? songs.length - 1 : currentSong;
	loadSong();
}

function seekSong () {
	song.currentTime = songSlider.value;
	currentTime.textContent = convertTime(song.currentTime);
}

function adjustVolume () {
	song.volume = volumeSlider.value;
}

function increasePlaybackRate () {
	songs.playbackRate += 0.5;
}

function decreasePlaybackRate () {
	songs.playbackRate -= 0.5;
}