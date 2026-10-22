// components/WeatherCard.jsx
//
// Shows the current weather. It only displays what it receives through props.
// The unit setting is applied HERE, at display time.

import { View, Text, StyleSheet } from 'react-native';
import { describeWeather, formatTemperature } from '../utils/weather';

export default function WeatherCard({ cityName, weather, unit }) {
  const { label, emoji } = describeWeather(weather.weatherCode);

  return (
    <View style={styles.card}>
      <Text style={styles.city}>{cityName}</Text>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.temperature}>{formatTemperature(weather.temperature, unit)}</Text>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.details}>
        <Text style={styles.detail}>Feels like {formatTemperature(weather.feelsLike, unit)}</Text>
        <Text style={styles.detail}>Wind {Math.round(weather.windSpeed)} km/h</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 24,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  city: { fontSize: 22, fontWeight: '700', color: '#222' },
  emoji: { fontSize: 72, marginVertical: 8 },
  temperature: { fontSize: 56, fontWeight: '700', color: '#222' },
  label: { fontSize: 18, color: '#555', marginTop: 4 },
  details: { flexDirection: 'row', gap: 24, marginTop: 16 },
  detail: { fontSize: 14, color: '#666' },
});
