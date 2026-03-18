// Weather App Script (Assignment 10)
// Robin Kelley
// 3/18/2026



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

// Main function to get weather data
function getWeather() {

    let city = document.getElementById("cityInput").value;

    // Remove extra spaces
    city = city.trim();

    // Check for empty input
    if (city === "") {
        document.getElementById("output").innerHTML = "Please enter a city.";
        return;
    }

    // Step 1: Get coordinates
    let geoUrl = "https://geocoding-api.open-meteo.com/v1/search?name=" 
                + encodeURIComponent(city)  
                + "&count=1&language=en&format=json";

        // I added encodeURIComponent to ensure that the city name is properly formatted for the URL, especially if it contains spaces or special characters. I also included error handling for cases where the city is not found or weather data is unavailable.
        fetch(geoUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            // City not found
            if (!data.results || data.results.length === 0) {
                document.getElementById("output").innerHTML = "City not found.";
                return;
            }

            // Extract coordinates and city information. Using the first result from the geocoding API, which should be the most relevant match for the city name entered by the user. I also added checks to ensure that the necessary data is available before proceeding to fetch the weather information.
            let latitude = data.results[0].latitude;
            let longitude = data.results[0].longitude;
            let name = data.results[0].name;
            let country = data.results[0].country;

            // Step 2: Get weather (makes sure to use fahrenheit and mph for the units)
            let weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=" 
                + latitude 
                + "&longitude=" 
                + longitude 
                + "&current=temperature_2m,wind_speed_10m,relative_humidity_2m,weather_code"
                + "&temperature_unit=fahrenheit"
                + "&wind_speed_unit=mph";

            // Fetch weather data and display results. I added error handling to manage cases where the weather data might not be available, ensuring that the user receives clear feedback in such situations.
            return fetch(weatherUrl)
                .then(function(response) {
                    return response.json();
                })
                .then(function(weatherData) {

                    // Check for missing data
                    if (!weatherData.current) {
                        document.getElementById("output").innerHTML = "Weather data not available.";
                        return;
                    }

                    // Extract weather information
                    let temp = weatherData.current.temperature_2m;
                    let wind = weatherData.current.wind_speed_10m;
                    let humidity = weatherData.current.relative_humidity_2m;
                    let weatherCode = weatherData.current.weather_code;

                    // Display results(Formatted the output to be more user-friendly and added the weather description based on the weather code using the getWeatherText function).
                    document.getElementById("output").innerHTML =
                        "City: " + name + ", " + country + "<br>" +
                        "Temperature: " + temp + " °F<br>" +
                        "Humidity: " + humidity + " %<br>" +
                        "Wind Speed: " + wind + " mph<br>" +
                        "Weather: " + getWeatherText(weatherCode);
                });
        })
        .catch(function(error) {
            document.getElementById("output").innerHTML = "Error retrieving data.";
            console.log(error);
        });
}