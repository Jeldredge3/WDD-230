// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// Coord for Trier, DE: [49.7557, 6.6394]
// My Key: 50658f3950af3ac334e2b387a6c80e76

/* Store URL in a variable */
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7557&lon=6.6394&appid=50658f3950af3ac334e2b387a6c80e76&units=imperial';



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
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`; // weather icons are stored in an array[]
    const desc = weatherData.weather[0].description;
    const desc_cap = desc.charAt(0).toUpperCase() + desc.slice(1); // capitalize the first letter in the string
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc_cap);
    captionDesc.textContent = desc_cap;
  }