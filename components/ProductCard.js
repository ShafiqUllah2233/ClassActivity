import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ProductCard({ onExplore, selectedProduct }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardLabel}>FEATURED PRODUCT</Text>
      <Text style={styles.productName}>Aurora Headphones</Text>
      <Text style={styles.productDescription}>
        Immersive sound, all-day comfort, and a battery that keeps up with you.
      </Text>
      <Text style={styles.availability}>Available now · Free shipping</Text>
      <Pressable style={styles.button} onPress={onExplore}>
        <Text style={styles.buttonText}>Explore product</Text>
      </Pressable>
      {selectedProduct ? <Text style={styles.confirmation}>Viewing {selectedProduct}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 24,
    padding: 24,
    gap: 12,
  },
  cardLabel: {
    color: '#94a3b8',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  productName: {
    color: '#f8fafc',
    fontSize: 26,
    fontWeight: '700',
  },
  productDescription: {
    color: '#cbd5e1',
    fontSize: 15,
    lineHeight: 22,
  },
  availability: {
    color: '#a5f3fc',
    fontSize: 13,
    fontWeight: '600',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#22d3ee',
    borderRadius: 14,
    marginTop: 8,
    padding: 15,
  },
  buttonText: {
    color: '#083344',
    fontSize: 16,
    fontWeight: '700',
  },
  confirmation: {
    color: '#67e8f9',
    fontSize: 14,
    textAlign: 'center',
  },
});
