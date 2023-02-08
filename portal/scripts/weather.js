// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// Coord for Draper, Utah, USA: [40.52505, -111.864204]
// My Key: 50658f3950af3ac334e2b387a6c80e76

/* Store URL in a variable */
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.52505&lon=-111.864204&appid=50658f3950af3ac334e2b387a6c80e76&units=imperial';

/* Select HTML elements */
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

/* Use asynchronous fetch() to request the weather API & check if it is valid */
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  apiFetch();

  /* Display results of fetched data */
  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const icon_data = weatherData.weather[0].icon;
    //const icon_src = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`; // weather icons are stored in an array[]
    const desc = weatherData.weather[0].description;
    const desc_cap = desc.charAt(0).toUpperCase() + desc.slice(1); // capitalize the first letter in the string
    captionDesc.textContent = desc_cap;

    let icon_src = customIcon(icon_data)
    weatherIcon.setAttribute('src', icon_src);
    weatherIcon.setAttribute('alt', desc_cap);
  }

  function customIcon(icon) {
    // icon information can be found at https://openweathermap.org/weather-conditions
    /* 01n = "clear sky"
     * 02n = "few clouds"
     * 03n = "scattered clouds"
     * 04n = "broken clouds"
     * 09n = "shower rain"
     * 10n = "rain"
     * 11n = "thunderstorm"
     * 13n = "snow"
     * 50n = "mist"
     */

    switch(icon) {
        /* Day Icons */
        case "01d": // clear
            return "portal/images/weather-sunny-64px.webp";
        case "02d": // few clouds
            return "portal/images/weather-part-cloudy-64px.webp";
        case "03d": // scattered clouds
            return "portal/images/weather-cloudy-64px.webp";
        case "04d": // broken clouds
            return "portal/images/weather-cloudy-64px.webp";
        case "09d": // shower rain
            return "portal/images/weather-rainy-64px.webp";
        case "10d": // rain
            return "portal/images/weather-rainy-64px.webp";
        case "11d": // thunderstorm
            return "portal/images/weather-stormy-64px.webp";
        case "13d": // snow
            return "portal/images/weather-snowy-64px.webp";
        case "50d": // mist
            return "portal/images/weather-hazy-64px.webp";

        /* Night Icons */
        case "01n": // clear
            return "portal/images/weather-night-64px.webp";
        case "02n": // few clouds
            return "portal/images/weather-night-part-cloudy-64px.webp";
        case "03n": // scattered clouds
            return "portal/images/weather-cloudy-64px.webp";
        case "04n": // broken clouds
            return "portal/images/weather-cloudy-64px.webp";
        case "09n": // shower rain
            return "portal/images/weather-rainy-64px.webp";
        case "10n": // rain
            return "portal/images/weather-rainy-64px.webp";
        case "11n": // thunderstorm
            return "portal/images/weather-stormy-64px.webp";
        case "13n": // snow
            return "portal/images/weather-snowy-64px.webp";
        case "50n": // mist
            return "portal/images/weather-night-hazy-64px.webp";
    }
}
