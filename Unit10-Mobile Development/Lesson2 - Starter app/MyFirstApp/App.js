import { StyleSheet, Platform } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

export default function App() {
  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          {/* Automatically adjust status bar color based on background */}
          <StatusBar style="auto" />
          <Header title="Welcome to Expo" />
          <HomeScreen />
          {/* <ProfileScreen /> */}
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});

//This is the main entry point for your Expo app. It should mainly handle high-level app configuration and navigation. Keeping your screens separate improves readability and scalability.

/*
View - Basic container, similar to <div> in web.

Text - For displaying text.

Pressable- Touchable component for buttons.

Image - For displaying images.

SafeAreaView - Ensures content is within safe screen bounds on iOS.

Platform - Detects the platform (iOS or Android) for conditional styles or logic.

Custom Hooks - Reusable logic to keep components clean.
*/



/* 
Practice: 
Practice Question: Limit Counter Range

Your task is to update the counter component so that:

The Decrement button cannot reduce the count below 0.

The Increment button cannot increase the count above 10.

The buttons should be disabled when the count reaches these limits.
*/