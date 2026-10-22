// app/index.js - the home screen: the weather for the city chosen in Settings.
//

import { ScrollView, View, Text, Pressable, Button, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSettings } from '../context/SettingsContext';
import useWeather from '../hooks/useWeather';
import WeatherCard from '../components/WeatherCard';
import StatusMessage from '../components/StatusMessage';
import { findCity, formatTime } from '../utils/weather';

export default function HomeScreen() {
  const router = useRouter();
  const { settings } = useSettings();
  const city = findCity(settings.cityId);

  const { weather, savedAt, fromCache, loading, error, refresh } = useWeather(city);

  // The header button that opens the settings screen
  const settingsButton = (
    <Pressable onPress={() => router.push('/settings')} hitSlop={12}>
      <Text style={styles.headerButton}>⚙️</Text>
    </Pressable>
  );

  // Nothing saved yet and still waiting for the network
  if (loading && !weather) {
    return (
      <>
        <Stack.Screen options={{ title: city.name, headerRight: () => settingsButton }} />
        <StatusMessage loading message="Loading weather..." />
      </>
    );
  }

  // Nothing saved AND the network failed: there is nothing to show
  if (error && !weather) {
    return (
      <>
        <Stack.Screen options={{ title: city.name, headerRight: () => settingsButton }} />
        <StatusMessage message={error} buttonLabel="Try again" onPress={refresh} />
      </>
    );
  }

  // The line under the card tells the user how fresh the data is
  let statusText;
  if (loading) {
    statusText = fromCache ? `Saved data from ${formatTime(savedAt)} - updating...` : 'Updating...';
  } else if (error) {
    statusText = `📴 ${error}\nShowing data saved at ${formatTime(savedAt)}.`;
  } else {
    statusText = `Updated at ${formatTime(savedAt)}`;
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content]}
    >
      <Stack.Screen options={{ title: city.name, headerRight: () => settingsButton }} />

      <WeatherCard cityName={city.name} weather={weather} unit={settings.unit} />

      <Text style={[styles.status, error && styles.statusError]}>{statusText}</Text>
      <Button title="Refresh" onPress={refresh} disabled={loading} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  content: { padding: 16, gap: 16 },
  status: { textAlign: 'center', fontSize: 13, color: '#666' },
  statusError: { color: '#c0392b' },
  headerButton: { fontSize: 22 },
});
