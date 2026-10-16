// The fallback used on iOS (see showMessage.android.js for the Android version).
// iOS has no toast, so we use an Alert instead.
//


import { Alert } from "react-native";

export function showMessage(message) {
  Alert.alert(message);
}
