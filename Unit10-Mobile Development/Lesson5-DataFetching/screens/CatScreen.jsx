
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Text,
  Pressable,
  Alert,
} from 'react-native';
import useCats from '../hooks/useCats';
import useVote from '../hooks/useVote';
import CatCard from '../components/CatCard';

export default function CatScreen() {
  const { cats, loading, refreshing, error, loadMore, refresh } = useCats();
  const { vote, votes, pending } = useVote();

  // Called when a vote button is pressed. If the request fails, tell the user.
  const handleVote = async (imageId, value) => {
    try {
      await vote(imageId, value);
    } catch (err) {
      Alert.alert('Vote failed', err.message || 'Please try again.');
    }
  };

  // 1) Very first load: nothing to show yet, so show a big spinner
  if (loading && cats.length === 0) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // 2) The first load failed: show the error with a Retry button
  if (error && cats.length === 0) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>⚠️ {error}</Text>
        <Pressable style={styles.retryButton} onPress={loadMore}>
          <Text style={styles.retryText}>Retry</Text>
        </Pressable>
      </View>
    );
  }

  // 3) Normal case: show the list
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cat Images Gallery</Text>

      <FlatList
        data={cats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CatCard
            imageId={item.id}
            imageUrl={item.url}
            currentVote={votes[item.id]}
            isVoting={pending[item.id] === true}
            onVote={handleVote}
          />
        )}
        contentContainerStyle={[styles.list]}
        // Infinite scroll: load the next page when the user is near the bottom.
        // We pause it while there is an error so it can't retry in a loop.
        onEndReached={error ? undefined : loadMore}
        onEndReachedThreshold={0.5}
        // Pull-to-refresh
        refreshing={refreshing}
        onRefresh={refresh}
        ListFooterComponent={
          error ? (
            // Loading the NEXT page failed, but we keep the cats we already have
            <View style={styles.footer}>
              <Text style={styles.errorText}>Couldn't load more cats.</Text>
              <Pressable style={styles.retryButton} onPress={loadMore}>
                <Text style={styles.retryText}>Try again</Text>
              </Pressable>
            </View>
          ) : loading && !refreshing ? (
            <ActivityIndicator size="large" style={styles.footer} />
          ) : null
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>No cats available. Pull down to refresh.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 15,
    color: '#222',
  },
  list: {
    paddingHorizontal: 15,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#c0392b',
    marginBottom: 15,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  retryText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#666',
  },
});