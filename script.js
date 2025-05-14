const apiKey = '51b80bf6a919175700baa99c470c3a60'; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const weatherResult = document.getElementById('weatherResult');

  if (!city) {
    weatherResult.innerHTML = 'Please enter a city name.';
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) throw new Error('City not found');

    const data = await response.json();

    const weatherHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Condition:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;

    weatherResult.innerHTML = weatherHTML;
  } catch (error) {
    weatherResult.innerHTML = 'Error fetching weather data. Try a valid city.';
  }
}
