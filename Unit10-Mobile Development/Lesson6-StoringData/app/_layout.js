// The root of the app. With Expo Router every file inside "app/" is a screen:
//
//   app/index.js     ->  the weather (home)
//   app/settings.js  ->  the settings
//   app/login.js     ->  the login form
//
// This file wraps them all

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { SettingsProvider, useSettings } from '../context/SettingsContext';
import StatusMessage from '../components/StatusMessage';

function RootNavigator() {
  const { token, loading: authLoading } = useAuth();
  const { loading: settingsLoading } = useSettings();

  // Reading from the device takes a moment.
  if (authLoading || settingsLoading) {
    return <StatusMessage loading message="Loading..." />;
  }

  const isLoggedIn = token !== null;

  return (
    <Stack>
      {/* Stack.Protected: these screens can ONLY be opened when guard is true.
          When the user logs in or out, Expo Router moves them to the right screen for you. */}
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="index" options={{ title: 'Weather' }} />
        <Stack.Screen name="settings" options={{ title: 'Settings' }} />
      </Stack.Protected>

      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="login" options={{ title: 'Log in', headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <SettingsProvider>
        <StatusBar style="auto" />
        <RootNavigator />
      </SettingsProvider>
    </AuthProvider>
  );
}
