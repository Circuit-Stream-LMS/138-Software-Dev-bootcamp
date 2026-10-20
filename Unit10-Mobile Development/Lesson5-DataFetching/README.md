# Lesson 6 – Data Fetching (Cat Gallery)

In this lesson you build a small app that **fetches** cat photos from [The Cat API](https://developers.thecatapi.com) and lets you **vote** on them (a **POST** request).


## What you will learn

- Create **custom hooks** to hold reusable logic (`useCats`, `useVote`)
- Use `fetch` to **GET** data from a public API
- Use `fetch` to **POST** data to a public API
- Handle loading, error and empty states
- Show long lists with `FlatList` (infinite scroll and pull-to-refresh)

## 1. Get a free API key

1. Go to <https://thecatapi.com/signup> and sign up with your email.
2. Check your inbox – the API key is emailed to you.

## 2. Set up the project

```bash
# 1. Install dependencies
npm install

# 2. Create your personal env file
cp  .env      

# 3. Open .env and paste your key:
#    EXPO_PUBLIC_CAT_API_KEY=your_key_here

# 4. Start the app
npx expo start
```

## Project structure

```
Lesson6-DataFetching/
├── App.js                  # Root: safe area + status bar + the screen
├── index.js                # Registers the app with Expo
├── services/
│   └── catApi.js           # ALL network code (fetch GET + POST) lives here
├── hooks/
│   ├── useCats.js          # Custom hook: load cats, pagination, refresh, errors
│   └── useVote.js          # Custom hook: send votes, remember what was voted
├── components/
│   └── CatCard.jsx         # One cat: image + upvote/downvote buttons
└── screens/
    └── CatScreen.jsx       # Connects the hooks to the UI
```
---

### 1. Custom hooks


```js
const { cats, loading, error, loadMore, refresh } = useCats();
```

### 2. GET with `fetch`

```js
const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10', {
  headers: { 'x-api-key': API_KEY },
});
if (!response.ok) throw new Error(`Request failed with status ${response.status}`); // see below
const cats = await response.json();
```

### 3. POST with `fetch`

```js
const response = await fetch('https://api.thecatapi.com/v1/votes', {
  method: 'POST',
  headers: { 'x-api-key': API_KEY, 'Content-Type': 'application/json' },
  body: JSON.stringify({ image_id: 'abc123', value: 1 }), // 1 = upvote, 0 = downvote
});
```


### 4. Loading, error and empty states

Every network screen has more than one state. `CatScreen` handles all of these:

| State | What the user sees |
|-------|--------------------|
| First load in progress | Big spinner |
| First load failed | Error message + **Retry** button |
| Loading the next page | Small spinner at the bottom of the list |
| Next page failed | Error + **Try again** button (cats already loaded stay visible) |
| Empty result | "No cats available" message |


## Useful links

- [The Cat API documentation](https://developers.thecatapi.com)
- [React Native: Networking](https://reactnative.dev/docs/network)
- [React: Reusing logic with custom hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Expo: Environment variables](https://docs.expo.dev/guides/environment-variables/)
