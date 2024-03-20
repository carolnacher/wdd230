const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const latitude = -34.9011; 
const longitude = -56.1645; 
const apiKey = 'fcd7729898eb123b75c88029f79c4a20'; 

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    const temperature = Math.round(data.list[0].main.temp);
    currentTemp.innerHTML = `${temperature}&deg;F`;  
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`; 
    let desc = data.list[0].weather[0].description; 
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;

}