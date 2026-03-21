import { View, Text, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeItem, clearCart } from '../redux/cartSlice';

export default function CartScreen() {

  const items = useSelector(
    (state: RootState) => state.cart.items
  );

  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>

      <Text>Cart</Text>

      <FlatList
        data={items}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.name} x{item.qty}
            </Text>

            <Button
              title="Remove"
              onPress={() =>
                dispatch(removeItem(item.id))
              }
            />
          </View>
        )}
      />

      <Text>Total: {total}</Text>

      <Button
        title="Clear"
        onPress={() => dispatch(clearCart())}
      />

    </View>
  );
}