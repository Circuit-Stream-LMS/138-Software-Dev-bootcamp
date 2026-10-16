import { Platform, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";


export default function DemoCard({ title, description, platforms, children }) {
  const { theme } = useTheme();
  const supported = !platforms || platforms.includes(Platform.OS);

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.card, borderColor: theme.border },
      ]}
    >
      <View style={styles.headerRow}>
        <Text
          style={[styles.title, { color: theme.text }]}
        >
          {title}
        </Text>
      </View>

      {description ? (
        <Text style={[styles.description, { color: theme.textSecondary }]}>
          {description}
        </Text>
      ) : null}

      {supported ? (
        <View style={styles.content}>{children}</View>
      ) : (
        <Text style={[styles.notice, { color: theme.textSecondary }]}>
          This API is not available on {Platform.OS}.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  title: {
    flexShrink: 1,
    fontSize: 18,
    fontWeight: "700",
  },
  badge: {
    fontSize: 12,
    fontWeight: "600",
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    overflow: "hidden",
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
  },
  content: {
    marginTop: 12,
    gap: 10,
  },
  notice: {
    marginTop: 12,
    fontSize: 14,
    fontStyle: "italic",
  },
});
