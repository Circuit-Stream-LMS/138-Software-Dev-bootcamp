// ============================================================================
// SECTION 1 - ROUTER  |  File: src/app/(tabs)/index.jsx  (tab 1: Menu)
// ============================================================================
// "index" is special: it is the screen shown at the folder's root URL ("/").

import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Link} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MENU_ITEMS } from "../../data/menu";
import { useTheme } from "../../context/ThemeContext";

export default function MenuScreen() {

  const { theme } = useTheme();

  return (
    <FlatList
      data={MENU_ITEMS}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      // Keeps content clear of the header / notch where the platform needs it.
      contentInsetAdjustmentBehavior="automatic"

      renderItem={({ item }) => (
        // 1. DECLARATIVE navigation: <Link> navigates when its child is pressed.
        //    `asChild` means "don't render your own element - hand the link
        //    behaviour to my child (the Pressable) instead".
        <Link
          href={{ pathname: "/menu/[id]", params: { id: item.id } }}
          asChild
        >
          {/* NOTE: inside <Link asChild> pass ONE plain style object. A style array is not handled reliably by Link,
          so we merge our styles with StyleSheet.flatten(). */}
          <Pressable
            accessibilityRole="link"
            android_ripple={{ color: theme.border }}
            style={StyleSheet.flatten([
              styles.row,
              { backgroundColor: theme.card, borderColor: theme.border },
            ])}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <View style={styles.rowText}>
              <Text style={[styles.name, { color: theme.text }]}>
                {item.name}
              </Text>
              <Text style={{ color: theme.textSecondary }}>
                {item.category} · ${item.price.toFixed(2)}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={theme.textSecondary}
            />
          </Pressable>
        </Link>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: 16, gap: 12 },
  header: { marginBottom: 4 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 14,
    borderWidth: 1,
    borderRadius: 14,
  },
  emoji: { fontSize: 32 },
  rowText: { flex: 1, gap: 2 },
  name: { fontSize: 17, fontWeight: "600" },
});
