tellfortune.addEventListener('click',function(){
    console.log("button pressed");

    //let firstname = "Mr. Clean"; //let is the word for the variable, a variable in js is a container. //
    // double quotes is called a literal, it will parrot back whatever you give it//
    let yourname = firstname.value.toLowerCase() //value stores what was typed

    console.log(yourname);

    if(yourname == "mr clean"){ //if this...
        //...then this
        //two equal signs asks a question
        //console.log("your name is Mr. Clean")
        userfortune.textContent = "haha ur bald."
    }
    else if(yourname=="beef"){
        //console.log("Sorry you are beef :(")
        userfortune.textContent = "sorry you are beef :("
    }

    
    else if(yourname=="jon"){
        //console.log("Sorry you are beef :(")
        userfortune.textContent = "Is Your Refrigeration Running?"
    }

      else if(yourname=="richard"){
        //console.log("Sorry you are beef :(")
        userfortune.textContent = "At what point does a person become a monster? Is there even a difference?"
    }

      else if(yourname=="cleetus"){
        //console.log("Sorry you are beef :(")
        userfortune.textContent = "They know where you are now. Remain vigilant.?"
    }

      else if(yourname=="donald"){
        //console.log("Sorry you are beef :(")
        userfortune.textContent = "You will lose a nipple in a freak accident in a shoe store."
    }

      else if(yourname=="craig"){
        //console.log("Sorry you are beef :(")
        userfortune.textContent = "You ARE the tooth fairy."
    }

      else if(yourname=="thing of the night"){
        //console.log("Sorry you are beef :(")
        userfortune.textContent = "A path of death lies in your wake."
    }

      else if(yourname=="jack"){
        //console.log("Sorry you are beef :(")
        userfortune.textContent = "Why are you running?"
    }

    else if(yourname=="kurstann"){
        //console.log("Sorry you are beef :(")
        userfortune.textContent = " congutilions."
    }

      else if(yourname=="gertrude"){
        //console.log("Sorry you are beef :(")
        userfortune.textContent = "life is gonna suck for you. it might get better. maybe. think about a career change. this one isnt working for you"
    }

      else if(yourname=="ronald"){
        //console.log("Sorry you are beef :(")
        userfortune.textContent = "Just because you can repair what was broken does not mean you have solved the problem. Nothing so important is ever that easy."
    }

      else if(yourname=="phillip"){
        //console.log("Sorry you are beef :(")
        userfortune.textContent = "Sometimes it is best to leave things well enough alone. That is advice that you should have heeded long, long ago."
    }
    
     else if(yourname=="greg"){
        //console.log("Sorry your parents named you that")
        userfortune.textContent = "sorry your parents named you that."
    }

    else if(yourname=="jez"){
        //console.log("Sorry your parents named you that")
        userfortune.textContent = "Have you been watching the Ants?"
    }

    else{ //antyhting not defined above
        //console.log("oops! sorry you aren't real!")
        userfortune.textContent = "oops! sorry you aren't real!"
    }

    //add to fortune based on color choice
    let yourcolor = favcolor.value.toLowerCase();
    console.log(yourcolor);

    if(yourcolor == "green"){ //this is its own set of conditionals so using if again is ok
        userfortune.textContent += " Things Will Improve" //single euals sign means EXACTLY equal. so overwrites what is there. adding the plus is keep whats already
    }
        //there and add this new info to it 

    else if(yourcolor == "orange"){ 
        userfortune.textContent += " Have You Considered Stopping?"
    }

    else if(yourcolor == "purple"){ 
        userfortune.textContent += " Have Your Dreams Came True Yet? Why Not? Try Harder."
    }

    else if(yourcolor == "red"){ 
        userfortune.textContent += " The Audacity"
    }

    else if(yourcolor == "brown"){ 
        userfortune.textContent += " Sorry You Are Still Made Of Beef. Try Again"
    }

    else if(yourcolor == "yellow"){ 
        userfortune.textContent += " Haha Piss Time"
    }

    else if(yourcolor == "blue"){ 
        userfortune.textContent += " Consider Your Actions"
    }

    else if(yourcolor == "pink"){ 
        userfortune.textContent += " The line was crossed long ago. You have come too far to turn back now."
    }

    else if(yourcolor == "white"){ 
        userfortune.textContent += " This is nothing compared to what comes next. Too bad you will not be around to help."
    }

    else if(yourcolor == "black"){ 
        userfortune.textContent += " it is inevitable"
    }

    else if(yourcolor == "grey"){ 
        userfortune.textContent += " Three Years. Six Months. Three Weeks. Eight Days. Four Hours. Three Minutes. Beware"
    }

    else if(yourcolor == "puke"){ 
        userfortune.textContent += " What do YOU think you need to do? why are you asking me?"
    }


    //add a fortune based on the quarter of the year of Birth
    let yourmonth = birthmonth.value
    console.log(yourmonth);

    if(yourmonth < 4){ //jan feb march
       userfortune.textContent += " Not all the frogs are in the pond, beware of them.";
    }

    else if(yourmonth < 7){ //aprol may june
       userfortune.textContent += " april showers bring may flowers! But Not For You";
    }

    else if(yourmonth < 10){ //july augsut sept
       userfortune.textContent += " An old man waits patiently in the darkness. Events are occurring just as he had hoped.";
    }

    else if(yourmonth < 13){ //oct nov dec
       userfortune.textContent += " There are countless consequences for messing with history. You are living in one of them.";
    }

  

//blue, pink, black, white, grey, 


//so use yourmonth = assigned value to do eahc separately?
//fortune ideas. you Smell like Beef! 
// congutilions. 
// ANTS watch for the Ants. 
//green this is actually the best color fgood job!
//name entity
//Does it not all seem familiar? Has this all happened before? 

//At what point does a person become a monster? Is there even a difference?
//They know where you are now. Remain vigilant.
//You will lose a nipple in a freak accident in a shoe store.
//You ARE the tooth fairy.
//A path of death lies in your wake.
//	Not all the frogs are in the pond, beware of them.
//
//
// life is gonna suck for you. it might get better. maybe. think about a career change. this one isnt working for you
//There are countless consequences for messing with history. You’re living in one of them.
//An old man waits patiently in the darkness. Events are occurring just as he had hoped.
//Just because you can repair what was broken does not mean you have solved the problem. Nothing so important is ever that easy.
//Sometimes it’s best to leave things well enough alone. That is advice that you should have heeded long, long ago.
//The line was crossed long ago. She’s come too far to turn back now.
//This is nothing compared to what comes next. Too bad you won’t be around to help.
// it is inevitable
//are you making good life choices? are you sure?
//What do YOU think you need to do? why are you asking me?
//dont like your fortune? as a button. when clicked it says well thats jsut too damn bad 
//maybe change the background color based iff the color they choose. but lik ehvae to change form type
// try these! and drop down list of the names you have on file
})