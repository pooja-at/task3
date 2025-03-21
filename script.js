// Select DOM elements
const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const songInfo = document.getElementById('song-info');

// Play the audio
playButton.addEventListener('click', () => {
    audio.play();
    songInfo.textContent = 'Playing: song.mp3';
});

// Pause the audio
pauseButton.addEventListener('click', () => {
    audio.pause();
    songInfo.textContent = 'Paused: song.mp3';
});

// Stop the audio
stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    songInfo.textContent = 'Stopped: song.mp3';
});
