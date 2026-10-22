
// Shares the user's SETTINGS (city and unit) with every screen and keeps
// them saved on the device.
//
//   app starts       -> load the saved settings
//   updateSettings() -> change the state AND save it

import { createContext, useContext, useEffect, useState } from 'react';
import { DEFAULT_SETTINGS, loadSettings, saveSettings } from '../services/settingsStorage';

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(true);

  // Runs once, when the app starts
  useEffect(() => {
    async function load() {
      setSettings(await loadSettings());
      setLoading(false);
    }
    load();
  }, []);

  // changes is a partial object, for example: updateSettings({ unit: 'fahrenheit' })
  async function updateSettings(changes) {
    const newSettings = { ...settings, ...changes };
    setSettings(newSettings); // the screen updates immediately...
    try {
      await saveSettings(newSettings); // ...and the change is saved for next time
    } catch (err) {
      console.warn('Could not save settings:', err.message);
    }
  }

  return <SettingsContext value={{ settings, loading, updateSettings }}>{children}</SettingsContext>;
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) throw new Error('useSettings must be used inside <SettingsProvider>');
  return context;
}
