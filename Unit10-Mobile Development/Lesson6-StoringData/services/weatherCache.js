// USE CASE 3 - CACHE DATA LOCALLY  ->  expo-file-system
//
// After every successful request we save the weather as a small JSON FILE.
// When the phone is offline, the app shows that saved copy instead of nothing.
//
// Where do the files go?
//   Paths.cache     -> data we can download again. The operating system may
//                      delete it when the phone runs low on space. Perfect for a cache.
// Docs: https://docs.expo.dev/versions/latest/sdk/filesystem/

import { Directory, File, Paths } from 'expo-file-system';

// A Directory / File object is only a pointer to a path.
// Creating the object does NOT create anything on disk.
function getCacheDirectory() {
  return new Directory(Paths.cache, 'weather');
}

// WRITE one city. Returns the time it was saved.
export function saveWeather(cityId, weather) {
  const directory = getCacheDirectory();
  // Create the folder the first time. "idempotent" means: no error if it already exists.
  directory.create({ idempotent: true, intermediates: true });

  const entry = { savedAt: new Date().toISOString(), weather };

  const file = new File(directory, `${cityId}.json`);
  file.create({ overwrite: true }); // start from an empty file, replacing an old one
  file.write(JSON.stringify(entry)); // files hold text, so we convert the object to JSON

  return entry.savedAt;
}

// READ one city. Returns { savedAt, weather }, or null if nothing usable is saved.
export async function loadWeather(cityId) {
  const file = new File(getCacheDirectory(), `${cityId}.json`);
  if (!file.exists) return null;

  try {
    return JSON.parse(await file.text());
  } catch {
    return null; // damaged file: act as if there is no cache
  }
}

// List the saved files (used by the Storage inspector in Settings)
export function listCachedFiles() {
  const directory = getCacheDirectory();
  if (!directory.exists) return [];

  return directory
    .list()
    .filter((item) => item instanceof File)
    .map((file) => ({ name: file.name, size: file.size }));
}

// DELETE everything in the cache (deleting a folder deletes what is inside it)
export function clearWeatherCache() {
  const directory = getCacheDirectory();
  if (directory.exists) directory.delete();
}
