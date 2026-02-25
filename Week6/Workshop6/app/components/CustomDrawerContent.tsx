import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';

// Component สำหรับ custom drawer content (เมนูที่ปรับแต่งเอง)
export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    // DrawerContentScrollView: container ที่สามารถ scroll ได้สำหรับเนื้อหาใน drawer
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContent}
    >
      <View style={styles.headerSection}>
        <View style={styles.profileContainer}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={40} color="#ffffff" />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>John Doe</Text>
            <Text style={styles.userEmail}>john.doe@example.com</Text>
          </View>
        </View>
        <View style={styles.headerDecoration} />
      </View>

      {/* เมนูหลัก แสดงรายการที่มาจาก Drawer.Screen */}
      <View style={styles.drawerItemsContainer}>
        {/* DrawerItemList แสดงรายการเมนูที่กำหนดใน Drawer.Screen */}
        <DrawerItemList {...props} />
      </View>

      {/* แสดงสถิติย่อๆ */}
      <View style={styles.statsSection}>
        <Text style={styles.statsTitle}>Quick Stats</Text>
        {/* Grid สำหรับแสดงสถิติ */}
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flexGrow: 1,
  },
  headerSection: {
    backgroundColor: '#6366f1',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    color: '#e0e7ff',
    fontSize: 14,
    marginTop: 4,
  },
  headerDecoration: {
    marginTop: 16,
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  drawerItemsContainer: {
    flex: 1,
    paddingTop: 8,
  },
  statsSection: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  statsTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
});