import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'react-native';

export default function ProductScreen() {
  const { id, name, price, image } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{name}</Text>

        <Text style={styles.price}>฿ {price}</Text>

        <Text style={styles.description}>
          สินค้ารหัส #{id} เป็นสินค้าคุณภาพดี เหมาะสำหรับการใช้งานประจำวัน
          ผลิตจากวัสดุพรีเมียม รับประกันความพึงพอใจ
        </Text>

        <Image
          source={{ uri: image as string }}
          style={styles.productImage}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>สั่งซื้อสินค้า</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>← กลับหน้าหลัก</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productImage: {
  width: '100%',
  height: 200,
  borderRadius: 12,
  marginBottom: 16,
},
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  price: {
    fontSize: 20,
    color: '#4F46E5',
    fontWeight: '600',
    marginBottom: 16,
  },
  description: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#4F46E5',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    alignItems: 'center',
  },
  backText: {
    color: '#6B7280',
    fontSize: 14,
  },
});