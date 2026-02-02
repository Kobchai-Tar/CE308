import { View, Text, FlatList } from 'react-native'

type ItemListProps = {
    items: { id: string; productName: string, pcs: number; price: number}[];
};

export const ItemList = ({ items } : ItemListProps) => {
    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View className="p-4 border-b border-gray-300">
                    <Text className="text-4xl font-bold ">ชื่อสินค้า: {item.productName} </Text>
                    <Text className="text-lg text-gray-800"> ราคา: {item.price} {"\n"} จำนวน: {item.pcs}</Text>
                </View>
            )}
        />
    );
};