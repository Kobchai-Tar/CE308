import { View, Text, FlatList } from 'react-native';
import { CustomButton } from './CustomButton';
import { Item } from "./types";

type ItemListProps = {
    items: {
        id: string;
        productName: string;
        pcs: number;
        price: number;
        btnColor: "primary" | "secondary" | "danger";
        btnSize: "small" | "medium" | "large";
    }[];
};

export const ItemList = ({ items }: ItemListProps) => {
    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View className="p-4 border-b border-gray-300">
                    <Text className="text-4xl font-bold">ชื่อสินค้า : {item.productName} </Text>
                    <Text className="text-1xl text-gray-800">ราคา : {item.price} {"\n"} จำนวน : {item.pcs} </Text>
                    <View className="mt-3 items-start">
                        <CustomButton
                            title="สั่งซื้อ"
                            variant={item.btnColor}
                            size="medium"
                            onPress={() => {
                                console.log(item.productName);
                            }}
                        />
                    </View>
                
                </View>
            )}
        />
    );
}