import { Text, View, Button, StyleSheet, Pressable, ScrollView } from "react-native";
import { router } from 'expo-router';

const products = [
  { id: '1', name: 'iPhone 15', price: '32,900'},
  { id: '2', name: 'iPad Air', price: '23,900'},
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Home!</Text>

      <Button 
        title="Go to Details"
        onPress={() => router.push('/details')}
      />

      <Button
        title="Go to Profile (Purple Header)"
        onPress={() => router.push('/profile')}
      />

      <Button
        title="Go to Settings (Orange Header)"
        onPress={() => router.push('/settings')}
      />

      <Button 
        title="Open Login Modal"
        onPress={() => router.push('/login')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
})
