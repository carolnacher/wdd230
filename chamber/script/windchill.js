document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '3a37a3284cd6ada8f22e44e46aeb2fdc';
    const submitButton = document.getElementById('submitBtn');
    const weatherInfo = document.getElementById('weatherInfo');

    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1bm9wYW56YWNjaGkiLCJhIjoiY2xvM2oyZG9mMGZoYjJ3dGR1eXNkZGQzdyJ9.MaO03BaJJRwPI6VT5x-hBw';

    submitButton.addEventListener('click', () => {
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                
                document.getElementById('map').innerHTML = '';

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
                    .then((response) => response.json())
                    .then((data) => {
                        const location = data.name;
                        const temperatureKelvin = data.main.temp;
                        const windSpeed = data.wind.speed;

                        
                        const temperatureCelsius = temperatureKelvin - 273.15;

                        // Verificar límites permitidos para calcular oficialmente la sensación térmica
                        if (temperatureCelsius > 50 || windSpeed <= 3.0) {
                            var windChill = "N/A";
                        } else {
                            const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;
                            const windSpeedMetersPerSecond = windSpeed;
                            // Fórmula para calcular la sensación térmica en Fahrenheit y mph
                            windChill = 35.74 + 0.6215 * temperatureFahrenheit - 35.75 * Math.pow(windSpeedMetersPerSecond, 0.16) + 0.4275 * temperatureFahrenheit * Math.pow(windSpeedMetersPerSecond, 0.16);
                        }

                        const weatherHTML = `
                            <h3>Weather in ${location}:</h3>
                            <p>Temperature: ${temperatureCelsius.toFixed(2)}°F</p>
                            <p>Wind Chill: ${windChill === "N/A" ? "N/A" : windChill.toFixed(2)}°F</p>
                            <p>Wind Speed: ${windSpeed} m/s</p>
                        `;

                        
                        map = new mapboxgl.Map({
                            container: 'map',
                            style: 'mapbox://styles/mapbox/satellite-streets-v12',
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
    });

    submitButton.click();
});
