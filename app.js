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
.then(result => {
    return result.json()
})
.then(displayResult)
}

const displayResult = (result) => {
    console.log(result);
let city = document.querySelector(".city")
city.innerText = `${result.name},${result.sys.country}`

let temp =document.querySelector(".temp")
temp.innerText = `${Math.floor(result.main.temp)}°C`

let desc = document.querySelector(".desc")
desc.innerText = result.weather[0].description;

let minmax =document.querySelector(".minmax")
minmax.innerText = `${Math.floor(result.main.temp_min)}°C/${Math.floor(Math.floor(result.main.temp_max))}°C`;


}




const input = document.querySelector(".input");
input.addEventListener("keydown",setQuery) 