import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

// Each theme is a plain JavaScript object of color values.
// Components read colors from here instead of hard-coding them,
// so switching themes only means switching which object we use.
export const themes = {
  light: {
    background: '#f2f2f2',
    text: '#333',
    card: '#fff',
    shadow: '#000',
    button: '#333',
    buttonText: '#fff',
  },
  dark: {
    background: '#1a1a1a',
    text: '#f2f2f2',
    card: '#333',
    shadow: '#000',
    button: '#f2f2f2',
    buttonText: '#000',
  },
};

// The provider holds the theme state and makes it available to its children.
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = isDark ? themes.dark : themes.light;

  return (
    // Anything inside this provider can read { theme, toggleTheme } with useTheme()
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook: a shortcut so components can write useTheme()
// instead of useContext(ThemeContext) everywhere.
export const useTheme = () => useContext(ThemeContext);
