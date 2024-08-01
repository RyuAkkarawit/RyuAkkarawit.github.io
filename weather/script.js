const appKey= "b2fd5716577da1e10d2f50f146f3dba2"

const searchButton = document.querySelector("#search-btn");
const searchInput = document.querySelector("#search-txt");
const cityName = document.querySelector("#city-name");
const icon = document.querySelector("#icon");
const temperature = document.querySelector("#temp");
const humidity = document.querySelector("#humidity-div");
const windspeed = document.querySelector("#windspeed-div");

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed );

function enterPressed(event){
    if (event.key === "Enter"){
        findWeatherDetails();
    }
}

function findWeatherDetails(){
    if(searchInput.value ===""){
    }else{
        const searchLink ="https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid=" + appKey;
        httpRequestAsync(searchLink, theResponse);
    }
}

function theResponse(response) {
   const jsonObject = JSON.parse(response);
   cityName.innerHTML = jsonObject.cityName;
   icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
   temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°"
   humidity.innerHTML = jsonObject.main.humidity + "%"
   windspeed.innerHTML = jsonObject.wind.speed + " m/s";

}

function httpRequestAsync(url,callback){
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200){
            callback(httpRequest.responseText);
        }     
    }
    httpRequest.open("GET", url, true);
    httpRequest.send();
}

