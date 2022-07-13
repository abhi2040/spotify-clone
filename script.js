console.log("welcome to spotify")
// Initialize the vairable

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = document.getElementsByClassName('songItemPlay');

let songs = [
    {songName: "bhula dena - salaam-e-ishq", filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Teri Kasam - salaam-e-ishq", filePath: "songs/2.mp3",coverPath: "covers/2.jpg"},
    {songName: "Sakhiya - salaam-e-ishq", filePath: "songs/3.mp3",coverPath: "covers/3.jpg"},
    {songName: "teri meri kahani - salaam-e-ishq", filePath: "songs/4.mp3",coverPath: "covers/4.jpg"},
    {songName: "hamsafar - salaam-e-ishq", filePath: "songs/5.mp3",coverPath: "covers/5.jpg"},
    {songName: "fitoor - salaam-e-ishq", filePath: "songs/6.mp3",coverPath: "covers/6.jpg"},
    {songName: "na jana - salaam-e-ishq", filePath: "songs/7.mp3",coverPath: "covers/7.jpg"}, 
    {songName: "pta nahi - salaam-e-ishq", filePath: "songs/8.mp3",coverPath: "covers/8.jpg"}, 
]
songItems.forEach((element , i) => {

    element.getElementsByTagName("img")[0].src  = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML  = songs[i].songName;
});

// audioElement.play();

// Handle play/pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');    
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 0;
    }
})

// Listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=> {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    
        });

}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click" , (e)=>{
    makeAllPlays();
    index = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play')
    e.target.classList.add('fa-circle-pause')
    audioElement.src = `songs/${index+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');     
    });
});

songItemPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        audioElement.classList.remove('fa-circle-pause');
        audioElement.classList.add('fa-circle-play');    
       
    }
    else{
        audioElement.pause();
        audioElement.classList.remove('fa-circle-play');
        audioElement.classList.add('fa-circle-pause');
 
    }
})
