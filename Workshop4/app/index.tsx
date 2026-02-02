import "./global.css"
import { Text } from "react-native";
import { ItemList } from "./component/ItemCard";
import { CenteredView } from "./component/CenteredView";
import { CustomButton } from "./component/CustomButton";
import { Item } from "./component/types";

export default function Index() {
  const data: Item[] = [
    { id: "1", productName: "Banana", price: 2000, pcs: 10, btnSize:"small", btnColor: "primary" },
    { id: "2", productName: "Mango", price: 2000, pcs: 10, btnSize:"medium", btnColor: "secondary"},
    { id: "3", productName: "Apple", price: 2000, pcs: 10, btnSize:"large", btnColor: "danger"},
  ];

  return (
    <CenteredView backgroundColor="bg-blue-100">
      <ItemList items={data} />
    </CenteredView>
  );
}
