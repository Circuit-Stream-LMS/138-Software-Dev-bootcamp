import { memo } from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';

function CatCard({ imageId, imageUrl, currentVote, isVoting, onVote }) {
  const hasUpvoted = currentVote === 1;
  const hasDownvoted = currentVote === 0;

  return (
    <View style={styles.card}>
      <Image
        source={{uri :imageUrl}}
        style={styles.image}
        resizeMode="cover"
        accessibilityLabel="A cat"
      />
      <Text style={styles.imageId}>ID: {imageId}</Text>

      <View style={styles.buttons}>

        <Pressable
          accessibilityRole="button"
          disabled={isVoting}
          onPress={() => onVote(imageId, 1)}
          style={({ pressed }) => [
            styles.button,
            styles.btnUpvote,
            hasUpvoted && styles.btnUpvoteSelected,
            (pressed || isVoting) && styles.buttonDimmed,
          ]}
        >
          <Text style={styles.buttonText}>{hasUpvoted ? '👍 Upvoted' : '👍 Upvote'}</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          disabled={isVoting}
          onPress={() => onVote(imageId, 0)}
          style={({ pressed }) => [
            styles.button,
            styles.btnDownvote,
            hasDownvoted && styles.btnDownvoteSelected,
            (pressed || isVoting) && styles.buttonDimmed,
          ]}
        >
          <Text style={styles.buttonText}>{hasDownvoted ? '👎 Downvoted' : '👎 Downvote'}</Text>
        </Pressable>
      </View>
    </View>
  );
}

// memo() skips re-rendering a card when its props haven't changed.
// With long lists, voting on one cat then won't re-render all the others.
export default memo(CatCard);

const styles = StyleSheet.create({
  card: {
    marginVertical: 12,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    // boxShadow is the modern, cross-platform way to add a shadow
    // (it replaces the old shadowColor / shadowOffset / elevation props)
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    aspectRatio: 1, // keeps the image square at any screen width
    borderRadius: 10,
  },
  imageId: {
    marginVertical: 8,
    fontSize: 14,
    color: '#555',
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 4,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  buttonDimmed: {
    opacity: 0.5,
  },
  buttonText: {
    fontWeight: '600',
    color: '#222',
  },
  btnUpvote: {
    backgroundColor: '#b3f0c1',
  },
  btnUpvoteSelected: {
    borderColor: '#2e9e4f',
  },
  btnDownvote: {
    backgroundColor: '#f4b5ba',
  },
  btnDownvoteSelected: {
    borderColor: '#c0392b',
  },
});
