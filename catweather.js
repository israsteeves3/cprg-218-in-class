//get a cat fact
fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data =>{
    console.log(data.fact);
    fact.textContent=data.fact; 
    })

.catch(error =>{
    //what do we do if theres an API error?
console.error("error fetching cat fact", error)
fact.textContent = "Almost all cats are furry";
})

//get a cat image
fetch("https://cataas.com/cat?width=600&json=true") //adding width=600& after the ? forces the img to be 600 px wide. does not work on all api's
.then(response=>response.json())
.then(data=>{
    console.log(data);
    catphoto.src = data.url;

})



//data is whats in curly brackets on cat facts site
//this is how to take whats in the console and put it on the page fact.textContent
