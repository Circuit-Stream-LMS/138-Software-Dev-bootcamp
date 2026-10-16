// ============================================================================
// SECTION 4 - HOOKS IN REACT NATIVE  |  File: src/app/(tabs)/hooks.jsx
// ============================================================================
// React Native ships with hooks that tell us about the device. Each one makes
// our component RE-RENDER automatically when the value changes.
//
//   useColorScheme()      -> is the device in light or dark mode?
//   useWindowDimensions() -> how big is the window right now?
//   useDeviceOrientation()-> portrait or landscape? (from @react-native-community/hooks)

import { ScrollView, StyleSheet, Text, View, useColorScheme, useWindowDimensions } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import AppButton from "../../components/AppButton";
import DemoCard from "../../components/DemoCard";
import { useTheme } from "../../context/ThemeContext";

export default function HooksScreen() {
  // Our own hook from Lesson 3: the current colours + the toggle function.
  const { theme, isDark, toggleTheme } = useTheme();

  // 1. useColorScheme - "light", "dark" (or "unspecified" on some platforms).
  //    Change your phone's appearance in Settings and watch this text update live.
  //    (Our ThemeProvider also uses it, to decide which theme to START with.)
  const colorScheme = useColorScheme();

  // 2. useWindowDimensions - the size of the app window, in density-independent pixels.
  //    It UPDATES when the user rotates the phone, resizes a window on iPad, or splits the screen.
  //    Prefer it over Dimensions.get("window"), which gives a one-time snapshot that goes stale.
  const { width, height, scale, fontScale } = useWindowDimensions();

  // 3. useDeviceOrientation - returns the STRING "portrait" or "landscape".
  //    (It returns a plain string, not an object, so there is nothing to destructure.)
  //    Under the hood it simply compares the window width and height from the hook above.
  //    To allow rotation, app.json must contain  "orientation": "default".
  const orientation = useDeviceOrientation();


  return (
    <ScrollView
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic"
    >
      <DemoCard
        title="useColorScheme"
        description="The device's setting. Change your phone's appearance to see this value update live."
      >
        <Text style={[styles.value, { color: theme.text }]}>
          Device scheme: {colorScheme}
        </Text>
        <Text style={[styles.small, { color: theme.textSecondary }]}>
          App theme right now: {isDark ? "dark" : "light"}. The device setting only
          picks the starting theme. After that, the button below (our useTheme hook
          from Lesson 3) is in charge.
        </Text>
        <AppButton title="Toggle Theme" onPress={toggleTheme} />
      </DemoCard>

      <DemoCard
        title="useWindowDimensions"
        description="The window size. Rotate your device and watch the numbers - and the grid - change."
      >
        <Text style={[styles.value, { color: theme.text }]}>
          Width: {Math.round(width)} · Height: {Math.round(height)}
        </Text>
        <Text style={[styles.small, { color: theme.textSecondary }]}>
          Pixel density (scale): {scale} · Font scale: {fontScale}
        </Text>

      </DemoCard>

      <DemoCard
        title="useDeviceOrientation"
        description="Portrait or landscape? Turn your device sideways."
      >
        <Text style={[styles.value, { color: theme.text }]}>
          Orientation: {orientation}
        </Text>
      </DemoCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  value: { fontSize: 17, fontWeight: "600" },
  small: { fontSize: 13 },
  box: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
