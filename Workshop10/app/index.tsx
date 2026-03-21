import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const PRODUCTS = [
  { id: '1', name: 'iPhone 15', price: 32000, qty: 1 },
  { id: '2', name: 'MacBook Air', price: 34000, qty: 1 },
  { id: '3', name: 'AirPods Pro', price: 8900, qty: 1 },
];

export default function HomeScreen() {
  const router = useRouter();
  const dispatch = useDispatch();
  
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (product: any) => {
    dispatch(addItem(product));
    alert(`เพิ่ม ${product.name} ลงตะกร้าแล้ว!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ร้านค้าไอที</Text>
      
      <TextInput
        style={styles.searchInput}
        placeholder="🔍 ค้นหาสินค้า..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)} 
      />

      <TouchableOpacity 
        style={styles.cartButton}
        onPress={() => router.push('/cart')}
      >
        <Text style={styles.cartButtonText}>🛒 ไปที่ตะกร้าสินค้า</Text>
      </TouchableOpacity>

      <FlatList
        data={filteredProducts} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <View>
              <Text style={styles.productName}>{item.name}</Text>
              <Text>{item.price.toLocaleString()} บาท</Text>
            </View>
            <Button title="เพิ่ม" onPress={() => handleAddToCart(item)} />
          </View>
        )}
        ListEmptyComponent={<Text style={{textAlign: 'center', marginTop: 20}}>ไม่พบสินค้าที่ค้นหา</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
 
  searchInput: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    fontSize: 16,
  },
  cartButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center'
  },
  cartButtonText: { color: 'white', fontWeight: 'bold' },
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2
  },
  productName: { fontSize: 18, fontWeight: '500' }
});
