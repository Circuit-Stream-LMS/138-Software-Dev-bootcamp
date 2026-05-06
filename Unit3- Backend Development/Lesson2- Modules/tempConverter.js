// Temperature Converter Module
// Functions to convert between Celsius, Fahrenheit, and Kelvin

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  kelvinToCelsius,
  celsiusToKelvin,
};
