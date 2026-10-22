// USE CASE 1 - AUTHENTICATION TOKEN  ->  SecureStore
//
// The token proves who the user is, so anyone who steals it can act as that
// user. It must be encrypted: that is exactly what SecureStore does.
//
//  - iOS:     stored in the Keychain.
//  - Android: encrypted with the Android Keystore.
//
// Docs: https://docs.expo.dev/versions/latest/sdk/securestore/

import * as SecureStore from 'expo-secure-store';

// Keys may only contain letters, numbers, ".", "-" and "_".
// Keep values SMALL (tokens, keys): the operating system can reject large ones.
const TOKEN_KEY = 'authToken';

export async function saveToken(token) {
  await SecureStore.setItemAsync(TOKEN_KEY, token, {
    // iOS ONLY (Android ignores it): the token can only be read while the phone
    // is unlocked, and it is never copied to another device through a backup.
    keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
  });
}

// Returns the token, or null if the user is not logged in
export async function getToken() {
  return SecureStore.getItemAsync(TOKEN_KEY);
}

export async function deleteToken() {
  await SecureStore.deleteItemAsync(TOKEN_KEY);
}
