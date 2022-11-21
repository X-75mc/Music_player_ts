const block = document.querySelector('.panel_list') as HTMLDivElement;
const btn = document.querySelector('.btn__line') as HTMLDivElement;

const mediaPlayer = document.querySelector('.media_player') as HTMLDivElement;
const playBtn = document.querySelector('.play__btn__img') as HTMLImageElement;
const prevBtn = document.querySelector('.prev__btn__img') as HTMLImageElement;
const nextBtn = document.querySelector('.next__btn__img') as HTMLImageElement;
const nameSong = document.querySelector('.name__song') as HTMLDivElement;
const audioTreck = document.querySelector('.audioTreck') as HTMLAudioElement;

const songs: string[]  = ['Alexandra Stan – Bad at Hating You - Official Video', 'Alexandra Stan feat. Ana Tobor – Kame Ha Visualizer', 'Alexandra Stan x NERVO - Come Into My World - Official Video'];
// event na knopku dla bloka

btn.addEventListener('click', blockFunk);

function blockFunk (e: any): void {
    
    block.classList.toggle('moveRight');
    
}

// event na player

let songIndex: number = 0;

function loadSong (song: string): void{
    nameSong.innerHTML = song;
     audioTreck.src = `audio/${song}.mp3`;
}

loadSong(songs[songIndex]);

function playSong (): void{
    mediaPlayer.classList.add('active');
    playBtn.src = './img/pause.png';
    audioTreck.play();
}

function pauseSong (): void{
    mediaPlayer.classList.remove('active');
    playBtn.src = './img/play.png';
    audioTreck.pause();
}

playBtn.addEventListener('click', function (){
    const isPlay: any = mediaPlayer.classList.contains('active');
    if(isPlay){
        pauseSong();
    } else {
        playSong();
    }

});

function nextTreck (): void {
    songIndex++;
    if(songIndex > songs.length -1){
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong();

}

nextBtn.addEventListener('click', nextTreck);

function prevTreck (): void {
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length -1;
    }

    loadSong(songs[songIndex]);
    playSong();
}

prevBtn.addEventListener('click', prevTreck);


 


