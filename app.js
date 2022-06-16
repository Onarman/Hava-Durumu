const url = ("https://api.openweathermap.org/data/2.5/");
const key = ("3be080859694d5bac23f87ccf6bd70ae");

const setQuery = (e) => {
    if(e.key == "Enter"){
        getResult(input.value)
    }
        
}

const getResult =  (cityName) => {
let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr` 
fetch(query)
.then(weather => {
    return weather.json()
})
.then(displayResult)
}

const displayResult = (weather) => {
    console.log(weather);
}


const input = document.querySelector(".input");
input.addEventListener("keydown",setQuery) 