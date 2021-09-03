// store api key from website
const API_KEY = `373c9700d227c58d59e501471679b849`;
// call the button with no parameter
const searchTemperature = () => {
  // now take the input value from the ui
  const city = document.getElementById("city-name").value;
  // now attach the url and url api key within the back-tic
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  // now fetch the url
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
   
};
// create a two pera-meter function for catching id and inner-Text
const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

// now call a function which will be show data from url
const displayTemperature = (temperature) => {
  setInnerText("city", temperature.name);
  setInnerText("temperature", temperature.main.temp);
  setInnerText("condition", temperature.weather[0].main);
  // set weather icon dynamically
  const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;

  const weatherIcon = document.getElementById("weather-icon");
  weatherIcon.setAttribute("src", url);
  
  // console.log(temperature)
};
