document.addEventListener("DOMContentLoaded", () => {
  const apiKey = '3a37a3284cd6ada8f22e44e46aeb2fdc';
  const weatherInfo = document.getElementById('weatherInfo');

  mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1bm9wYW56YWNjaGkiLCJhIjoiY2xvM2oyZG9mMGZoYjJ3dGR1eXNkZGQzdyJ9.MaO03BaJJRwPI6VT5x-hBw';

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      document.getElementById('map').innerHTML = '';

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          const location = data.name;
          const temperatureFahrenheit = data.main.temp;
          const windSpeed = data.wind.speed;
          const weatherIcon = data.weather[0].icon;

          const temperatureFahrenheitRounded = Math.round(temperatureFahrenheit);
          const windSpeedRounded = Math.round(windSpeed);

          let windChill;
          if (isNaN(windSpeed) || windSpeed === 0) { 
            windChill = "N/A";
        } else {
            if (temperatureFahrenheit <= 50 && windSpeed > 10) { 
                const windSpeedMilesPerHour = windSpeed * 2.237; 
                windChill = Math.round(35.74 + 0.6215 * temperatureFahrenheit - 35.75 * Math.pow(windSpeedMilesPerHour, 0.16) + 0.4275 * temperatureFahrenheit * Math.pow(windSpeedMilesPerHour, 0.16));
            } else {
                windChill = "N/A";
            }
        }

          const weatherHTML = `
              <h3>Weather in ${location}:</h3>
              <p>Temperature: ${temperatureFahrenheitRounded}°F</p>
              <p>Wind Speed: ${windSpeedRounded} m/s</p>
              <img id="weather-icon" src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="Weather icon">
            `;

          map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lon, lat],
            zoom: 10
          });

          const mapContainer = map.getContainer();
          const copyrightLinks = mapContainer.querySelectorAll('.mapboxgl-ctrl-attrib a');
          copyrightLinks.forEach(link => {
            console.log(link.href);
          });

          weatherInfo.innerHTML = weatherHTML;
        })
        .catch((error) => {
          weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
        });
    }, error => {
      weatherInfo.innerHTML = '<p>Error getting location.</p>';
    });
  } else {
    weatherInfo.innerHTML = '<p>Geolocation is not supported by your browser.</p>';
  }
  const calculateButton = document.getElementById('wcalculate');
  calculateButton.addEventListener('click', calculateWindChill);
});
function calculateWindChill() {
  const temperatureInput = document.getElementById('temperature');
  const windSpeedInput = document.getElementById('windSpeed');
  const temperatureFahrenheit = parseFloat(temperatureInput.value);
  const windSpeedMph = parseFloat(windSpeedInput.value);

  let windChill;
  if (isNaN(temperatureFahrenheit) || isNaN(windSpeedMph)) {
    windChill = "N/A";
  } else {
    if (temperatureFahrenheit <= 50 && windSpeedMph > 10) {
      windChill = Math.round(35.74 + 0.6215 * temperatureFahrenheit - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * temperatureFahrenheit * Math.pow(windSpeedMph, 0.16));
    } else {
      windChill = "N/A";
    }
  }
  const windChillResultElement = document.getElementById('windChillResult');
  windChillResultElement.textContent = `Wind Chill: ${windChill}`;
}