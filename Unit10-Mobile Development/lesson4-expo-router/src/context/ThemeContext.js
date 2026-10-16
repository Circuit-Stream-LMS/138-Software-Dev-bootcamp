import { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";

const ThemeContext = createContext();

// Each theme is a plain JavaScript object of color values.
// Components read colors from here instead of hard-coding them,
// so switching themes only means switching which object we use.
export const themes = {
  light: {
    background: "#f2f2f2",
    text: "#333",
    textSecondary: "#6b6b6b", 
    card: "#fff",
    border: "#e0e0e0", 
    shadow: "#000",
    button: "#333",
    buttonText: "#fff",
  },
  dark: {
    background: "#1a1a1a",
    text: "#f2f2f2",
    textSecondary: "#a8a8a8",
    card: "#333",
    border: "#4a4a4a",
    shadow: "#000",
    button: "#f2f2f2",
    buttonText: "#000",
  },
};

// The provider holds the theme state and makes it available to its children.
export function ThemeProvider({ children }) {
  //we start with
  // whatever the phone is set to. useColorScheme() is a built-in React Native hook
  //  From then on the toggle button decides.

  const systemScheme = useColorScheme(); // this gives you system theme
  const [isDark, setIsDark] = useState(systemScheme === "dark");

  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = isDark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
