
// WEATHER API
   
    // Function to fetch weather data and update the weather display
    function fetchWeather(city, weatherDataElement) {
        const apiKey = 'da5dfef6d5d316797229f40f1e9667dc';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Venice&appid=da5dfef6d5d316797229f40f1e9667dc`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                // Update the weather data display for the specific slide
                weatherDataElement.innerHTML = `
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
            });
    }

    // Call the fetchWeather function for each slide
    const weatherData1 = document.getElementById('weather-data-1');
    const weatherData2 = document.getElementById('weather-data-2');
    const weatherData3 = document.getElementById('weather-data-3');

    fetchWeather('Venice', weatherData1); 
    fetchWeather('Phuket', weatherData2); 
    fetchWeather('Cebu', weatherData3); 


    
     
    
    
    
    
    
    
    
    