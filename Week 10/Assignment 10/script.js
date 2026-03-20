// Weather App Script (Assignment 10)
// Robin Kelley
// 3/18/2026

// Add event listener to button
document.getElementById("weatherBtn").addEventListener("click", getWeather);

// Allow Enter key to trigger search (Bonus credit feature)
document.getElementById("city").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        getWeather();
    }
});

// Convert weather code to readable text
// I added this function to make the output more user-friendly. The weather codes are based on the Open-Meteo API documentation.
// (I did something similar in a different class, so I reused and adapted that code for javascript)
function getWeatherText(code) {
    if (code === 0) return "Clear sky";
    else if (code <= 3) return "Partly cloudy";
    else if (code <= 48) return "Fog";
    else if (code <= 55) return "Drizzle";
    else if (code <= 65) return "Rain";
    else if (code <= 75) return "Snow";
    else if (code <= 82) return "Rain showers";
    else if (code >= 95) return "Thunderstorm";
    else return "Unknown";
}

// Function to convert weather code to icon
// Taken from example (I wanted to combine this with the prior function, 
// but I didn't want to make it too complicated. I also wanted to have the 
// option to use different icons in the future without changing the text output.)
function getWeatherIcon(code) {
    if (code === 0) return "☀️";
    else if (code <= 3) return "🌥";
    else if (code <= 48) return "🌫️";
    else if (code <= 55) return "🌦️";
    else if (code <= 65) return "🌧️";
    else if (code <= 75) return "❄️";
    else if (code <= 82) return "🌧️";
    else if (code >= 95) return "⛈️";
    else return "🌍";
}

// I don't believe we have covered async/await yet, but you had it in your example file so I used it here. 
// I have used it previously with dart/flutter.
async function getWeather() {

    const output = document.getElementById("output");

    // Step 1: Get city input
    let city = document.getElementById("city").value.trim();

    // Handle empty input
    if (city === "") {
        output.innerHTML = "<p class='error'>Please enter a city name.</p>";
        return;
    }

    // Show loading message while fetching
    output.innerHTML = "<p class='loading'>Fetching weather...</p>";

    // Also familiar with this from dart/flutter, but I don't believe we have covered this yet.
    try {

        // Step 2: Call Geocoding API
        let geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

        let geoResponse = await fetch(geoURL);

        // Check if response is OK
        if (!geoResponse.ok) {
            output.innerHTML = "<p class='error'>Unable to fetch location data.</p>";
            return;
        }

        let geoData = await geoResponse.json();

        // Check if city exists in response
        if (!geoData.results || geoData.results.length === 0) {
            output.innerHTML = "<p class='error'>City not found.</p>";
            return;
        }

        // Extract latitude, longitude, and city info 
        // From the first result
        let latitude = geoData.results[0].latitude;
        let longitude = geoData.results[0].longitude;
        let displayCity = geoData.results[0].name;
        let region = geoData.results[0].admin1;
        let country = geoData.results[0].country;

        // Build location string — show region and/or country if available
        // Bonus Credit addition - I wanted to account for places that might not have a state/region, but do have a country.
        let location = displayCity;
        if (region && country) {
            location = displayCity + ", " + region + ", " + country;
        } else if (country) {
            location = displayCity + ", " + country;
        }

        // Step 3: Call Weather API
        let weatherURL =
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
            `&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,precipitation` +
            `&temperature_unit=fahrenheit&wind_speed_unit=mph`;

        let weatherResponse = await fetch(weatherURL);

        // Check if response is OK
        if (!weatherResponse.ok) {
            output.innerHTML = "<p class='error'>Unable to fetch weather data.</p>";
            return;
        }

        let weatherData = await weatherResponse.json();

        // Check for missing current data
        if (!weatherData.current) {
            output.innerHTML = "<p class='error'>Weather data not available.</p>";
            return;
        }

        // Extract required data
        let tempF = weatherData.current.temperature_2m;
        let feelsLike = weatherData.current.apparent_temperature;
        let humidity = weatherData.current.relative_humidity_2m;
        let windMph = weatherData.current.wind_speed_10m;
        let weatherCode = weatherData.current.weather_code;
        let precipitation = weatherData.current.precipitation;

        // Get icon and condition text using functions
        let icon = getWeatherIcon(weatherCode);
        let condition = getWeatherText(weatherCode);

        // Step 4: Display output
        output.innerHTML = `
            <div class="weather-card">
                <div class="weather-header">
                    <span class="weather-icon">${icon}</span>
                    <div>
                        <h2 class="city-name">📍 ${location}</h2>
                        <p class="condition">${condition}</p>
                    </div>
                </div>
                <div class="weather-grid">
                    <div class="weather-item">
                        <span class="label">🌡 Temperature</span>
                        <span class="value">${tempF} °F</span>
                    </div>
                    <div class="weather-item">
                        <span class="label">🤔 Feels Like</span>
                        <span class="value">${feelsLike} °F</span>
                    </div>
                    <div class="weather-item">
                        <span class="label">💧 Humidity</span>
                        <span class="value">${humidity}%</span>
                    </div>
                    <div class="weather-item">
                        <span class="label">💨 Wind Speed</span>
                        <span class="value">${windMph} mph</span>
                    </div>
                    <div class="weather-item">
                        <span class="label">🌧 Precipitation</span>
                        <span class="value">${precipitation} mm</span>
                    </div>
                </div>
            </div>
        `;

    } catch (error) {

        // Show error message
        output.innerHTML = "<p class='error'>Error retrieving data.</p>";
        console.log(error);
    }
}