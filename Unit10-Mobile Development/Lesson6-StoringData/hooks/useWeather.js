
// A custom hook that loads the weather for a city using a "CACHE FIRST" strategy:
//
//   1. Read the saved copy from the device  -> show it IMMEDIATELY (works offline)
//   2. Ask the network for fresh data       -> replace what is on screen and save it
//   3. If the network fails                 -> keep showing the saved copy
//
// Returns: { weather, savedAt, loading, error, refresh }

import { useEffect, useState } from 'react';
import { getCurrentWeather } from '../services/weatherApi';
import { loadWeather, saveWeather } from '../services/weatherCache';

export default function useWeather(city) {
  const [weather, setWeather] = useState(null);
  const [savedAt, setSavedAt] = useState(null); // when this data was downloaded
  const [fromCache, setFromCache] = useState(false); // true while showing a saved copy
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Changing this number runs the effect again (that is how "refresh" works)
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    // If the user leaves or changes city before we finish, ignore the old answer
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);

      // Step 1: the saved copy
      const cached = await loadWeather(city.id);
      if (cancelled) return;

      if (cached) {
        setWeather(cached.weather);
        setSavedAt(cached.savedAt);
        setFromCache(true);
      } else {
        setWeather(null);
        setSavedAt(null);
        setFromCache(false);
      }

      // Step 2: fresh data from the network
      try {
        const fresh = await getCurrentWeather(city);
        if (cancelled) return;

        setWeather(fresh);
        setFromCache(false);
        setSavedAt(new Date().toISOString());

        // Save it for next time. A problem here must not hide the data we already have.
        try {
          saveWeather(city.id, fresh);
        } catch (err) {
          console.warn('Could not save the weather cache:', err.message);
        }
      } catch (err) {
        // Step 3: the network failed. Any saved copy stays on screen.
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [city, attempt]);

  const refresh = () => setAttempt((current) => current + 1);

  return { weather, savedAt, fromCache, loading, error, refresh };
}
