const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const spinner = document.getElementById("spinner");
const cityElem = document.getElementById("city");
const tempElem = document.getElementById("temp");
const descElem = document.getElementById("desc");

// Replace YOUR_API_KEY with OpenWeatherMap API key
const API_KEY ="4efb9e77dc95d60d5d31682c350e052b";

async function getWeather(city) {
  try {
    spinner.style.display = "block"; // show spinner
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if(!response.ok) throw new Error("City not found");
    const data = await response.json();
    displayWeather(data);
  } catch (err) {
    alert(err.message);
  } finally {
    spinner.style.display = "none"; // hide spinner
  }
}

function displayWeather(data) {
  cityElem.textContent = `City: ${data.name}`;
  tempElem.textContent = `Temperature: ${data.main.temp}°C`;
  descElem.textContent = `Weather: ${data.weather[0].description}`;
}

getWeatherBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if(city) getWeather(city);
});
