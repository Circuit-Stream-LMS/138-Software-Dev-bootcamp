# Lesson 6 – Storing Data on the Device (Weather Pocket)

## What you will learn

- Why apps store data on the device, and the main use cases: **tokens, settings, cached data**
- How **SecureStore**, **AsyncStorage** and **expo-file-system** work, and how to choose between them
- How **iOS and Android** differ when storing data
- The patterns real apps use: auto-login, cache-first loading, safe defaults, clean logout
- How to find your way around the Expo documentation

---

## 1. Run the app

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go, or press `a` (Android emulator) / `i` (iOS simulator).


---

## 2. Which storage for which job?

| | SecureStore | AsyncStorage | expo-file-system |
|---|---|---|---|
| **Stores** | Key → string | Key → string | Real files and folders |
| **Encrypted?** | ✅ Yes | ❌ No | ❌ No |
| **Best for** | Tokens, keys, passwords | Settings, small values | Larger or file-like data: JSON, images, downloads |
| **Size** | Very small values only | Small to medium | Large |
| **Objects** | `JSON.stringify` / `JSON.parse` | `JSON.stringify` / `JSON.parse` | Write text or bytes |
| **Package** | `expo-secure-store` | `@react-native-async-storage/async-storage` | `expo-file-system` |

**Rule of thumb:** if leaking it would be a problem → SecureStore. Small, harmless values → AsyncStorage. Anything big, or that you can download again → files.


---

## 4. The three storages in this app

### SecureStore: the login token (`services/tokenStorage.js`)

```js
import * as SecureStore from 'expo-secure-store';

await SecureStore.setItemAsync('authToken', token);          // save
const token = await SecureStore.getItemAsync('authToken');   // read (string, or null)
await SecureStore.deleteItemAsync('authToken');              // delete
```

The token proves who you are, so it must not be readable by anyone who finds the data. The **password is never stored**, only exchanged for a token.

### AsyncStorage: settings (`services/settingsStorage.js`)

```js
import AsyncStorage from '@react-native-async-storage/async-storage';

await AsyncStorage.setItem('settings', JSON.stringify({ cityId: 'tokyo', unit: 'celsius' }));
const json = await AsyncStorage.getItem('settings');         // a string, or null
const settings = json ? JSON.parse(json) : null;
await AsyncStorage.removeItem('settings');
```

Values must be **strings**, so objects go through `JSON.stringify` and `JSON.parse`.

### expo-file-system: the weather cache (`services/weatherCache.js`)

```js
import { Directory, File, Paths } from 'expo-file-system';

const folder = new Directory(Paths.cache, 'weather');   // only a pointer, nothing exists yet
folder.create({ idempotent: true });                     // create it (no error if it exists)

const file = new File(folder, 'ottawa.json');
file.create({ overwrite: true });                        // create an empty file
file.write(JSON.stringify({ temperature: 4 }));          // write text
const data = JSON.parse(await file.text());              // read it back
file.delete();                                           // delete one file
folder.delete();                                         // delete a folder and everything in it
```

---


## 5. iOS vs Android

The same code runs on both, but the operating systems store data differently.

| | iOS | Android |
|---|---|---|
| **SecureStore uses** | The **Keychain** | **Keystore**-encrypted storage |
| **After uninstalling the app** | The token **can still be there** after reinstalling (same bundle ID) | The token is **removed** |
| **`keychainAccessible` option** | ✅ Works. We use `WHEN_UNLOCKED_THIS_DEVICE_ONLY` | ❌ Ignored |
| **Biometrics (`requireAuthentication`)** | Prompts when **reading or updating** a value | Prompts on **every** operation |
| **File paths** | Different folder layout | Different folder layout |


---

## 7. Project structure

```
Lesson7-StoringData/
├── app/                            # Expo Router: every file here is a screen
│   ├── _layout.js                  # Providers, loading state, login gate
│   ├── login.js                    # Login form
│   ├── index.js                    # Home: the weather
│   └── settings.js                 # City, unit, logout, storage inspector
├── context/
│   ├── AuthContext.js              # Login state: token, login(), logout()
│   └── SettingsContext.js          # Settings state: settings, updateSettings()
├── hooks/
│   └── useWeather.js               # Cache-first loading of the weather
├── services/                       # The only files that touch storage or the network
│   ├── tokenStorage.js             # SecureStore
│   ├── settingsStorage.js          # AsyncStorage
│   ├── weatherCache.js             # expo-file-system
│   ├── weatherApi.js               # fetch from Open-Meteo
│   └── authApi.js                  # Pretend login server
├── components/
│   ├── WeatherCard.jsx             # Shows the weather
│   ├── StorageInspector.jsx        # Learning tool: what is stored, and where
│   └── StatusMessage.jsx           # Spinner / error message
└── utils/
    └── weather.js                  # Cities, unit conversion, weather codes
```


## 8. Explore the documentation

Reading documentation is part of the job. Use these pages to answer the questions below:

- [Store data – Expo documentation](https://docs.expo.dev/develop/user-interface/store-data/) – overview of all the options
- [SecureStore – Expo documentation](https://docs.expo.dev/versions/latest/sdk/securestore/)
- [FileSystem – Expo documentation](https://docs.expo.dev/versions/latest/sdk/filesystem/)
- [AsyncStorage on GitHub](https://github.com/react-native-async-storage/async-storage)


---


## 10. Publishing your app: EAS, the App Store and Google Play

So far the app runs inside **Expo Go**, which is for development. To put an app in the stores, you build a real app file and upload it. Expo provides a service for this called **EAS (Expo Application Services)**.

| EAS service | What it does |
|-------------|--------------|
| **EAS Build** | Builds your app in the cloud and produces the files the stores need (`.aab` for Android, `.ipa` for iOS). You do **not** need a Mac to build for iOS. |
| **EAS Submit** | Uploads a finished build to Google Play and App Store Connect from the command line |
| **EAS Update** | Sends small JavaScript-only fixes to users **without** a new store release |
| **EAS Workflows** | Runs build and submit automatically, for example on every push to `main` |
| **EAS Metadata** | Manages your Apple App Store listing text from a file (iOS only) |


### What you need before you start

| | Apple App Store | Google Play |
|---|---|---|
| **Developer account** | Apple Developer Program, **US$99 per year** | Play Console, **US$25 one time** |
| **File you upload** | `.ipa` | `.aab` (Android App Bundle) |
| **Test channel** | TestFlight | Internal / closed testing tracks |
| **Review** | App Review | Google review (can take up to several days) |


