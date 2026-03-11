const songs = [
"song1.mp3",
"song2.mp3",
"song3.mp3"
];

let songIndex = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("song-title");
const progress = document.getElementById("progress");

function loadSong(){
audio.src = "songs/" + songs[songIndex];
title.innerText = songs[songIndex];
}

loadSong();

function playPause(){
if(audio.paused){
audio.play();
}else{
audio.pause();
}
}

function nextSong(){
songIndex++;
if(songIndex >= songs.length){
songIndex = 0;
}
loadSong();
audio.play();
}

function prevSong(){
songIndex--;
if(songIndex < 0){
songIndex = songs.length - 1;
}
loadSong();
audio.play();
}

audio.addEventListener("timeupdate", ()=>{
progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", ()=>{
audio.currentTime = (progress.value / 100) * audio.duration;
});
