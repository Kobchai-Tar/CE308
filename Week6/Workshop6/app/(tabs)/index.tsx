import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const products = [
    { id: '1', name: 'Premium Coffee Bean', price: 450 , image: 'https://picsum.photos/400/300?1' },
    { id: '2', name: 'Green Tea Powder', price: 350 , image: 'https://picsum.photos/400/300?2'},
    { id: '3', name: 'Oat Milk 1L', price: 115 , image: 'https://picsum.photos/400/300?3' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: '/product/[id]',
                params: {
                  id: item.id,
                  name: item.name,
                  price: item.price.toString(),
                  image: item.image,
                },
              })
            }
          >
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.price}>฿ {item.price}</Text>
            <Text style={styles.viewDetail}>ดูรายละเอียด →</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  price: {
    fontSize: 16,
    color: '#4F46E5',
    marginTop: 6,
  },
  viewDetail: {
    marginTop: 10,
    fontSize: 14,
    color: '#6B7280',
  },
});