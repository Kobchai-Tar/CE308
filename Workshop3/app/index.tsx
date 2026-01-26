import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

type ListItem = {
  id: string;
  title: string;
};

const DATA = [
  { id: "1", title: "ชื่อ : กอบชัย เหลียวจันทร" },
  { id: "2", title: "ชื่อเล่น : ต้า" },
  { id: "3", title: "อีเมล : 66111810@dpu.ac.th" },
];

const EDUCATION_DATA = [
  { id: "1", title: "ระดับ : ปริญญาตรี" },
  { id: "2", title: "มหาวิทยาลัย : ธุรกิจบัณฑิตย์" },
  { id: "3", title: "สาขา : วิศวกรรมคอมพิวเตอร์ (ปีที่ 3)" },
];

const ADDRESS_DATA = [
  {
    id: "1",
    title:
      "62/157 ถนนหนองเพรางาย 11110 อ.บางบัวทอง ต.บางคูรัด จ.นนทบุรี่",
  },
];

const LIKE_DATA: ListItem[] = [
  { id: "1", title: "เล่นเกม" },
  { id: "2", title: "ดูหนัง" },
  { id: "3", title: "แฟน" },
  { id: "4", title: "นอน" },
  { id: "5", title: "เข้าห้องน้ำ" },
  { id: "6", title: "กินเหล้า" },
  { id: "7", title: "เที่ยว" },
  { id: "8", title: "เขียนเว็บ" },
];

const DISLIKE_DATA: ListItem[] = [
  { id: "1", title: "ตุ๊กแก" },
  { id: "2", title: "ห่างแฟน" },
  { id: "3", title: "โค้ดบัค" },
  { id: "4", title: "คอมกาก" },
  { id: "5", title: "เล่นเกมแพ้" },
  { id: "6", title: "กัส" },
];

export default function App() {
  const renderItem = ({ item }: { item: ListItem }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  const BulletList = ({
    data,
    bulletColor,
  }: {
    data: ListItem[];
    bulletColor: string;
  }) => (
    <View>
      {data.map((item) => (
        <View key={item.id} style={styles.bulletRow}>
          <View
            style={[styles.bulletDot, { backgroundColor: bulletColor }]}
          />
          <Text style={styles.bulletText}>{item.title}</Text>
        </View>
      ))}
    </View>
  );


  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      {/* 3 Box */}
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: "#e609ee" }]}>
          <Text style={styles.boxText}>รหัส</Text>
          <Text style={styles.boxText}>66111810</Text>
        </View>

        <View style={[styles.box, { backgroundColor: "#e9a106" }]}>
          <Text style={styles.boxText}>คณะ</Text>
          <Text style={styles.boxText}>CITE</Text>
        </View>

        <View style={[styles.box, { backgroundColor: "#1b8d4b" }]}>
          <Text style={styles.boxText}>สาขา</Text>
          <Text style={styles.boxText}>CE</Text>
        </View>
      </View>

      {/* ข้อมูลส่วนตัว */}
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>ข้อมูลส่วนตัว</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>

      {/* การศึกษา */}
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>การศึกษา</Text>
        <FlatList
          data={EDUCATION_DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>

      {/* ที่อยู่ */}
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>ที่อยู่</Text>
        <FlatList
          data={ADDRESS_DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>

      {/* สิ่งที่ชอบ */}
      <View style={styles.likeSection}>
        <Text style={styles.likeHeader}>สิ่งที่ชอบ</Text>
        <BulletList data={LIKE_DATA} bulletColor="#2ecc71" />
      </View>

      {/* สิ่งที่ไม่ชอบ */}
      <View style={styles.likeSection}>
        <Text style={styles.dislikeHeader}>สิ่งที่ไม่ชอบ</Text>
        <BulletList data={DISLIKE_DATA} bulletColor="#e74c3c" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
  },

  header: {
    height: 100,
    backgroundColor: "#1A535C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  row: {
    flexDirection: "row",
    marginBottom: 20,
  },
  box: {
    flex: 1,
    height: 100,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  boxText: {
    color: "white",
    fontWeight: "600",
  },

  contentSection: {
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  itemContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#9b4de0',
  },
  itemText: {
    fontSize: 16,
  },
  likeSection: {
    marginTop: 20,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    paddingBottom: 10,
  },

  likeHeader: {
    backgroundColor: "#e67e22",
    color: "white",
    padding: 12,
    fontSize: 18,
    fontWeight: "bold",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  dislikeHeader: {
    backgroundColor: "#e67e22",
    color: "white",
    padding: 12,
    fontSize: 18,
    fontWeight: "bold",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  bulletRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },

  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 10,
  },

  bulletText: {
    fontSize: 15,
    flex: 1,
  },
});