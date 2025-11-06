  toggleAudio.addEventListener('click', function () {
	console.log('Working');
	if (song.paused) {
		//If the song is paused
		song.play();
        toggleAudio.innerHTML = "&#x23f8;"; //we used textContent originally but it takes it as literally being text 
        // so we used inner.html to inject code. be more careful with this bc it can make it easier to break or somwthing?
	} else {
		song.pause();
        toggleAudio.innerHTML = "&#9658"
	}
});

//button and volume are independent, so its a new event listener

vol.addEventListener("change", function(){ //change listens for a change in the slider movement
    song.volume = vol.value;
    console.log(song.volume);


    let volPercent = vol.value*100;
    console.log(volPercent);
    voldisplay.textContent = Math.round(volPercent)+"%";
}) 

correctanswer.addEventListener('click',function(){
    correct.play();
})

wronganswer.addEventListener('click',function(){
    wrong.play();
})