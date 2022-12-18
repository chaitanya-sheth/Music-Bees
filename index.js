
/*===============================================
Responsive Navbar
===============================================
*/
const toggleNavbar = function(){
document.querySelector(".header").classList.toggle("active");
};

document.querySelector(".mobile-navbar-btn").addEventListener('click' , () => toggleNavbar());

/*===================================================
Changing Song's Info with the help of for-each loop
=====================================================
*/

let songIndex = 0 ; 
let songs = [
        {songName: "Tum Se hi" , singerName: "Mohit Chauhan" , songPath: "audio/1.mp3" , songImagePath: "Photos/audioImage/tumSeHi.webp" , movieName: "Jab We Met" , songDuration: "5:39" },
        {songName: "Ranjha" , singerName: "Jasleen Royal" , songPath: "audio/2.mp3" , songImagePath: "Photos/audioImage/ranjha.webp" , movieName: "Shershaah", songDuration: "3:13"},
        {songName: "Aankon Se Batana" , songPath: "audio/3.mp3" , songImagePath: "Photos/audioImage/aankonSeBatana.webp" , singerName: "Dikshant" , movieName: "Aankhon Se Batana", songDuration: "3:41" }        
]

let songItems = Array.from(document.getElementsByClassName('songItem'));
songItems.forEach(function(element, i){ 
        // console.log( element.getElementsByClassName("songNumber"));
        element.getElementsByClassName("songNumber")[0].innerHTML = i+1;
        element.getElementsByTagName("img")[0].src = songs[i].songImagePath; 
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
        element.getElementsByClassName("singerName")[0].innerText = songs[i].singerName;
        element.getElementsByClassName("movieName")[0].innerHTML = songs[i].movieName;
        element.getElementsByClassName("timestamp")[0].innerHTML = songs[i].songDuration;
})



/*===============================================
For Play & Pause of bottom part
===============================================
*/

        // Array.from(document.getElementsByClassName('songItem')).forEach(function(element){
        //         element.addEventListener('click' , function(){
        //               songIndex =  this.querySelector(".songNumber").innerHTML;  
        //               console.log(songIndex);
        //               let audioElement = new Audio('audio/1.mp3');
        //               audioElement.src = `audio/${songIndex}.mp3`;
        //               audioElement.play();
        //         })
        // })
let audioElement = new Audio('audio/1.mp3');
let Play = document.getElementById('Play');

Play.addEventListener('click' , function(){
        if(audioElement.paused || audioElement.currentTime<=0){
                audioElement.play();
                Play.classList.remove('fa-play-circle');
                Play.classList.add('fa-pause-circle');
        }
        else{
                audioElement.pause();
                Play.classList.remove('fa-pause-circle');
                Play.classList.add('fa-play-circle');
        }
})

/*===============================================
For Time Update in Progress Bar
===============================================
*/

let myProgressBar = document.getElementById('myProgressBar');

audioElement.addEventListener('timeupdate' , function(){
        Progress  = ((audioElement.currentTime/audioElement.duration)*100);
        // console.log(Progress);
        myProgressBar.value = Progress;
})

myProgressBar.addEventListener('change' , function(){
        audioElement.currentTime = (myProgressBar.value * audioElement.duration) /100;
})





/*===========================================================
Play Music by using play button present in song's name row 
=============================================================
*/

// const makeAllPlays = function(){
//         Array.from(document.getElementsByClassName('songItemPlay')).forEach(function(element){
//             element.classList.remove('fa-pause-circle');
//             element.classList.add('fa-play-circle');    
//         })
//     }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach(function(element){
//         element.addEventListener('click', function(e){ 
//         makeAllPlays();
//             songIndex = parseInt(e.target.id);
//             e.target.classList.remove('fa-play-circle');
//             e.target.classList.add('fa-pause-circle');
//             audioElement.src = `audio/${songIndex+1}.mp3`;
//             document.getElementById("bottomName").innerText = songs[songIndex].songName;
//             document.getElementById("bottomImage").src = songs[songIndex].songImagePath;
//             audioElement.currentTime = 0;
//             audioElement.play();
        //     Play.classList.remove('fa-play-circle');
        //     Play.classList.add('fa-pause-circle');

        //     Play.addEventListener('click' , function(){
        //         if(Play.classList.contains('fa-play-circle')){
        //         e.target.classList.remove('fa-pause-circle');
        //         e.target.classList.add('fa-play-circle');
        //         }
        //         else{
        //         e.target.classList.remove('fa-play-circle');
        //         e.target.classList.add('fa-pause-circle');
        //         }
        //     })
// })
// })

// document.getElementById('Play').addEventListener('click',function(){

//         audioElement.src = `audio/${songIndex+1}.mp3`;
//             document.getElementById("bottomName").innerText = songs[songIndex].songName;
//             document.getElementById("bottomImage").src = songs[songIndex].songImagePath;
//             audioElement.currentTime = 0;
//             audioElement.play();
//             Play.classList.remove('fa-play-circle');
//             Play.classList.add('fa-pause-circle');
        

// })

document.getElementById('previous').addEventListener('click',function(){
        if (songIndex <= 0){
                songIndex = 0
        }
        else{
                songIndex -=1 ; 
        }

        audioElement.src = `audio/${songIndex+1}.mp3`;
        document.getElementById("bottomName").innerText = songs[songIndex].songName;
        document.getElementById("bottomImage").src = songs[songIndex].songImagePath;
            audioElement.currentTime = 0;
            audioElement.play();
            Play.classList.remove('fa-play-circle');
            Play.classList.add('fa-pause-circle');
})

document.getElementById('next').addEventListener('click',function(){
        if (songIndex >= 2){
                songIndex = 0
        }
        else{
                songIndex +=1 ; 
        }

        audioElement.src = `audio/${songIndex+1}.mp3`;
            document.getElementById("bottomName").innerText = songs[songIndex].songName;
            document.getElementById("bottomImage").src = songs[songIndex].songImagePath;
            audioElement.currentTime = 0;
            audioElement.play();
            Play.classList.remove('fa-play-circle');
            Play.classList.add('fa-pause-circle');
})