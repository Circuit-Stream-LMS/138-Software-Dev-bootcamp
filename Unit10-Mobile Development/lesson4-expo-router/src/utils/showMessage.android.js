// PLATFORM-SPECIFIC FILE: Metro (the bundler) automatically picks
//   showMessage.android.js  on Android
//   showMessage.js          everywhere else (iOS)
// The import stays the same in every screen:  import { showMessage } from "../utils/showMessage"
// so the rest of the app never has to care which platform it is running on.

import { ToastAndroid } from "react-native";

export function showMessage(message) {
  ToastAndroid.show(message, ToastAndroid.SHORT);
}
