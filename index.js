let audio= new Audio("2.mp3");
audio.play();
var play= document.getElementById('icon');
play.addEventListener('click',function(){
    if(audio.paused){
        audio.play();
        play.src='pause.png';
        

    }
    else{
        audio.pause();
        play.src='play.png';
    }

})