let API_KEY = "57a01579c4574d80adb232024241508";
let BASE_URL = "http://api.weatherapi.com/v1";
let form = document.querySelector("#form");
let input = document.querySelector("#city");

form.onsubmit = (event) => {
  event.preventDefault();
  let city = input.value;
  if (city) {
    let API_URL = `${BASE_URL}/current.json?key=${API_KEY}&q=${city}`;
    fetch(API_URL)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      showData(data);
    })
  }
}

function showData(data) {
  const container = document.querySelector("main");
  let main = document.querySelector("#main");
  // const showCityName = document.querySelector("#cityName");
  // const showCityTemp = document.querySelector("#temp");
  // const showCityStatus = document.querySelector("#status");
  // const showCityWindSpeed = document.querySelector("#windSpeed");
  // const showCityHumidity = document.querySelector("#humidity");
  // const showCityCloudy = document.querySelector("#cloudy");
  let cityName = `${data.location.name} / ${data.location.country}`;
  let date = new Date();
  let cityTemp = Math.floor(parseInt(data.current.temp_c));
  let cityStatus = getCityState(cityTemp);
  let cityWindSpeed = parseInt(data.current.wind_mph);
  let cityHumidity = parseInt(data.current.humidity);
  let cityCloudy = parseInt(data.current.cloud);
  main.innerHTML = `
    <div class="title p-4">
      <h2 id="cityName" class="text-2xl font-bold">${cityName}</h2>
      <p id="date">${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}</p>
    </div>
    <img src="${cityStatus}" class="w-imgWidth mx-auto" id="status" alt="">
    <div class="temp text-center">
      <h1 id="temp" class="text-5xl font-bold">${cityTemp}°</h1>
      <p>temperature</p>
    </div>
    <div class="details flex justify-between items-center py-4 w-full bg-bgColor">
      <div class="card items-center border-r border-borderColor w-detailWidthCard">
        <img src="dist/imgs/wind.png" class="w-detailWidthIMG mx-auto" alt="">
        <h2 id="windSpeed" class="text-2xl font-bold">${cityWindSpeed} <span class="text-base font-normal">mph</span></h2>
        <p>Wind Speed</p>
      </div>
      <div class="card items-center border-r border-borderColor w-detailWidthCard">
        <img src="dist/imgs/humidity.png" class="w-detailWidthIMG mx-auto" alt="">
        <h2 id="humidity" class="text-2xl font-bold">${cityHumidity}<span class="text-base font-normal">%</span></h2>
        <p>Humidity</p>
      </div>
      <div class="card items-center w-detailWidthCard">
        <img src="dist/imgs/cloudy-day.png" class="w-detailWidthIMG mx-auto" alt="">
        <h2 id="cloudy" class="text-2xl font-bold">${cityCloudy}</h2>
        <p>Cloudy</p>
      </div>
    </div>
  `
  // showCityName.innerHTML = cityName;
  // showCityTemp.innerHTML = `${cityTemp}°`;
  // showCityStatus.src = `${cityStatus}`;
  // showCityWindSpeed.innerHTML = `${cityWindSpeed} <span class="text-base font-normal">mph</span>`;
  // showCityHumidity.innerHTML = `${cityHumidity}<span class="text-base font-normal">%</span>`;
  // showCityCloudy.innerHTML = cityCloudy;
  container.appendChild(main);
}

function getCityState(temp) {
  if (temp <= 35 && temp >= 25) {
    return "dist/imgs/sun.png";
  } else if (temp <= 24 && temp >= 18) {
    return "dist/imgs/cloudy.png";
  } else {
    return "dist/imgs/cold.png";
  }
}