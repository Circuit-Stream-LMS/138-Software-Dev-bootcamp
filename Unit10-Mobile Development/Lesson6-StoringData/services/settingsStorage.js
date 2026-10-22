// USE CASE 2 - SETTINGS AND PREFERENCES  ->  AsyncStorage
//
// Small values that are not secret: the chosen city and unit, AsyncStorage keeps STRINGS under a key, so objects are converted
// with JSON.stringify (saving) and JSON.parse (reading). It is not encrypted.
//
// Docs: https://github.com/react-native-async-storage/async-storage

import AsyncStorage from '@react-native-async-storage/async-storage';

const SETTINGS_KEY = 'settings';
const USERNAME_KEY = 'lastUsername';
const LAUNCHED_KEY = 'hasLaunchedBefore';

// What the user gets the first time they open the app
export const DEFAULT_SETTINGS = { cityId: 'ottawa', unit: 'celsius' };

export async function loadSettings() {
  try {
    const json = await AsyncStorage.getItem(SETTINGS_KEY); // a string, or null
    return { ...DEFAULT_SETTINGS, ...(json ? JSON.parse(json) : {}) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export async function saveSettings(settings) {
  await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

// The PASSWORD is never stored anywhere.
export async function loadLastUsername() {
  return AsyncStorage.getItem(USERNAME_KEY);
}

export async function saveLastUsername(username) {
  await AsyncStorage.setItem(USERNAME_KEY, username);
}

// Is this the very first time the app runs after being installed?
//
// Why we need this: when an app is uninstalled, AsyncStorage is deleted on
// BOTH platforms. But on iOS the Keychain (SecureStore) can survive an
// uninstall, so an old login token may still be there after a reinstall.
// (Expo's docs say this is not guaranteed either way, so never rely on it.)
// The app uses this flag to detect a fresh install and delete such a leftover token.
export async function isFirstLaunch() {
  const alreadyLaunched = await AsyncStorage.getItem(LAUNCHED_KEY);
  if (alreadyLaunched) return false;

  await AsyncStorage.setItem(LAUNCHED_KEY, 'true');
  return true;
}
