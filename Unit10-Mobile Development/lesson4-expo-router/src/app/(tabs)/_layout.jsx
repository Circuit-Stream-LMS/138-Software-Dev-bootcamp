// ============================================================================
// SECTION 1 - ROUTER  |  File: src/app/(tabs)/_layout.jsx  (the TABS layout)
// ============================================================================
// Every file in the (tabs) folder becomes a tab. The order of <Tabs.Screen>
// below is the order of the tabs. The `name` must match the file name
// without the extension:  name="index" -> index.jsx,  name="platform" -> platform.jsx


import { Tabs } from "expo-router/js-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "../../context/ThemeContext";

export default function TabsLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      // screenOptions apply to EVERY tab. Options for a single tab go on its <Tabs.Screen>.
      screenOptions={{
        tabBarActiveTintColor: theme.button,
        tabBarInactiveTintColor: theme.textSecondary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Menu", // used for the header AND the tab label
          // tabBarIcon receives { focused, color, size } from the tab bar.
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "restaurant" : "restaurant-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="platform"
        options={{
          title: "Platform",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "phone-portrait" : "phone-portrait-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="hooks"
        options={{
          title: "Hooks",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "pulse" : "pulse-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
