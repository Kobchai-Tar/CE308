import "./global.css"
import { View, Text } from "react-native";
import { ItemList } from "./component/ItemCard";
import { CenteredView } from "./component/CenteredView";
import { CustomButton } from "./component/CustomButton";
import { CustomInput } from "./component/CostomInput";
import { Item } from "./component/types";
import { useState } from "react";

export default function Index() {
  
  // Workshop 4.1
  // const data: Item[] = [
  //   { id: "1", productName: "Banana", price: 2000, pcs: 10, btnSize:"small", btnColor: "primary" },
  //   { id: "2", productName: "Mango", price: 2000, pcs: 10, btnSize:"medium", btnColor: "secondary"},
  //   { id: "3", productName: "Apple", price: 2000, pcs: 10, btnSize:"large", btnColor: "danger"},
  // ];

  // Workshop 4.2
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [pcs, setPcs] = useState("");

  const handleSubmit = () => {
    console.log({
      productName,
      price,
      pcs,
    });
  };

  return (

    // Workshop 4.1
    // <CenteredView backgroundColor="bg-blue-100">
    //   <ItemList items={data} />
    // </CenteredView>


    // Workshop 4.2
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">
        กรอกข้อมูลสินค้า
      </Text>

      <CustomInput
        label="ชื่อสินค้า"
        value={price}
        onChangeText={setPrice}
        placeholder="กรอกราคา"
        keyboardType="numeric"
      />
      
      <CustomInput
        label="ราคา"
        value={price}
        onChangeText={setPrice}
        placeholder="กรอกราคา"
        keyboardType="numeric"
      />

      <CustomInput
        label="จำนวน"
        value={pcs}
        onChangeText={setPcs}
        placeholder="กรอกจำนวน"
        keyboardType="numeric"
      />

    <View className="mt-2 items-start">
      <CustomButton
        title="ยืนยัน"
        variant="primary"
        size="medium"
        onPress={handleSubmit}
      />
    </View>
  </View>
);
}
