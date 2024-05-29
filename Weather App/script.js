const cityInput = document.getElementById('cityinput');
const searchBtn = document.getElementById('searchbtn');
const weatherInfo = document.querySelector('.weatherinfo');
const cityName = document.getElementById('cityname');
const weatherIcon = document.getElementById('weathericon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

const apikey = '7537c27df2bf4e1c9f9171251242905';

async function getWeatherData(city) {
    const apiurl = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`;

    try {
        const response = await fetch(apiurl);
        const data = await response.json();

        if (response.ok) {
            displayWeatherData(data);
        } else {
            alert('City not found. Please enter a valid city name.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeatherData(data) {
    cityName.textContent = data.location.name;
    const iconCode = data.current.condition.icon;
    const iconUrl = `https:${iconCode}`;
    weatherIcon.src = iconUrl;
    temperature.textContent = `Temperature: ${data.current.temp_c}°C`;
    description.textContent = `Description: ${data.current.condition.text}`;
    humidity.textContent = `Humidity: ${data.current.humidity}%`;
    wind.textContent = `Wind Speed: ${data.current.wind_kph} km/h`;
    weatherInfo.style.display = 'block';
}

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeatherData(city);
    } else {
        alert('Please enter a city name.');
    }
});

cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchBtn.click();
    }
});
