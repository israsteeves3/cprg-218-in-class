/*
fetch("https://api.openweathermap.org/data/2.5/weather?q=Calgary&appid=a49f892b9f8d34d1951c46c48548e3ea&units=metric") 
//calgary is where you want weather from, then api key, then units
//6cff9a6c350512ca8853afea99d73f33 this is my key for a future assignment
.then(response=>response.json())
.then(data =>{
    console.log(data);

    temperature.textContent = data.main.temp;
  })

    catch(error => {
    console.error("Error fetching data:", error);
      
})

something went wrong here i pulled dans code from playcode below
*/


      fetch("http://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=6cff9a6c350512ca8853afea99d73f33&units=metric")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        temperature.textContent = "Temperature: "+data.main.temp+" \u00b0C";
        description.textContent = "Description "+data.weather[0].description; //0 gives current weather, 1 is tomorrow, think of it like an array
        high.textContent = "High " +data.main.temp_max+" \u00b0C"; //its like file folders and pathing to target the right thing
        low.textContent = "Low " +data.main.temp_min+" \u00b0C";
        feelslike.textContent = "Feels like " +data.main.feels_like+" \u00b0C";

        //get the icon for the weather 04d is within the API it directly correlates to the icon needed
        let iconCode = data.weather[0].icon;
        let iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; //this is a fancier way to concatenate (+ adding two thing together)
        console.log(iconURL);
        icon.src = iconURL //this is filling the src attribute in the html using js
        icon.alt = data.weather[0].description+" icon";

      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });