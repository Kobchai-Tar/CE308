import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useLocalSearchParams, router } from "expo-router";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";

export default function ProductScreen() {
  const { id, name, price } = useLocalSearchParams();

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Product Detail
      </Text>

      <Text style={styles.text}>
        ID: {id}
      </Text>

      <Text style={styles.text}>
        Name: {name}
      </Text>

      <Text style={styles.text}>
        Price: {price}
      </Text>


      {/* ปุ่มเพิ่มลงตะกร้า */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          dispatch(
            addItem({
              id: id as string,
              name: name as string,
              price: Number(price),
              qty: 1,
            })
          )
        }
      >
        <Text style={styles.btnText}>
          Add to Cart
        </Text>
      </TouchableOpacity>


      {/* ปุ่มกลับ */}
      <TouchableOpacity
        style={styles.btnBack}
        onPress={() => router.back()}
      >
        <Text style={styles.btnText}>
          Go Back
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  text: {
    fontSize: 18,
    marginBottom: 10,
  },

  btn: {
    backgroundColor: "purple",
    padding: 10,
    marginTop: 20,
  },

  btnBack: {
    backgroundColor: "gray",
    padding: 10,
    marginTop: 10,
  },

  btnText: {
    color: "white",
    fontSize: 16,
  },
});