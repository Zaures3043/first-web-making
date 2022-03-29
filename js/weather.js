const API_KEY = "df1589ebd97338d3e1b76de924deaa0b" 


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url) 
    .then(response => response.json())
    .then(data => {
        const city = document.querySelector("#weather-wrap #country");
        const weatherTemp = document.querySelector("#weather-wrap #temperature");
        const weatherCondition = document.querySelector("#weather-wrap #condition");
        city.innerText = data.name;
        weatherTemp.innerText = `${data.main.temp}℃`;
        weatherCondition.innerText = `${data.weather[0].main}`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
