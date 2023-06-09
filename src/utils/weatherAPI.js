const keyAPI = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export async function getCoordinates(city) {
  try {
    const request = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city.searchCity}&limit=1&appid=${keyAPI}`
    );
    const response = await request.json();
    return response[0];
  } catch (error) {
    console.log(error);
  }
}

export async function getWeather(coordinates) {
  try {
    const request = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&lang=ru&units=metric&appid=${keyAPI}`
    );
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}
