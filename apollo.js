ch1.addEventListener("click",function(){
    console.log("Chapter one button pressed");
//assumes the user wants the video to play automatically, can also do a skip to and then pause instead
    vid.currentTime = 31; //sends user to 31 seconds into video, when you meet the astronauts. current time is js is ALWAYS seconds
    vid.play();
})

ch2.addEventListener("click",function(){
    console.log("Chapter one button pressed");
    vid.currentTime = 112; //sends user to 112 seconds into video, when they launch
    vid.play();
})

ch3.addEventListener("click",function(){
    console.log("Chapter one button pressed");
    vid.currentTime = 258; //sends user to 258 seconds into video, when they speak
    vid.play();
})

//volume slider
vol.addEventListener("change",function(){
    vid.volume=vol.value;
    console.log(vol.value);
    showvolume.textContent = Math.round(vol.value*100)+"%"
})

//facts
vid.addEventListener("timeupdate",function(){ //updates by time instead of from page load bc what if someone pauses?
    console.log("time update");
    let current = Math.round(vid.currentTime);
    console.log(current);

    if(current > 10 && current < 20){ //greater than ten, less than 20
        //ALSO && means "and" and then || means or
        factheading.textContent = "First humans to orbit the Moon.";
        factbody.textContent = "In December 1968, Apollo 8 became the first crewed spacecraft to leave Earths gravitational influence, reach the Moon, orbit it 10 times, and return safely.";
    }
//how do i wrap text down in js i dont want ALL THAT on one line

    else if(current > 29 && current < 42){
        factheading.textContent = "Meet the crew.";
        factbody.textContent = "The three astronauts were Commander Frank Borman, Command Module Pilot Jim Lovell, and Lunar Module Pilot Bill  Anders - the first humans to see the far side of the Moon with their own eyes.";
    }
    //text content is for just text, innerHTML instead allows you to use html tags and things like abbrevaitions or trademarks and shit in js

    else if(current > 50 && current < 60){
        factheading.textContent = "A mission upgraded on the fly.";
        factbody.textContent = "Apollo 8 was originally supposed to test the lunar lander in Earth orbit, but when the lander wasn’t ready, NASA abruptly changed the plan in August 1968 to a much riskier “go to the Moon now” orbital mission—giving the crew only a few months to retrain.";
    }


    else{
            //if any other time code is true
        factheading.textContent = "";
        factbody.textContent = "";
    }
})

