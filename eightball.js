shake.addEventListener("click", function(){
    console.log("shook");

    //create a list of all possible responses. 
    //this is using arrays. 
    const responses = new Array("things will improve", "there is evil in you", "beyond a doubt", "yes", "you can not rely on it", "unclear", "try again later",
        "oops", "i can not tell you", "no idea", "man i do not know", "why are you asking me?", "sucks to suck", "no", "i do not think so", 
        "do not count on it", "i am happy to say no!", "why would i tell you that?", "yeah you are the dad.", "i do not know shit about fuck",
    ); //const responses = []; this is another option for this
    console.dir(responses); //dir is directory. this is another way to do console logs bc the conole.log wont work for arrays
    //console.log(responses[16]) this is calling on the specific response number 16, its like IDs 

    //time to create a random number. rand is for random its a name we chose
    let rand= Math.random();
    // take the random number and multiply by total amount in array (20)
    // * still means multiply here 
    rand = Math.floor(rand * responses.length);
    /*(number * total number in array). use bedmas. so its the brackets shit then you round, which is the math.floor
    using responses.length keeps the number at or below the number of items in the array, you could just write 20 but what if you add more responses?
    you would have to change the math. so this covers all possibilites with minimal code.
    this is done bc js will give a number btwn zero and one, and we needed it to be btwn one and twenty. so the multiplication solves that issue
    this is an exclusive event. one "roll" does not effect the next. you may still have the same number roll multiple times, 
    but its not related to the last roll.
    */
    console.log(rand); //this will give a different random number each time its clicked
    console.log(responses[rand]);

    answer.textContent = responses[rand];
   
})




/*
Notes for this portion
-// * for multply and / for divide with computers
-this is how to comment out multiple lines
-you can have more than one array, this time we are just using one
-arrays and random numbers can be used separately but are often used together
-generally, order of the array does not matter.
-Dan bought and CUT OPEN an eight ball for this
-using const for a constant value, let can be used but const is more efficient
-old comp sci thing- counting starts at zero. so we have 0 - 19 in console log but we still have 20 items
-console logs are used to check code is working before putting lots of effort into something that isnt working
-js always generates a number btwn zero and one. so some debugging is needed. different languages do this differently
-Dan likes to comment out console logs but if it doesnt matter id rather keep them in
-if you can change things all at once (like with a master piece of code like ids or classes and shit like that)
instead of individually it will save time and money
-
*/