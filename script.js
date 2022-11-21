var block = document.querySelector('.panel_list');
var btn = document.querySelector('.btn__line');
var mediaPlayer = document.querySelector('.media_player');
var playBtn = document.querySelector('.play__btn__img');
var prevBtn = document.querySelector('.prev__btn__img');
var nextBtn = document.querySelector('.next__btn__img');
var nameSong = document.querySelector('.name__song');
var audioTreck = document.querySelector('.audioTreck');
var songs = ['Alexandra Stan – Bad at Hating You - Official Video', 'Alexandra Stan feat. Ana Tobor – Kame Ha Visualizer', 'Alexandra Stan x NERVO - Come Into My World - Official Video'];
// event na knopku dla bloka
btn.addEventListener('click', blockFunk);
function blockFunk(e) {
    block.classList.toggle('moveRight');
}
// event na player
var songIndex = 0;
function loadSong(song) {
    nameSong.innerHTML = song;
    audioTreck.src = "audio/".concat(song, ".mp3");
}
loadSong(songs[songIndex]);
function playSong() {
    mediaPlayer.classList.add('active');
    playBtn.src = './img/pause.png';
    audioTreck.play();
}
function pauseSong() {
    mediaPlayer.classList.remove('active');
    playBtn.src = './img/play.png';
    audioTreck.pause();
}
playBtn.addEventListener('click', function () {
    var isPlay = mediaPlayer.classList.contains('active');
    if (isPlay) {
        pauseSong();
    }
    else {
        playSong();
    }
});
function nextTreck() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}
nextBtn.addEventListener('click', nextTreck);
function prevTreck() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}
prevBtn.addEventListener('click', prevTreck);
