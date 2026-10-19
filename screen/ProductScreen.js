import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const product = require('../assets/data.json');

function ProductScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={{ 
            uri: product.image && product.image.startsWith('http') 
              ? product.image 
              : 'https://unsplash.com' 
          }} 
          style={styles.productImage} 
          resizeMode="contain"
        />
        <Text style={styles.category}>{(product.category || 'phone').toUpperCase()}</Text>
        <Text style={styles.title}>{product.name || 'Iphone X'}</Text>
        {product.stock === "Yes" && (
          <View style={styles.stockBadge}>
            <Text style={styles.stockText}>NË STOK</Text>
          </View>
        )}
        <Text style={styles.description}>{product.description || 'Lorem ipsum dolor sit amet'}</Text>
        <Text style={styles.price}>{product.price || '$400'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    width: '100%',
    maxWidth: 450,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  productImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
  category: {
    fontSize: 12,
    color: '#888',
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111',
    textAlign: 'center',
    marginBottom: 10,
  },
  stockBadge: {
    backgroundColor: '#e6f4ea',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 16,
  },
  stockText: {
    color: '#137333',
    fontSize: 11,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 24,
  },
  price: {
    fontSize: 32,
    fontWeight: '900',
    color: '#000',
  },
});

export default ProductScreen;

