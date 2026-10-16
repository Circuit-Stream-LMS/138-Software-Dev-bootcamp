// ============================================================================
// SECTION 1 - ROUTER  |  File: src/app/_layout.jsx  (the ROOT layout)
// ============================================================================
// Expo Router uses FILE-BASED ROUTING:
//   - every file inside src/app/ becomes a screen (a route)
//   - the file name becomes the URL:  src/app/menu/[id].jsx  ->  /menu/3
//   - a file called _layout.jsx does not become a screen. It decides HOW the
//     screens in its folder are navigated (as a stack, as tabs, ...).
//
//   src/app/
//   ├── _layout.jsx            <- you are here: a STACK around everything
//   ├── (tabs)/                <- a "group" folder: (brackets) are NOT part of the URL
//   │   ├── _layout.jsx        <- a TABS navigator
//   │   ├── index.jsx          <- tab 1: Menu        (URL: /)
//   │   ├── platform.jsx       <- tab 2: Platform    (URL: /platform)
//   │   └── hooks.jsx          <- tab 3: Hooks       (URL: /hooks)
//   └── menu/
//       └── [id].jsx           <- details screen     (URL: /menu/1, /menu/2, ...)
// ============================================================================

import {
  Stack,
  DarkTheme,
  DefaultTheme,
  // Expo Router has its OWN ThemeProvider (for headers and tab bars).
  // Our Lesson 3 provider is also called ThemeProvider, so we rename this one
  // with "as" to avoid mixing them up.
  ThemeProvider as NavigationThemeProvider,
} from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

export default function RootLayout() {
  return (
    // Our own ThemeProvider from Lesson 3 wraps the whole app, once, at the root.
    // Every screen can now call useTheme().
    <ThemeProvider>
      <ThemedStack />
    </ThemeProvider>
  );
}

// This component sits INSIDE our ThemeProvider, so it is allowed to call useTheme().
function ThemedStack() {
  const { theme, isDark } = useTheme();

  // Expo Router draws headers and tab bars for us and reads their colours from a
  // "navigation theme". We start from the built-in light/dark one and swap in
  // OUR colours, so the headers follow the same theme as our screens.
  const baseTheme = isDark ? DarkTheme : DefaultTheme;
  
  const navigationTheme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      primary: theme.button,
      background: theme.background,
      card: theme.card,
      text: theme.text,
      border: theme.border,
    },
  };

  return (
    <NavigationThemeProvider value={navigationTheme}>
      <StatusBar style={isDark ? "light" : "dark"} />

      {/* STACK navigator: screens are stacked on top of each other.
          Going forward = push a screen on top. Going back = pop it off.
          The header with the back button is created for us. */}
      <Stack>
        {/* The whole (tabs) group is ONE screen of this stack.
            The tabs draw their own headers, so we hide the stack's header here
            (otherwise we would see two headers). */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* The details screen is pushed on top of the tabs.
            "menu/[id]" must match the file path src/app/menu/[id].jsx.
            The real title is set inside that screen once we know which item it is. */}
        <Stack.Screen name="menu/[id]" options={{  headerBackTitle:"Menu"}} />
      </Stack>
    </NavigationThemeProvider>
  );
}
