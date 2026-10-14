import { StyleSheet, Text, ScrollView, Pressable } from "react-native";
// SafeAreaProvider + SafeAreaView keep content away from notches,
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ProfileCard from "./components/ProfileCard";
import { ThemeProvider, useTheme, themes } from "./context/ThemeContext";

// Sample data. In a real app this would usually come from an API.
const users = [
  {
    name: "Jane Doe",
    bio: "React Native Developer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    bio: "Full Stack Engineer",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    name: "Alice Johnson",
    bio: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

function HomeScreen() {
  // Read the current theme colors and the toggle function from the context.
  const { theme, toggleTheme } = useTheme();

  return (
    <SafeAreaView
      // flex: 1 makes the screen fill all available space.
      // The theme background is dynamic, so it is added inline.
      style={[styles.safeArea, { backgroundColor: theme.background }]}
      // Only protect the top and bottom edges of the screen.
      edges={["top", "bottom"]}
    >
      {/* Light status bar content on a dark background, and vice versa */}
      <StatusBar style={theme === themes.dark ? "light" : "dark"} />

      {/* ScrollView lets the content scroll when it is taller than the screen.
          contentContainerStyle styles the inner container that holds the children. */}
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { backgroundColor: theme.background },
        ]}
      >
        <Text style={[styles.header, { color: theme.text }]}>
          React Native Styling Showcase
        </Text>

        {/* Pressable has no built-in visual feedback
            Its style can be a function that receives { pressed }, which is
            true while the finger is down on the button. */}
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: theme.button },
            // Only applied while pressed: fade slightly and shrink a little
            pressed && styles.buttonPressed,
          ]}
          onPress={toggleTheme}
        >
          <Text style={[styles.buttonText, { color: theme.buttonText }]}>
            Toggle Theme
          </Text>
        </Pressable>

        {/* Render one card per user. The spread operator passes name, bio and
            image as props. index is used to stagger the entry animation. */}
        {users.map((user, index) => (
          <ProfileCard key={user.name} {...user} theme={theme} index={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    // Providers wrap the whole app once, at the root:
    // SafeAreaProvider supplies the safe area measurements,
    // ThemeProvider supplies the theme to every screen and component.
    <SafeAreaProvider>
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 20,
    // In a column layout: alignItems centers horizontally,
    // justifyContent centers vertically.
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 20,
  },
  // Merged into the button style only while it is pressed
  buttonPressed: {
    opacity: 0.6,
    transform: [{ scale: 0.97 }],
  },
  buttonText: {
    fontWeight: "bold",
  },
});