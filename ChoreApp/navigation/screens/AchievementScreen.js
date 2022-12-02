import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { Product } from '../components/Product.js';
import { getProducts } from '../services/ProductsService.js';

export default function AchievementScreen({navigation}) {
  
    function renderProduct({item: product}) {
      return (
        <Product {...product} 
        
        />
      );
    }
    
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      setProducts(getProducts());
    });
    
    return (
      <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={renderProduct}
      />
    );
  }
  
  const styles = StyleSheet.create({
    productsList: {
      backgroundColor: '#eeeeee',
    },
    productsListContainer: {
      backgroundColor: '#eeeeee',
      paddingVertical: 8,
      marginHorizontal: 8,
    },
  });

