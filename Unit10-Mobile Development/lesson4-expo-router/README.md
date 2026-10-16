# Lesson 5 – Navigation, Platform Features & Hooks (Expo SDK 57)

In this lesson we will see

1. Move between screens with **Expo Router** (stack and tabs)
2. Use **iOS-only** features: `ActionSheetIOS` and `Settings`
3. Use **Android-only** features: `ToastAndroid`
4. Read device information with hooks: `useColorScheme`, `useWindowDimensions`, `useDeviceOrientation`

---


## Understanding the dependencies

Open `package.json`. The `dependencies` list is every package this app needs. Here is what each one does and where you can see it used.

### Already in the blank template

| Package | What it is for |
|---|---|
| `expo` | The Expo SDK: the tools and native modules everything else builds on. |
| `react` | The React library (components, hooks like `useState`). |
| `react-native` | The components and APIs: `View`, `Text`, `FlatList`, `ActionSheetIOS`, `useWindowDimensions`, … |
| `expo-status-bar` | The `<StatusBar>` component (used in `src/app/_layout.jsx`). |

### Added for Expo Router

| Package | What it is for |
|---|---|
| `expo-router` | File-based routing: `Stack`, `Tabs`, `Link`, `useRouter`, `useLocalSearchParams`, `useFocusEffect`. |
| `react-native-screens` | Makes screens use the phone's real native screen containers, so transitions are smooth. Router needs it. |
| `react-native-safe-area-context` | Knows where the notch and system bars are, so headers and content are not hidden under them. Router needs it. |
| `expo-linking` | Turns URLs into routes (this is how `/menu/3` and deep links work). Router needs it. |
| `expo-constants` | Gives access to app config values. Router needs it. |
| `react-dom` | Not used on the phone. Router's own dependencies list it as a requirement, |

### Added for specific lesson topics

| Package | Used for | Where |
|---|---|---|
| `@react-native-community/hooks` | The `useDeviceOrientation` hook (Section 4) | `src/app/(tabs)/hooks.jsx` |
| `@expo/vector-icons` | The icons in the tab bar and the menu rows | `src/app/(tabs)/_layout.jsx` |
| `expo-font` | Loads the icon fonts. `@expo/vector-icons` requires it. | (used behind the scenes) |
| `expo-system-ui` | Makes `"userInterfaceStyle": "automatic"` work on Android, so `useColorScheme` can see dark mode | `app.json` |

> Everything else you see in `node_modules` was installed automatically as a dependency of these packages.

### How to add Expo Router to a blank project

The `blank` template has no router. It starts from `App.js` and `index.js`. To switch it to Expo Router:

**1. Install the packages with `npx expo install`**

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-dom
```


This command also adds `"plugins": ["expo-router"]` to `app.json` for you.

**2. Change the entry point in `package.json`**

```json
"main": "expo-router/entry"
```

This tells the app to start from Expo Router instead of `index.js`. `expo install` does **not** do this step for you. If you forget it, you get *"Cannot resolve entry file"* or you keep seeing the old blank screen.

**3. Delete the old entry files**

Delete `App.js` and `index.js`. Expo Router replaces them.

**4. Create the routes folder with two files**

```jsx
// src/app/_layout.jsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack />;
}
```

```jsx
// src/app/index.jsx
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello from Expo Router</Text>
    </View>
  );
}
```

**5. (Recommended) Add a URL scheme to `app.json`**

```json
"scheme": "myapp"
```

The scheme is the app's own link prefix (`myapp://menu/3`). It is needed for deep linking.

**6. Restart with a clean cache**

```bash
npx expo start --clear
```

Now every new file you add inside `src/app/` becomes a screen.

### Adding the extras later

When you need one of the lesson-topic packages, install it the same way:

```bash
npx expo install @react-native-community/hooks     # useDeviceOrientation
npx expo install @expo/vector-icons expo-font      # icons
npx expo install expo-system-ui                    # dark mode on Android
```


---

## Project map

```
src/
├── app/                      <- every file here is a SCREEN (a route)
│   ├── _layout.jsx           <- Stack around the whole app
│   ├── (tabs)/
│   │   ├── _layout.jsx       <- the tab bar
│   │   ├── index.jsx         <- Menu tab        (URL "/")
│   │   ├── platform.jsx      <- Platform tab    (URL "/platform")
│   │   └── hooks.jsx         <- Hooks tab       (URL "/hooks")
│   └── menu/
│       └── [id].jsx          <- Details screen  (URL "/menu/3")
├── components/               <- reusable pieces (AppButton, DemoCard)
│   └── platform/             <- one small demo per iOS/Android API
├── context/ThemeContext.js   <- our theme + useTheme() hook (same idea as Lesson 3)
├── utils/                    <- showMessage.js / showMessage.android.js
├── data/menu.js              <- the menu items
```

---

## Section 1 – Routing with Expo Router

**Routing** means deciding which screen the user sees and how they move between screens. Expo Router uses **file-based routing**: *the files in `src/app` are your routes.*

| File | What it does | URL |
|---|---|---|
| `src/app/(tabs)/index.jsx` | A screen | `/` |
| `src/app/(tabs)/platform.jsx` | A screen | `/platform` |
| `src/app/menu/[id].jsx` | A screen with a **parameter** | `/menu/1`, `/menu/2`, … |
| `src/app/_layout.jsx` | *Not a screen.* Chooses how its folder's screens are navigated | – |
| `(tabs)` folder | A **group**: brackets keep the name out of the URL | – |

### The navigators

| Navigator | Idea | Import |
|---|---|---|
| **Stack** | Screens pile on top of each other. Forward = push, back = pop. Gives you a header with a back button. | `import { Stack } from "expo-router"` |
| **Tabs** | A bar at the bottom to switch between a few main sections. | `import { Tabs } from "expo-router/js-tabs"` |
| **Drawer** | A side menu that slides in. *(Optional, see below.)* | `import { Drawer } from "expo-router/drawer"` |

### Two ways to navigate

```jsx
// 1. Declarative: a <Link> navigates when pressed
<Link href={{ pathname: "/menu/[id]", params: { id: "3" } }}>See pizza</Link>

// 2. Imperative: navigate from code
const router = useRouter();
router.push({ pathname: "/menu/[id]", params: { id: "3" } }); // go forward
router.back();                                                  // go back
router.replace("/");                                            // swap, no back button
```

### Reading a parameter

```jsx
const { id } = useLocalSearchParams();   // on /menu/3  ->  id is the STRING "3"
```

> **Tip:** parameters always arrive as strings. Convert with `Number(id)` if you need a number.

### Optional: add a Drawer

Install the extra packages, then use `Drawer` where you would use `Tabs`:

```bash
npx expo install react-native-reanimated react-native-worklets react-native-gesture-handler
```

```jsx
// src/app/(drawer)/_layout.jsx
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ drawerLabel: "Home", title: "Home" }} />
    </Drawer>
  );
}
```

---

## Section 2 – iOS specifics

Open the **Platform** tab on an iOS simulator or iPhone.

### `ActionSheetIOS` – "pick one" menu

An action sheet asks the user to choose.

```jsx
ActionSheetIOS.showActionSheetWithOptions(
  {
    options: ["Cancel", "Small", "Medium", "Large"],
    cancelButtonIndex: 0,
  },
  (buttonIndex) => {
    // buttonIndex = the position of the tapped button in `options`
  }
);
```

Files: `src/components/platform/ActionSheetDemo.jsx`

### `Settings` – small data that survives closing the app

```jsx
Settings.set({ favouriteDrink: "Tea" });   // save
const drink = Settings.get("favouriteDrink"); // read (no await needed)
```

Good for small values (strings, numbers, booleans). iOS only. For data on both platforms use a cross-platform storage library such as `expo-sqlite`'s key-value store or AsyncStorage.

Files: `src/components/platform/SettingsDemo.jsx`

---

## Section 3 – Android specifics

Open the **Platform** tab on an Android emulator or phone.

### `ToastAndroid` – a message that disappears

```jsx
ToastAndroid.show("Saved!", ToastAndroid.SHORT);   // or ToastAndroid.LONG
```

Android only. For the same behaviour on every platform, put the platform check in **one** place. This project does it with two files with the same name:

- `showMessage.android.js` → used on Android
- `showMessage.js` → used everywhere else

Files: `src/components/platform/ToastAndroidDemo.jsx`, `src/utils/showMessage*.js`

> Toast libraries exist too, for example `react-native-root-toast` or `sonner-native`. Always check when a library was last updated before you add it.

### Checking the platform in code

```jsx
import { Platform } from "react-native";
Platform.OS === "ios";       // "ios" | "android"
```

---

## Section 4 – Hooks in React Native

You already know hooks from React. React Native adds hooks that describe the **device**. Whenever the value changes your component re-renders on its own.

| Hook | Gives you | Try it |
|---|---|---|
| `useColorScheme()` | `"light"` or `"dark"` | Change your phone to dark mode |
| `useWindowDimensions()` | `{ width, height, scale, fontScale }` | Rotate the phone |
| `useDeviceOrientation()` | the string `"portrait"` or `"landscape"` | Rotate the phone |

```jsx
import { useColorScheme, useWindowDimensions } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

const scheme = useColorScheme();
const { width } = useWindowDimensions();
const orientation = useDeviceOrientation();   // a string, not an object!
const columns = width >= 600 ? 4 : 2;         // responsive layout
```

### Our theme 


- The provider **starts** in the theme your phone is set to (it reads `useColorScheme()` once). After that, the **Toggle Theme** button on the Hooks tab is in charge.
- Expo Router has its own `ThemeProvider` for headers and tab bars. Since the name is the same as ours, `src/app/_layout.jsx` imports it as `NavigationThemeProvider` and feeds it our colours.

```jsx
const { theme, isDark, toggleTheme } = useTheme();
<Text style={{ color: theme.text }}>Hello</Text>
```

Notes:
- Use `useWindowDimensions()` instead of `Dimensions.get("window")`. `Dimensions.get` is a one-time snapshot and does not update.
- `useDeviceOrientation` comes from the `@react-native-community/hooks` package. That package has more hooks worth exploring: `useKeyboard`, `useAppState`, `useBackHandler`, …
- Rotation only works because `app.json` has `"orientation": "default"`.


---

## Practice

See **[PRACTICE.md](./PRACTICE.md)**.

## Handy links

- Expo Router: https://docs.expo.dev/router/introduction/
- Stack: https://docs.expo.dev/router/advanced/stack/
- Tabs: https://docs.expo.dev/router/advanced/tabs/
- Drawer: https://docs.expo.dev/router/advanced/drawer/
- ActionSheetIOS: https://reactnative.dev/docs/actionsheetios
- Settings: https://reactnative.dev/docs/settings
- ToastAndroid: https://reactnative.dev/docs/toastandroid
- useWindowDimensions: https://reactnative.dev/docs/usewindowdimensions
