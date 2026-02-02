import "./global.css"
import { Text } from "react-native";
import { CenteredView } from "./component/CenteredView";
import { CustomButton } from "./component/CustomButton";
import { ItemList } from "./component/ItemCard";

export default function Index() {

  const data = [
    { id: "1", productName: "Apple" , price: 2000, pcs:10, btnSize: "small" , btnColor: "primary"},
    { id: "2", productName: "Banana" , price: 2000, pcs:10, btnSize: "medium" , btnColor: "secondary"},
    { id: "3", productName: "Mango" , price: 2000, pcs:10, btnSize: "large" , btnColor: "danger"},
  ];

  return (
    <CenteredView backgroundColor="bg=blue-100">
      {/* <CustomButton title="Primary" variant="primary" size="md" onPress={() => alert("Primary Clicked!")} />
      <CustomButton title="Secondary" variant="secondary" size="lg" onPress={() => alert("Secondary Clicked!")} />
      <CustomButton title="Danger" variant="danger" size="sm" onPress={() => alert("Danger Clicked!")} /> */}
      <ItemList items={data} />
    </CenteredView>
    
  );
}
