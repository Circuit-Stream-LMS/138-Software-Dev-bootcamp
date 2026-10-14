# React Native Styling Notes

This guide explains how styling in React Native works  — how to structure, write, and manage styles for react native app

---

##  Styling Fundamentals

- Styles in React Native are written as **plain JavaScript objects** — not CSS files.  
- React Native doesn’t use a browser rendering engine. Instead, it renders **native UI components**.  
- Because of that, only a subset of CSS properties is supported, and the behavior can differ slightly from the web.

### Example

```js
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
});

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
    </View>
  );
}
```

---

##  Units in React Native

- All numeric values are **unitless**.  
- These numbers represent **density-independent pixels (dp)**.  
- React Native automatically scales them across devices with different pixel densities.

### Example

```js
padding: 12     // 12 dp
fontSize: 16    // 16 dp
borderRadius: 8 // 8 dp
```

---

## Layout System (Flexbox in React Native)

React Native uses **Flexbox** to position and size components.  
Key difference: the **default direction is `column`**, not `row`.

### Common properties
- `flex`, `flexDirection`
- `justifyContent`, `alignItems`
- `margin`, `padding`
- `position`, `top`, `left`, `right`, `bottom`

### Example – Header layout

```js
container: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 16,
}
```

---

## Color and Opacity

You can use color values in multiple formats:
- Hex: `'#ff0000'`
- RGB: `'rgb(255, 0, 0)'`
- RGBA: `'rgba(0, 0, 0, 0.1)'`
- Named colors: `'blue'`, `'red'`

### Example

```js
backgroundColor: 'rgba(0, 0, 0, 0.05)' // translucent grey
opacity: 0.8 // makes entire view semi-transparent
```

---

##  Platform-Specific Styling


### Android – `elevation`
Creates shadows based on depth.

```js
elevation: 5 // higher = deeper shadow
```

### iOS – Shadow properties
Must be defined manually:

```js
shadowColor: '#000'
shadowOpacity: 0.2
shadowRadius: 4
shadowOffset: { width: 0, height: 2 }
```


### Cross-Platform Example

```js
card: {
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 16,
  elevation: 3, // Android shadow
  shadowColor: '#000', // iOS shadow
  shadowOpacity: 0.1,
  shadowRadius: 3,
  shadowOffset: { width: 0, height: 1 },
}
```

---

##  Handling Images

React Native images do **not** size automatically — you must define dimensions.

### Example

```js
<Image
  source={{ uri: 'https://picsum.photos/200' }}
  style={{ width: 120, height: 120, borderRadius: 10 }}
  resizeMode="cover"
/>
```

Common mistake:
> Leaving out width and height makes images invisible because React Native cannot infer size like HTML `<img>`.

---

## Dark and Light Themes (Practical Setup)

A practical approach to theming:
1. Store your colors for light/dark modes.
2. Switch based on app state or system theme.

### Example

```js
const colors = {
  light: { background: '#fff', text: '#000' },
  dark: { background: '#000', text: '#fff' },
};

<View style={{ backgroundColor: colors[theme].background }}>
  <Text style={{ color: colors[theme].text }}>Hello</Text>
</View>
```

---

##  Style Inheritance Doesn’t Work Like CSS

Unlike the web, React Native **does not support cascading styles**.  

### Why?

1. **No CSS engine:** React Native doesn’t interpret CSS — it sends styles directly to the native layer.  
2. **Component isolation:** Each `<View>`, `<Text>`, `<Image>`, etc., is an independent native component.  

### Example

```js
<View style={{ color: 'red' }}>
  <Text>Hello</Text> // ❌ Not red
</View>
```

You must style it explicitly:

```js
<Text style={{ color: 'red' }}>Hello</Text> // ✅ Works
```

**Exception:**  
Text styles *do* cascade within nested `<Text>` components:

```js
<Text style={{ color: 'red' }}>
  <Text>Red text</Text> // ✅ Inherits color
</Text>
```

So only **text-related styles** inside a text block are inherited.  
No other styles cascade automatically.

---

##  Responsive Design

React Native doesn’t have CSS media queries, so layout flexibility comes from:

### 1. Flex Layout
Let the design naturally adapt using `flex`.

### 2. `useWindowDimensions` hook
Get the screen size for percentage-like scaling. the hook **re-renders the component when the size changes** (for example, when the device rotates or a window is resized), so the layout always stays correct.

```js
import { useWindowDimensions, View } from 'react-native';

export default function Card() {
  // width and height of the window, updated automatically on change
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        width: width * 0.9, // 90% of screen width
        marginVertical: 10,
      }}
    />
  );
}
```

##  Conditional and Dynamic Styles

You can use normal JS logic for conditional styling.

### Example

```js
<View style={[styles.button, isDisabled && styles.disabled]} />

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
  },
  disabled: {
    backgroundColor: '#aaa',
  },
});
```

This pattern is extremely common in production apps.

---

## Text Styling and Accessibility

- Use `fontSize`, `fontWeight`, `lineHeight`, and `color` for text.   
- Always set enough contrast for accessibility.

### Example

```js
<Text
  style={{
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
    fontWeight: '500',
  }}
>
  Scalable text with proper spacing
</Text>
```

---

## Performance Tips
 
- Avoid creating inline styles during each render unless dynamic.  
- Reuse styles wherever possible.  
- Group constants (colors, spacing, typography) in one file.  

### Example

```js
const COLORS = {
  primary: '#007AFF',
  background: '#fff',
  text: '#222',
};
```

This keeps consistency across the app and reduces maintenance.

---

##  Animating Styles

Animations are done with **React Native Reanimated** (included in the sample project). Instead of animating the style object yourself, you use `Animated` components and ready-made animations.

### Install

```bash
npx expo install react-native-reanimated react-native-worklets
```

### Example – Entering animation

```js
import Animated, { FadeInDown } from 'react-native-reanimated';

<Animated.View
  // Fades in while sliding down when the component first appears.
  // delay() waits 300 ms before starting; duration() sets how long it runs.
  entering={FadeInDown.delay(300).duration(500)}
  style={styles.card}
/>
```

### Example – Staggering a list

```js
{items.map((item, index) => (
  <Animated.View
    key={item.id}
    // Each item starts 150 ms after the previous one
    entering={FadeInDown.delay(index * 150)}
  />
))}
```

### Example – Spring (bouncy) animation

```js
// .springify() replaces the timed animation with a spring
entering={FadeInDown.springify()}
```

---


## ✅ Best Practices

- Use **Flexbox** for layout instead of absolute positioning.
- Keep consistent spacing (e.g., 4 or 8-pixel scale).
- Extract all colors, fonts, and spacing into constants.
- Use `SafeAreaView` from `react-native-safe-area-context` to handle device notches and system bars. Wrap your app once in a `SafeAreaProvider`.
- Test on **both iOS and Android** for visual consistency.

---

##  References

- [React Native Styling Docs](https://reactnative.dev/docs/style)
- [React Native Flexbox Layout](https://reactnative.dev/docs/flexbox)
- [React Native Image Component](https://reactnative.dev/docs/image)
- [React Native Reanimated – Entering/Exiting animations](https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations/)
- [Expo SDK 57 changelog](https://expo.dev/changelog/sdk-57)
