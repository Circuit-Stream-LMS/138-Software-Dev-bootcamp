import { View, Text, Image, StyleSheet } from 'react-native';
// Animated.View works like View
// FadeInDown is a ready-made "entering" animation: fade in while sliding down.
import Animated, { FadeInDown } from 'react-native-reanimated';

// Props: the user data (name, bio, image), the active theme colors,
// and the card's position in the list (index)
export default function ProfileCard({ name, bio, image, theme, index }) {
  return (
    <Animated.View
      // Runs once when the card first appears (on mount).
      // delay() offsets each card by 150 ms so they appear one after another.
      entering={FadeInDown.delay(index * 150).duration(1000)}
      // An array merges styles; later items override earlier ones.
      // Static styles come from StyleSheet, theme colors are applied dynamically.
      style={[
        styles.card,
        { backgroundColor: theme.card, shadowColor: theme.shadow },
      ]}
    >
      {/* Remote images need an object with a uri, and an explicit width/height
          in the style, because React Native cannot infer the size of a
          network image. */}
      <Image source={{ uri: image }} style={styles.image} />

      {/* This View wraps the texts. flex: 1 makes it fill the space
          left over next to the image. */}
      <View style={styles.info}>
        <Text style={[styles.name, { color: theme.text }]}>{name}</Text>
        <Text style={[styles.bio, { color: theme.text }]}>{bio}</Text>
      </View>
    </Animated.View>
  );
}

// StyleSheet.create validates the style objects and keeps them in one place.
// Numbers are unitless:
const styles = StyleSheet.create({
  card: {
    // Default direction in React Native is column; "row" puts the image
    // and the text side by side.
    flexDirection: 'row',
    borderRadius: 10,
    padding: 15,
    // iOS shadow properties
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android shadow (iOS ignores this, Android ignores the shadow* props)
    elevation: 5,
    // Take the full width, but never grow wider than 350
    width: '100%',
    maxWidth: 350,
    // Vertically center the image and text (cross axis of a row)
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 70,
    height: 70,
    // Half of the width/height makes a perfect circle
    borderRadius: 35,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  bio: {
    fontSize: 14,
  },
});
