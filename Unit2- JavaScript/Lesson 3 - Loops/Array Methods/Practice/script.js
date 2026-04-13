// Practice array
const temperatures = [72, 68, 75, 79, 85, 91, 73, 77, 69, 82];

// TODO 1: Use forEach to log each temperature in Fahrenheit and its Celsius equivalent
temperatures.forEach(temp => {
    const celsius = (temp - 32) * 5/9;
    console.log(`Temp: ${temp}°F, Celsius: ${celsius.toFixed(0)}°C`);
});


// TODO 2: Use map to create a new array where each temperature is increased by 5 degrees
const increasedTemperatures = temperatures.map(temp => temp + 5);
console.log(increasedTemperatures);

// TODO 3: Use filter to create a new array with temperatures above 80°F
const highTemperatures = temperatures.filter(temp => temp > 80);
console.log(highTemperatures);

// TODO 4: Use reduce to find the average temperature
const averageTemperature = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length
console.log(averageTemperature);

// Additional Practice Examples

// TODO 5: Use map to convert the temperatures to strings (e.g., "Temp: 72°F")


// TODO 6: Use filter to get temperatures that are below 70°F


// TODO 7: Use forEach to log if each temperature is considered "Hot" (above 85°F) or "Cool" (85°F and below)

