const API_KEY ="f86553ce310ec2e66d4f1e0ea3d5f559";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    console.log('error');
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);
