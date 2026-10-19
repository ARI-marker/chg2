import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductScreen from './screen/ProductScreen'; 

export default function App() {
  return (
    <View style={styles.container}>
      <ProductScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
