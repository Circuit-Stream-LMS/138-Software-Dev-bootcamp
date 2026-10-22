
// Gets the current weather from Open-Meteo (https://open-meteo.com).
// It is free and needs no account or API key.
// This is the data that the app CACHES on the device (see weatherCache.js).

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export async function getCurrentWeather(city) {
  const url =
    `${BASE_URL}?latitude=${city.latitude}&longitude=${city.longitude}` +
    '&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m';

  let response;
  try {
    response = await fetch(url);
  } catch {
    throw new Error('Could not reach the weather service. Are you offline?');
  }

  // fetch() does not throw on HTTP errors, so we check response.ok ourselves
  if (!response.ok) {
    throw new Error(`The weather service returned an error (${response.status}).`);
  }

  const data = await response.json();

  return {
    temperature: data.current.temperature_2m,
    feelsLike: data.current.apparent_temperature,
    windSpeed: data.current.wind_speed_10m,
    weatherCode: data.current.weather_code,
  };
}
