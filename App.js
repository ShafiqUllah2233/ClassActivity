import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProductCard from './components/ProductCard';

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
      <ProductCard
        onExplore={() => setSelectedProduct('Aurora Headphones')}
        selectedProduct={selectedProduct}
      />
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
