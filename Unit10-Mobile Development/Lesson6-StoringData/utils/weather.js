// The cities the user can choose in Settings.
// We keep the latitude/longitude because the weather service asks for coordinates.
export const CITIES = [
  { id: 'ottawa', name: 'Ottawa', latitude: 45.42, longitude: -75.69 },
  { id: 'toronto', name: 'Toronto', latitude: 43.65, longitude: -79.38 },
  { id: 'vancouver', name: 'Vancouver', latitude: 49.28, longitude: -123.12 },
  { id: 'london', name: 'London', latitude: 51.51, longitude: -0.13 },
  { id: 'tokyo', name: 'Tokyo', latitude: 35.68, longitude: 139.69 },
];

// Find a city by its id. If the saved id is unknown (for example a city we
// removed in an app update), fall back to the first city instead of crashing.
export function findCity(id) {
  return CITIES.find((city) => city.id === id) ?? CITIES[0];
}

// The weather service always gives us °C. We convert only when we DISPLAY it,
export function formatTemperature(celsius, unit) {
  if (unit === 'fahrenheit') {
    return `${Math.round((celsius * 9) / 5 + 32)}°F`;
  }
  return `${Math.round(celsius)}°C`;
}

// The service describes the weather with a number (a "WMO weather code").
// This turns it into text and an emoji.
export function describeWeather(code) {
  if (code === 0) return { label: 'Clear sky', emoji: '☀️' };
  if (code <= 2) return { label: 'Partly cloudy', emoji: '⛅' };
  if (code === 3) return { label: 'Overcast', emoji: '☁️' };
  if (code === 45 || code === 48) return { label: 'Fog', emoji: '🌫️' };
  if (code >= 51 && code <= 57) return { label: 'Drizzle', emoji: '🌦️' };
  if (code >= 61 && code <= 67) return { label: 'Rain', emoji: '🌧️' };
  if (code >= 71 && code <= 77) return { label: 'Snow', emoji: '❄️' };
  if (code >= 80 && code <= 82) return { label: 'Rain showers', emoji: '🌦️' };
  if (code === 85 || code === 86) return { label: 'Snow showers', emoji: '🌨️' };
  if (code >= 95) return { label: 'Thunderstorm', emoji: '⛈️' };
  return { label: 'Unknown', emoji: '🌡️' };
}

// "2026-10-21T14:32:00.000Z" -> "2:32 PM" (in the user's own time zone)
export function formatTime(isoString) {
  return new Date(isoString).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}
