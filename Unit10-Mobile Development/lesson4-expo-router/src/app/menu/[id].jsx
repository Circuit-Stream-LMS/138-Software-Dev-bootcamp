// ============================================================================
// SECTION 1 - ROUTER  |  File: src/app/menu/[id].jsx  (a DYNAMIC route)
// ============================================================================
// [id] in the file name is a placeholder. One file handles many URLs:
//     /menu/1   /menu/2   /menu/3 ...
// Whatever is in the URL is available to us as a "route parameter".

import { StyleSheet, Text, View } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import AppButton from "../../components/AppButton";
import { MENU_ITEMS } from "../../data/menu";
import { useTheme } from "../../context/ThemeContext";

export default function MenuItemScreen() {
  // Read the [id] part of the URL. Params always arrive as STRINGS.
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { theme } = useTheme();

  const item = MENU_ITEMS.find((menuItem) => menuItem.id === id);

  // Going back: if there is a screen to go back to, pop it.
  // If the app was opened directly on this URL (a deep link) there is no history,
  // so we replace this screen with the menu instead of doing nothing.
  const goBackToMenu = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  // if no item 
  if (!item) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Stack.Screen options={{ title: "Not found" }} />
        <Text style={[styles.title, { color: theme.text }]}>
          We could not find item "{id}"
        </Text>
        <AppButton title="Back to menu" onPress={goBackToMenu} />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* <Stack.Screen> placed INSIDE a screen changes that screen's header options.
          This lets the title depend on data (the item's name). */}
      <Stack.Screen options={{ title: item.name }} />

      <Text style={styles.emoji}>{item.emoji}</Text>
      <Text style={[styles.title, { color: theme.text }]}>{item.name}</Text>
      <Text style={[styles.price, { color: theme.button }]}>
        ${item.price.toFixed(2)}
      </Text>
      <Text style={[styles.description, { color: theme.textSecondary }]}>
        {item.description}
      </Text>

      <AppButton title="Back to menu" variant="secondary" onPress={goBackToMenu} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    gap: 12,
  },
  emoji: { fontSize: 72, marginTop: 24 },
  title: { fontSize: 26, fontWeight: "700", textAlign: "center" },
  price: { fontSize: 22, fontWeight: "600" },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 12,
  },
});
