// components/StorageInspector.jsx
//
// A LEARNING TOOL: shows what this app has stored on the device, and WHERE.
// Real apps do not have this screen. It helps you see the three kinds of
// storage working together.

import { useEffect, useState } from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useSettings } from '../context/SettingsContext';
import { listCachedFiles } from '../services/weatherCache';

// refreshKey: when this number changes, the file list is read again
export default function StorageInspector({ refreshKey }) {
  const { token } = useAuth();
  const { settings } = useSettings();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    try {
      setFiles(listCachedFiles());
    } catch {
      setFiles([]);
    }
  }, [refreshKey, settings]); // settings changes can lead to a new cache file

  return (
    <View style={styles.container}>
      <Text style={styles.title}>1. Login token</Text>
      {/* Platform.OS tells us which operating system the app is running on */}
      <Text style={styles.where}>
        SecureStore - {Platform.OS === 'ios' ? 'iOS Keychain' : 'Android Keystore'} (encrypted)
      </Text>
      {/* Never show a full token on screen */}
      <Text style={styles.value}>{token ? `${token.slice(0, 10)}••••••••` : '(none)'}</Text>

      <Text style={styles.title}>2. Settings</Text>
      <Text style={styles.where}>AsyncStorage - plain text</Text>
      <Text style={styles.value}>{JSON.stringify(settings)}</Text>

      <Text style={styles.title}>3. Weather cache</Text>
      <Text style={styles.where}>expo-file-system - Paths.cache/weather/</Text>
      {files.length === 0 ? (
        <Text style={styles.value}>(empty)</Text>
      ) : (
        files.map((file) => (
          <Text key={file.name} style={styles.value}>
            {file.name} ({file.size} bytes)
          </Text>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 2 },
  title: { marginTop: 10, fontSize: 14, fontWeight: '700', color: '#222' },
  where: { fontSize: 12, color: '#007bff' },
  value: { fontSize: 12, color: '#444' },
});
