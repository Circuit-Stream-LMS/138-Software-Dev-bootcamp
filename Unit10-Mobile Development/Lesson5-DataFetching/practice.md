# Practice – Nearby Restaurants

## Goal

Build a small Expo app that shows **restaurants near your current location** and lets you tap one to see its **details**.


---

## Requirements

- `expo-location` to get your current position
- **Google Places API (New)** to load the data
- Two screens:
  - **List screen** (`index`) – nearby restaurants
  - **Details screen** (`restaurant/[id]`) – one restaurant
- Show a **spinner** while loading
- Show a **message** when location permission is denied, when there is an error, or when no restaurants are found

---

## What each screen shows

**List screen** – for each restaurant: photo (if available), name, address, rating. Tapping a card opens the details screen.

**Details screen** – large photo (if available), name, address, rating, open / closed now, website (if available).

---

## Suggested structure

```
app/                              (or src/app/ in the default Expo template)
├── _layout.js                    # <Stack /> navigator
├── index.js                      # List screen
└── restaurant/
    └── [id].js                   # Details screen

services/placesApi.js             # fetch calls to Google Places
hooks/useNearbyRestaurants.js     # { restaurants, loading, error }
components/RestaurantCard.jsx
```

Install the location package with:

```bash
npx expo install expo-location
```

---

## Step 1 – Get an API key

1. Open the [Google Cloud Console](https://console.cloud.google.com/) and create a new project.
2. Enable billing for the project (Google requires it, even for free usage). Set a **budget alert**.
3. Go to **APIs & Services → Library**, search for **Places API (New)** and click **Enable**.
   (Pick *Places API (New)*, not the older "Places API".)
4. Go to **APIs & Services → Credentials → Create credentials → API key**.
5. Open the key and under **API restrictions** allow **Places API (New)** only.
6. Save it in a `.env` file (and add `.env` to `.gitignore`):

   ```
   EXPO_PUBLIC_GOOGLE_PLACES_API_KEY=your_key_here
   ```

   Read it with `process.env.EXPO_PUBLIC_GOOGLE_PLACES_API_KEY`. Restart with `npx expo start -c` after editing `.env`.

> `EXPO_PUBLIC_` values end up inside the app, so this is only suitable for learning. That is why we restrict the key.

---

## Step 2 – Places API (New) cheat sheet

Two things are different from most APIs you have seen:
the **API key goes in a header**, and you **must list the fields you want** in the `X-Goog-FieldMask` header.

### Nearby restaurants – `POST`

```js
fetch('https://places.googleapis.com/v1/places:searchNearby', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': API_KEY,
    'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.rating,places.photos',
  },
  body: JSON.stringify({
    includedTypes: ['restaurant'],
    maxResultCount: 20,
    locationRestriction: {
      circle: { center: { latitude, longitude }, radius: 1500.0 }, // metres
    },
  }),
});
```

Response (note `displayName` is an object, and `places` may be missing if nothing is found):

```json
{
  "places": [
    {
      "id": "ChIJ...",
      "displayName": { "text": "Pasta Place" },
      "formattedAddress": "123 Main St",
      "rating": 4.5,
      "photos": [{ "name": "places/ChIJ.../photos/AUc7..." }]
    }
  ]
}
```

### One restaurant – `GET`

```
GET https://places.googleapis.com/v1/places/{PLACE_ID}
X-Goog-Api-Key: <your key>
X-Goog-FieldMask: id,displayName,formattedAddress,rating,websiteUri,currentOpeningHours.openNow,photos
```

### Photo URL

```
https://places.googleapis.com/v1/{photo.name}/media?maxWidthPx=400&key=YOUR_API_KEY
```

Use it like any other image: `<Image source={{ uri: photoUrl }} />`

---

## Step 3 – Get the location

```js
import * as Location from 'expo-location';

const { status } = await Location.requestForegroundPermissionsAsync();
if (status !== 'granted') {
  // show a "location permission needed" message
}
const { coords } = await Location.getCurrentPositionAsync({});
// coords.latitude, coords.longitude
```

---

## Step 4 – Expo Router navigation

The **file name is the route**. `app/restaurant/[id].js` is the details screen, and `[id]` is a variable part of the URL.

**Go to the details screen** (from a card on the list screen):

```jsx
import { Link } from 'expo-router';

<Link href={{ pathname: '/restaurant/[id]', params: { id: place.id } }}>
  {/* card content */}
</Link>
```

**Read the id on the details screen:**

```jsx
import { useLocalSearchParams } from 'expo-router';

const { id } = useLocalSearchParams();
```

Pass only the `id`, then fetch the full details on the details screen.

---


## Links

- [Nearby Search (New)](https://developers.google.com/maps/documentation/places/web-service/nearby-search)
- [Place Details (New)](https://developers.google.com/maps/documentation/places/web-service/place-details)
- [Place Photos (New)](https://developers.google.com/maps/documentation/places/web-service/place-photos)
- [Expo Router – dynamic routes](https://docs.expo.dev/router/advanced/dynamic-routes/)
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)