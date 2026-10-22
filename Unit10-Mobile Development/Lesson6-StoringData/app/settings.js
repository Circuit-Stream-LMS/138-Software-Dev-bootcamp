// app/settings.js - settings, account and a look at what is stored on the device.

import { useState } from 'react';
import { ScrollView, View, Text, Pressable, Button, Alert, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useSettings } from '../context/SettingsContext';
import StorageInspector from '../components/StorageInspector';
import { clearWeatherCache } from '../services/weatherCache';
import { CITIES } from '../utils/weather';

export default function SettingsScreen() {
  const { logout } = useAuth();
  const { settings, updateSettings } = useSettings();
  // Changing this number tells the inspector to read the cache folder again
  const [refreshKey, setRefreshKey] = useState(0);

  function handleClearCache() {
    try {
      clearWeatherCache();
    } catch (err) {
      Alert.alert('Could not clear the cache', err.message);
    }
    setRefreshKey((current) => current + 1);
  }

  function handleLogout() {
    // Ask first: logging out is hard to undo by accident
    Alert.alert('Log out?', 'Your saved login will be removed from this device.', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Log out', style: 'destructive', onPress: logout },
    ]);
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content]}
    >
      {/* ---- Settings: saved with AsyncStorage every time you tap ---- */}
      <View style={styles.card}>
        <Text style={styles.heading}>City</Text>
        {CITIES.map((city) => {
          const selected = city.id === settings.cityId;
          return (
            <Pressable
              key={city.id}
              onPress={() => updateSettings({ cityId: city.id })}
              style={[styles.row, selected && styles.rowSelected]}
            >
              <Text style={styles.rowText}>{city.name}</Text>
              {selected ? <Text>✓</Text> : null}
            </Pressable>
          );
        })}

        <Text style={[styles.heading, styles.spaced]}>Temperature unit</Text>
        <View style={styles.segment}>
          {['celsius', 'fahrenheit'].map((unit) => (
            <Pressable
              key={unit}
              onPress={() => updateSettings({ unit })}
              style={[styles.segmentButton, settings.unit === unit && styles.segmentSelected]}
            >
              <Text style={styles.rowText}>{unit === 'celsius' ? '°C' : '°F'}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* ---- Account: logging out deletes the token from SecureStore ---- */}
      <View style={styles.card}>
        <Text style={styles.heading}>Account</Text>
        <Button title="Log out" color="#c0392b" onPress={handleLogout} />
      </View>

      {/* ---- What is stored on this device ---- */}
      <View style={styles.card}>
        <Text style={styles.heading}>Stored on this device</Text>
        <StorageInspector refreshKey={refreshKey} />
        <View style={styles.spaced}>
          <Button title="Clear weather cache" onPress={handleClearCache} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  content: { padding: 16, gap: 16 },
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  heading: { fontSize: 16, fontWeight: '700', color: '#222', marginBottom: 8 },
  spaced: { marginTop: 16 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  rowSelected: { backgroundColor: '#e6f0ff' },
  rowText: { fontSize: 15, color: '#222' },
  segment: { flexDirection: 'row', gap: 8 },
  segmentButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  segmentSelected: { backgroundColor: '#cfe0ff' },
});
