// components/StatusMessage.jsx
//
// A centered message for moments when there is nothing else to show yet:
// loading, or an error. Optional extras: a spinner and a button.

import { View, Text, ActivityIndicator, Button, StyleSheet } from 'react-native';

export default function StatusMessage({ message, loading, buttonLabel, onPress }) {
  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size="large" /> : null}
      <Text style={styles.message}>{message}</Text>
      {buttonLabel ? <Button title={buttonLabel} onPress={onPress} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 12,
    backgroundColor: '#f9f9f9',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#444',
  },
});
