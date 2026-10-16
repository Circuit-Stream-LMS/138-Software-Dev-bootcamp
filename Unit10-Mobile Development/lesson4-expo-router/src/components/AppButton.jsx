import { Pressable, StyleSheet, Text } from "react-native";
import { useTheme } from "../context/ThemeContext";


export default function AppButton({
  title,
  onPress,
  variant = "primary", // "primary" = filled, "secondary" = outlined
  disabled = false,
}) {
  const { theme } = useTheme();
  const isPrimary = variant === "primary";

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: isPrimary ? theme.button : "transparent",
          borderColor: theme.button,
          opacity: disabled ? 0.4 : pressed ? 0.7 : 1,
        },
      ]}
    >
      <Text
        style={[
          styles.label,
          { color: isPrimary ? theme.buttonText : theme.button },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1.5,
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
});
