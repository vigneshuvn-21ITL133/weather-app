// formatting time and day
function formatTime(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }
  
  function formatDay(date) {
    const dayArray = date.getDay();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const day = days[dayArray];
    return day;
  }
  // getting current time & day and displaying it
  const currentTime = document.querySelector("#current-time");
  let newCurrentTime = new Date();
  currentTime.innerHTML = formatTime(newCurrentTime);
  
  const currentDay = document.querySelector("#current-day");
  let newCurrentDay = new Date();
  currentDay.innerHTML = formatDay(newCurrentDay);
  
  // implementing search bar and api request
  function displayWeatherInfo(response) {
    document.querySelector("#searched-city").innerHTML = response.data.name;
    const temperature = Math.round(response.data.main.temp);
    document.querySelector("#current-temperature").innerHTML = `${temperature}°`;
    const humidity = response.data.main.humidity;
    document.querySelector("#humidity").innerHTML = `${humidity}%`;
    const windSpeed = Math.round(response.data.wind.speed);
    document.querySelector("#wind").innerHTML = `${windSpeed}km/h`;
    document.querySelector("#weather-type").innerHTML =
      response.data.weather[0].main;
  }
  
  function searchCity(city) {
    const apiKey = "bf2d3d6e5e36a82b3c66293a92e63455";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherInfo);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#search-input").value;
    searchCity(city);
  }
  
  const searchBar = document.querySelector("#search-form");
  searchBar.addEventListener("submit", handleSubmit);
  