import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.eyebrow}>EXPO PRODUCT EXPLORER</Text>
        <Text style={styles.title}>Discover your next favorite.</Text>
        <Text style={styles.subtitle}>A tiny catalog built with Expo and React Native.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardLabel}>FEATURED PRODUCT</Text>
        <Text style={styles.productName}>Aurora Headphones</Text>
        <Text style={styles.productDescription}>
          Immersive sound, all-day comfort, and a battery that keeps up with you.
        </Text>
        <Text style={styles.availability}>Available now · Free shipping</Text>
        <Pressable style={styles.button} onPress={() => setSelectedProduct('Aurora Headphones')}>
          <Text style={styles.buttonText}>Explore product</Text>
        </Pressable>
        {selectedProduct ? <Text style={styles.confirmation}>Viewing {selectedProduct}</Text> : null}
      </View>
      <View style={styles.profile}>
        <Text style={styles.badge}>MCP-ASSISTED BUILD</Text>
        <Text style={styles.profileTitle}>Built by Shafiq ullah</Text>
        <Text style={styles.profileSubtitle}>Roll No. 2556</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 24,
    justifyContent: 'space-between',
    paddingTop: 88,
    paddingBottom: 48,
  },
  header: {
    gap: 12,
  },
  eyebrow: {
    color: '#67e8f9',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
  },
  title: {
    color: '#f8fafc',
    fontSize: 38,
    fontWeight: '800',
    lineHeight: 44,
  },
  subtitle: {
    color: '#cbd5e1',
    fontSize: 16,
    lineHeight: 24,
  },
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
  profile: {
    alignItems: 'center',
    gap: 4,
  },
  badge: {
    backgroundColor: '#164e63',
    borderRadius: 999,
    color: '#67e8f9',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.2,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  profileTitle: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: '700',
  },
  profileSubtitle: {
    color: '#94a3b8',
    fontSize: 14,
  },
});
