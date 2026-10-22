

import { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { loadLastUsername } from '../services/settingsStorage';

export default function LoginScreen() {
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Pre-fill the username that was used last time
  useEffect(() => {
    async function prefill() {
      const lastUsername = await loadLastUsername();
      if (lastUsername) setUsername(lastUsername);
    }
    prefill();
  }, []);

  async function handleLogin() {
    setSubmitting(true);
    setError(null);
    try {
      await login(username, password);
      // Success: this screen disappears, so there is nothing more to do here
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content]}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.logo}>⛅</Text>
      <Text style={styles.title}>Weather Pocket</Text>
      <Text style={styles.hint}>Any username and a password of 4+ characters will work.</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry // shows dots instead of the characters
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Button
        title={submitting ? 'Logging in...' : 'Log in'}
        onPress={handleLogin}
        disabled={submitting}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  content: { paddingHorizontal: 24, paddingBottom: 200, gap: 12 },
  logo: { fontSize: 64, textAlign: 'center' },
  title: { fontSize: 28, fontWeight: '700', textAlign: 'center', color: '#222' },
  hint: { fontSize: 13, textAlign: 'center', color: '#666', marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },
  error: { color: '#c0392b', textAlign: 'center' },
});
