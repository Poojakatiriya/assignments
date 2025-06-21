const apiKey = '472fecc858c39b37850f74346b67af17'; 

async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const weatherDiv = document.getElementById('weather');
  const errorMsg = document.getElementById('error');

  async function getForecast(city) {
  const forecastDiv = document.getElementById('forecast');
  const forecastContainer = document.getElementById('forecastContainer');

  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    const forecastList = data.list;
    const dailyForecast = {};

    forecastList.forEach(item => {
      const date = item.dt_txt.split(" ")[0];
      const time = item.dt_txt.split(" ")[1];

      // Choose the forecast for around 12:00 PM
      if (time === "12:00:00" && !dailyForecast[date]) {
        dailyForecast[date] = item;
      }
    });

    forecastContainer.innerHTML = '';

    Object.keys(dailyForecast).slice(0, 5).forEach(date => {
      const dayData = dailyForecast[date];
      const day = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });

      const icon = `https://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`;
      const temp = Math.round(dayData.main.temp);
      const condition = dayData.weather[0].main;

      const dayCard = `
        <div class="forecast-day">
          <h4>${day}</h4>
          <img src="${icon}" alt="${condition}" />
          <p>${temp}°C</p>
          <p>${condition}</p>
        </div>
      `;

      forecastContainer.innerHTML += dayCard;
    });

    forecastDiv.classList.remove('hidden');
  } catch (error) {
    console.error('Forecast error:', error);
    forecastDiv.classList.add('hidden');
  }
}


  if (!city) return;

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    
    if (!response.ok) throw new Error('City not found');

    const data = await response.json();

    document.getElementById('cityName').innerText = data.name;
    document.getElementById('temperature').innerText = data.main.temp;
    document.getElementById('condition').innerText = data.weather[0].main;
    document.getElementById('humidity').innerText = data.main.humidity;
    document.getElementById('wind').innerText = data.wind.speed;
    document.getElementById('weatherIcon').src =
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherDiv.classList.remove('hidden');
    errorMsg.classList.add('hidden');
    getForecast(city);

  } catch (error) {
    weatherDiv.classList.add('hidden');
    errorMsg.classList.remove('hidden');
    
  }
}
