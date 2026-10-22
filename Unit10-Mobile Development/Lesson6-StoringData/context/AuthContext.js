
// Shares the LOGIN STATE with every screen. This is where the token's life starts and ends:
//
//   app starts  -> look for a saved token  -> logged in or logged out
//   login()     -> ask the server, then SAVE the token
//   logout()    -> DELETE the token (and the user's cached data)

import { createContext, useContext, useEffect, useState } from 'react';
import { loginRequest } from '../services/authApi';
import { saveToken, getToken, deleteToken } from '../services/tokenStorage';
import { saveLastUsername, isFirstLaunch } from '../services/settingsStorage';
import { clearWeatherCache } from '../services/weatherCache';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  // true until we have checked the device for a saved token
  const [loading, setLoading] = useState(true);

  // Runs once, when the app starts
  useEffect(() => {
    async function restoreSession() {
      try {
        // A fresh install may still find an OLD token in the iOS Keychain
        // (it can survive uninstalling). Delete it so the user starts logged out.
        if (await isFirstLaunch()) {
          await deleteToken();
        }
        // "Auto login": if a token was saved earlier, the user is logged in already
        setToken(await getToken());
      } catch {
        setToken(null);
      } finally {
        setLoading(false);
      }
    }
    restoreSession();
  }, []);

  async function login(username, password) {
    const { token: newToken } = await loginRequest(username, password);
    await saveToken(newToken); // SecureStore: the secret
    await saveLastUsername(username.trim()); // AsyncStorage: harmless, to pre-fill the form next time
    setToken(newToken); // changing the state is what moves the user to the home screen
  }

  async function logout() {
    await deleteToken();
    // The cached weather belongs to this session, so we remove it too.
    // We KEEP the settings: they belong to the device, not to the login.
    try {
      clearWeatherCache();
    } catch {
      // not being able to clear the cache must never block logging out
    }
    setToken(null);
  }

  return <AuthContext value={{ token, loading, login, logout }}>{children}</AuthContext>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside <AuthProvider>');
  return context;
}
