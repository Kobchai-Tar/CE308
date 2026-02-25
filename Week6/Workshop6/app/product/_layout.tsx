import { Stack } from 'expo-router';

export default function ProductLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#F97316' }, // สีส้มแบบตัวอย่าง
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Product Details',
        }}
      />
    </Stack>
  );
}