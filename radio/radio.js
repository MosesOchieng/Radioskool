const audioPlayer = document.getElementById('audioPlayer');
const songTitle = document.getElementById('songTitle');
const artist = document.getElementById('artist');
const songList = document.getElementById('songList');

const playlist = [
	{ title: 'Song 1', artist: 'Artist 1', audio: 'song1.mp3' },
	{ title: 'Song 2', artist: 'Artist 2', audio: 'song2.mp3' },
	{ title: 'Song 3', artist: 'Artist 3', audio: 'song3.mp3' }
];

let currentSong = 0;

audioPlayer.src = playlist[currentSong].audio;
songTitle.textContent = playlist[currentSong].title;
artist.textContent = playlist[currentSong].artist;

audioPlayer.addEventListener('ended', playNextSong);

function playNextSong() {
	currentSong++;
	if (currentSong >= playlist.length) {
		currentSong = 0;
	}
	audioPlayer.src = playlist[currentSong].audio;
	songTitle.textContent = playlist[currentSong].title;
	artist.textContent = playlist[currentSong].artist;
}

for (let i = 0; i < playlist.length; i++) {
	let listItem = document.createElement('li');
	listItem.textContent = playlist[i].title + ' - ' + playlist[i].artist;
	songList.appendChild(listItem);
}

songList.addEventListener('click', playSelectedSong);

function playSelectedSong(event) {
	let listItem = event.target;
	let index = Array.prototype.indexOf.call(songList.children, listItem);
	currentSong = index;
	audioPlayer.src = playlist[currentSong].audio;
	songTitle.textContent = playlist[currentSong].title;
	artist.textContent = playlist[currentSong].artist;
	audioPlayer.play();
}
