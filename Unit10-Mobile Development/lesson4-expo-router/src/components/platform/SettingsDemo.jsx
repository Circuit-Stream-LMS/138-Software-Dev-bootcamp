// ============================================================================
// SECTION 2 - iOS SPECIFICS  |  Settings (persistent data)
// ============================================================================
// Settings is a thin wrapper around iOS "NSUserDefaults": a tiny key-value store
// that SURVIVES closing the app. Perfect for small things like a favourite drink,
// or "has the user seen the intro?".
//
// Settings.get(key)        -> read a value (synchronous - no await needed)
// Settings.set({ key: v }) -> write one or more values
//
// Only for small, simple values (strings, numbers, booleans).
// It is iOS only. 

import { useState } from "react";
import { Settings, StyleSheet, Text, View } from "react-native";
import AppButton from "../AppButton";
import { useTheme } from "../../context/ThemeContext";

const STORAGE_KEY = "favouriteDrink";

export default function SettingsDemo() {
  const { theme } = useTheme();

  // useState with a FUNCTION ("lazy initial state"): React calls it only on the
  // first render, so we read from storage once instead of on every render.
  // `||` gives us a default when nothing has been saved yet.
  const [favourite, setFavourite] = useState(
    () => Settings.get(STORAGE_KEY) || "None saved yet"
  );

  const save = (drink) => {
    Settings.set({ [STORAGE_KEY]: drink }); // 1. save it permanently
    setFavourite(drink); //                    2. update the screen
  };

  const clear = () => {
    // We store an empty string to "clear" the value. (Settings.set cannot store null.)
    Settings.set({ [STORAGE_KEY]: "" });
    setFavourite("None saved yet");
  };

  return (
    <>
      <Text style={[styles.result, { color: theme.text }]}>
        Favourite drink: {favourite}
      </Text>

      <View style={styles.buttonRow}>
        <View style={styles.flex}>
          <AppButton title="☕ Coffee" variant="secondary" onPress={() => save("Coffee")} />
        </View>
        <View style={styles.flex}>
          <AppButton title="🍵 Tea" variant="secondary" onPress={() => save("Tea")} />
        </View>
      </View>
      <AppButton title="Clear" variant="secondary" onPress={clear} />

      <Text style={[styles.hint, { color: theme.textSecondary }]}>
        Try it: pick a drink, then fully close and reopen the app. It is still here!
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  result: { fontSize: 16 },
  buttonRow: { flexDirection: "row", gap: 10 },
  flex: { flex: 1 },
  hint: { fontSize: 13 },
});
