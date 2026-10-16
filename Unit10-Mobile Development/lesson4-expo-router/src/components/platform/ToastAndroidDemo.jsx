// ============================================================================
// SECTION 3 - ANDROID SPECIFICS  |  ToastAndroid
// ============================================================================
// A "toast" is a small message that appears for a moment and disappears by itself.
// ToastAndroid is built into React Native, but it ONLY exists on Android.

import { ToastAndroid } from "react-native";
import AppButton from "../AppButton";

export default function ToastAndroidDemo() {
  return (
    <>
      <AppButton
        title="Show a short toast"
        // ToastAndroid.SHORT stays about 2 seconds, ToastAndroid.LONG about 3.5.
        onPress={() => ToastAndroid.show("Added to your order 🛒", ToastAndroid.SHORT)}
      />
      <AppButton
        title="Show a long toast"
        variant="secondary"
        onPress={() =>
          ToastAndroid.show("Your order will be ready in 15 minutes", ToastAndroid.LONG)
        }
      />
    </>
  );
}
