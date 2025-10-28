//let now = new Date();
//console.log(now); check if it works- yes but only loaded time not constant updates
function updateClock(){
    let now = new Date(); //time stored here. if something else is put in the brackets, use this as a test. try to pick a future date makes it easier
    //remove or comment out date testing to make sure it works correctly.
    console.log(now);


//next- break down the date and time into the three parts of time- hours minutes and seconds
    let hours = now.getHours();  //these could have been concatenated, but this this set up for further steps
    let minutes = now.getMinutes().toString().padStart(2,0); //convert to string so you can do things with it
    let seconds = now.getSeconds().toString().padStart(2,0); //padStart pads when the start is so if the number is 
    // a single digit then it adds a zero on start so make it the same. like 9 becomes 09. this is exactly how time 
    // is set up. padEnd can also be used for zeroes on the end but isnt used as much
    console.log(hours);
    console.log(minutes);
    console.log(seconds);

    clock.textContent = hours+":"+minutes+":"+seconds; //concatenated

    //show a message to the user based on the time of day
    /*
        cool this is how to do multiple lines
        morning - 5am to 11:59am
        afternoon - noon to 4:59pm (16:00)
        evening - 5pm to 9:59pm (21:00)
        night - 10pm to 5am the next day
    */

    if(hours < 5){
        greeting.textContent = "Good Night";
        document.body.classList.add("night"); //how to attach the css to javascript
        document.body.classList.remove("morning");
        document.body.classList.remove("afternoon");
        document.body.classList.remove("evening"); //this means jsut night will show, nothing else
    }
    else if(hours < 12){ //else if means once it finds the right answer atop looking for other answers. this makes it exclusive, meaning only one can be true
        greeting.textContent = "Good Morning";
        document.body.classList.remove("night"); 
        document.body.classList.add("morning");
        document.body.classList.remove("afternoon");
        document.body.classList.remove("evening");
    }
    else if(hours < 17){
        greeting.textContent = "Good Afternoon";
        document.body.classList.remove("night"); 
        document.body.classList.remove("morning");
        document.body.classList.add("afternoon");
        document.body.classList.remove("evening");
    }
    else if(hours < 22){
        greeting.textContent = "Good Evening";
        document.body.classList.remove("night"); 
        document.body.classList.remove("morning");
        document.body.classList.remove("afternoon");
        document.body.classList.add("evening");
    }
    else{ //dont need the hours content here bc its everything else that is not defined. this was the issue ran into with the fortune teller
        //can also use (hours = < 24) but this way is easier
        greeting.textContent = "Good Night"
    }

}

updateClock(); //tells js to run this immediately
setInterval(updateClock,1000); //run this code at a set number of miliseconds. 
// 1000 miliseconds in a second. so asking js to run this code every second
//if you use this, only use if absolutely needed. this could crash a computer if someones computer is slow
//this last command is why theres a delay with no styling when the page loads. the secomd to last one (right above this) fixes that issue


