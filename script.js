const songsList = [
    {
        song_src: './songs/All The Things She Said.mp3',
        song_img: './songs-images/All The Things She Said.jpg',
        artist_name: 't.A.T.u.',
        song_title: 'All The Things She Said'
    },
    {
        song_src: './songs/Cradles.mp3',
        song_img: './songs-images/Cradles.jpg',
        artist_name: 'Sub Urban',
        song_title: 'Cradles'
    },
    {
        song_src: './songs/Fire on Fire.mp3',
        song_img: './songs-images/Fire on Fire.jpg',
        artist_name: 'Sam Smith',
        song_title: 'Fire on Fire'
    },
    {
        song_src: './songs/Grateful.m4a',
        song_img: './songs-images/Grateful.jpg',
        artist_name: 'NEFFEX',
        song_title: 'Grateful'
    },
    {
        song_src: './songs/Hayloft II.mp3',
        song_img: './songs-images/Hayloft II.jpg',
        artist_name: 'Mother Mother',
        song_title: 'Hayloft II'
    },
    {
        song_src: './songs/Hide and seek.mp3',
        song_img: './songs-images/Hide and seek.jpg',
        artist_name: 'Lizz Robinett',
        song_title: 'Hide and seek'
    },
    {
        song_src: './songs/In The Name Of Love.mp3',
        song_img: './songs-images/In The Name Of Love.jpg',
        artist_name: 'Martin Garrix and Bebe Rexha',
        song_title: 'In The Name Of Love'
    },
    {
        song_src: './songs/In The Stars.mp3',
        song_img: './songs-images/In The Stars.jpg',
        artist_name: 't.A.T.u.',
        song_title: 'In The Stars'
    },
    {
        song_src: './songs/Infinity.mp3',
        song_img: './songs-images/Infinity.jpg',
        artist_name: 'Benson Boone',
        song_title: 'Infinity'
    },
    {
        song_src: './songs/Living Life In The Night.mp3',
        song_img: './songs-images/Living Life In The Night.jpg',
        artist_name: 'Cheriimoya and Sierra Kidd',
        song_title: 'Living Life In The Night'
    },
    {
        song_src: './songs/Look What You Made Me Do.mp3',
        song_img: './songs-images/Look What You Made Me Do.jpg',
        artist_name: 'Taylor Swift',
        song_title: 'Look What You Made Me Do'
    },
    {
        song_src: './songs/Love Story.mp3',
        song_img: './songs-images/Love Story.jpg',
        artist_name: 'Indila',
        song_title: 'Love Story'
    },
    {
        song_src: './songs/My Heart Will Go On.mp3',
        song_img: './songs-images/My Heart Will Go On.jpg',
        artist_name: 'Celine Dion',
        song_title: 'My Heart Will Go On'
    },
    {
        song_src: './songs/Something Just Like This.mp3',
        song_img: './songs-images/Something Just Like This.jpg',
        artist_name: 'Coldplay and The Chainsmokers',
        song_title: 'Something Just Like This'
    },
    {
        song_src: './songs/Somewhere Only We Know.mp3',
        song_img: './songs-images/Somewhere Only We Know.jpg',
        artist_name: 'Keane',
        song_title: 'Somewhere Only We Know'
    },
    {
        song_src: './songs/Stitches.mp3',
        song_img: './songs-images/Stitches.jpg',
        artist_name: 'Shawn Mendes',
        song_title: 'Stitches'
    },
    {
        song_src: './songs/Taylor Swift  Love Story.mp3',
        song_img: './songs-images/Taylor Swift  Love Story.jpg',
        artist_name: 'Taylor Swift',
        song_title: 'Love Story'
    },
    {
        song_src: './songs/Treat You Better.mp3',
        song_img: './songs-images/Treat You Better.jpg',
        artist_name: 'Shawn Mendes',
        song_title: 'Treat You Better'
    },
    {
        song_src: './songs/Valhalla Calling.mp3',
        song_img: './songs-images/Valhalla Calling.jpg',
        artist_name: 'Miracle of Sound',
        song_title: 'Valhalla Calling'
    },
    {
        song_src: './songs/You Belong With Me.mp3',
        song_img: './songs-images/You Belong With Me.jpg',
        artist_name: 'Taylor Swift',
        song_title: 'You Belong With Me'
    },
]

const songTitle = document.querySelector('.song-title');
const artistName = document.querySelector('.artist-name');
const artistImg = document.querySelector('.artist-img');
const start = document.querySelector('.start');
const end = document.querySelector('.end');
let lines = document.querySelector('.line');
const progress = document.querySelector('.lineChild');
const playing = document.querySelector('.playing');
const play = document.querySelector('.fa-play');
const pause = document.querySelector('.fa-pause');
const song = document.querySelector('.song');


playing.addEventListener('click', effect);
song.addEventListener('loadedmetadata', dur);
song.addEventListener('ended', playNext);

let isPlayed = false;

function effect() {
    if ((!play.classList.contains('none'))) {
        if (!isPlayed) {
            songs(currentIndex)
            isPlayed = true;
        }
        song.play()
        setInterval(prog, 1000);
        setInterval(line, 1000);

        songTitle.classList.add('move')
        artistName.classList.add('move')
        artistImg.classList.add('round')

        lines.addEventListener('click', (e) => {
            let widthbar2 = (e.offsetX / e.target.clientWidth) * song.duration;

            song.currentTime = widthbar2;
        })

    } else {
        song.pause()
        removeEffects()
    }

    play.classList.toggle('none');
    pause.classList.toggle('none');

    dur()
}

function playNext() {
    currentIndex += 1;
    songs(currentIndex);
    song.play()
}

function dur() {
    let dura = song.duration;
    let mind = Math.floor(dura / 60);
    let secd = Math.floor(dura % 60);

    if (secd < 10) {
        secd = `0${secd}`;
    }

    end.innerHTML = `${mind}:${secd}`;
}

function prog() {
    let currTime = song.currentTime;
    let mincurrt = Math.floor(currTime / 60);
    let secodcurrt = Math.floor(currTime % 60);

    if (secodcurrt < 10) {
        secodcurrt = `0${secodcurrt}`;
    }

    start.innerHTML = `${mincurrt}:${secodcurrt}`;
}

function line() {
    let widthbar = (song.currentTime / song.duration) * 100;

    progress.style.width = `${widthbar}%`
}

function removeEffects() {
    songTitle.classList.remove('move')
    artistName.classList.remove('move')
    artistImg.classList.remove('round')
}

function forward() {
    currentIndex += 1;
    songs(currentIndex);
    song.play();
    play.classList.add('none')
    pause.classList.remove('none')
    songTitle.classList.add('move')
    artistName.classList.add('move')
    artistImg.classList.add('round')
}

function backward() {
    currentIndex -= 1;
    songs(currentIndex);
    song.play();
    play.classList.add('none')
    pause.classList.remove('none')
    songTitle.classList.add('move')
    artistName.classList.add('move')
    artistImg.classList.add('round')
}

function repeate() {
    songs(currentIndex);
    song.play()
    play.classList.add('none')
    pause.classList.remove('none')
    songTitle.classList.add('move')
    artistName.classList.add('move')
    artistImg.classList.add('round')
}

let currentIndex = 0;

function songs(currentIndex) {
    if (currentIndex >= songsList.length) {
        currentIndex = 0;
    }

    songTitle.innerHTML = songsList[currentIndex].song_title;
    artistName.innerHTML = songsList[currentIndex].artist_name;
    artistImg.src = songsList[currentIndex].song_img;
    song.src = songsList[currentIndex].song_src;

    currentIndex++;

}